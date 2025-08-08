// components/chat/ChatUI.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Bubble from "./Bubble";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatUI() {
  const [intention, setIntention] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [sending, setSending] = useState(false);

  // auto-scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  async function send() {
    const content = input.trim();
    if (!content) return;
    setInput("");
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ intention, messages: next }),
      });
      if (!res.ok) throw new Error("Chat failed");
      const data = await res.json(); // expecting { reply: string }
      setMessages((m) => [...m, { role: "assistant", content: data.reply || "…" }]);
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Sorry, something went wrong. Try again." },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
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
      <div
        ref={scrollerRef}
        className="flex-1 overflow-y-auto p-3 pb-4 mt-3 rounded-xl bg-white/40 border"
      >
        {messages.length === 0 ? (
          <div className="h-full grid place-items-center text-center text-sm opacity-70">
            <div>
              <div className="mb-2">🕊️</div>
              <p>Welcome. Set your intention above, then share what’s on your mind.</p>
              <p className="mt-1">Tara will respond gently.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} text={m.content} />
            ))}
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="sticky bottom-0 p-3 backdrop-blur">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Write to Tara…"
            className="flex-1 rounded-2xl border bg-white px-4 py-3 outline-none"
          />
          <button
            onClick={send}
            disabled={sending || !input.trim()}
            className="rounded-2xl border px-5 py-3 disabled:opacity-50"
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
