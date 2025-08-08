"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import Bubble from "./Bubble";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatUI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [intention, setIntention] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sending]);

  async function handleSend() {
    const content = input.trim();
    if (!content || sending) return;

    setInput("");
    const next: Msg[] = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intention, messages: next }),
      });
      if (!res.ok) throw new Error("Chat failed");
      const data: { reply?: string } = await res.json();

      setMessages((m) => [
        ...m,
        { role: "assistant" as const, content: data.reply ?? "…" },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant" as const,
          content: "Sorry, something went wrong. Try again.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="mx-auto max-w-3xl h-[calc(100dvh-4rem)] flex flex-col gap-0">
      {/* Intention pill */}
      <div className="px-3 pt-2">
        <input
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Intention (e.g., comfort, clarity)"
          className="w-full rounded-2xl border bg-white/70 px-4 py-2 text-sm outline-none"
        />
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto p-3 pb-4 mt-3 rounded-xl bg-white/40 border">
        <AnimatePresence initial={false}>
          {messages.length === 0 ? (
            <motion.div
              key="empty"
              className="h-full grid place-items-center text-center text-sm opacity-70"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
            >
              <div>
                <div className="mb-2">🕊️</div>
                <p>Welcome. Set your intention above, then share what’s on your mind.</p>
                <p className="mt-1">Tara will respond gently.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div key="list" className="space-y-3" initial={false}>
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    {m.role === "assistant" ? (
                      <div className="mr-auto max-w-[80%] rounded-2xl bg-white/80 px-4 py-3 border">
                        <ReactMarkdown className="prose prose-sm max-w-none">
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <Bubble role={m.role} text={m.content} />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* typing indicator while waiting */}
              {sending && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="mr-auto max-w-[70%] rounded-2xl bg-white/80 px-4 py-3 border"
                >
                  <span className="inline-flex gap-1 align-middle">
                    <Dot /> <Dot delay={0.12} /> <Dot delay={0.24} />
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Composer */}
      <motion.div
        className="sticky bottom-0 p-3 backdrop-blur"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Write to Tara…"
            className="flex-1 rounded-2xl border bg-white px-4 py-3 outline-none"
          />
          <button
            onClick={handleSend}
            disabled={sending || !input.trim()}
            className="rounded-2xl border px-5 py-3 disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0.3, y: 0 }}
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 1.05, delay }}
      className="inline-block h-2 w-2 rounded-full bg-neutral-500"
    />
  );
}
