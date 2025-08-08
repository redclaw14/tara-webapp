'use client';

import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function ChatUI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [intention, setIntention] = useState('');
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  async function handleSend() {
    const content = input.trim();
    if (!content || sending) return;

    setInput('');
    const next: Msg[] = [...messages, { role: 'user', content }];
    setMessages(next);
    setSending(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ intention, messages: next }),
      });
      if (!res.ok) throw new Error('Chat failed');
      const data: { reply?: string } = await res.json();

      setMessages((m) => [
        ...m,
        { role: 'assistant', content: data.reply ?? '…' },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: 'Sorry, something went wrong. Try again.' },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="min-h-[calc(100vh-56px)] mx-auto w-full max-w-4xl px-3 pb-28 pt-3">
      {/* Intention bar */}
      <div className="sticky top-0 z-10 mb-3">
        <input
          value={intention}
          onChange={(e) => setIntention(e.target.value)}
          placeholder="Intention (z.B. Trost, Klarheit)"
          className="w-full rounded-2xl border bg-white/70 px-4 py-3 outline-none backdrop-blur"
        />
      </div>

      {/* Messages */}
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className={
                m.role === 'user'
                  ? 'ml-auto max-w-[80%] rounded-2xl bg-emerald-100/70 px-4 py-3'
                  : 'mr-auto max-w-[80%] rounded-2xl bg-white/80 px-4 py-3 border'
              }
            >
              <ReactMarkdown className="prose prose-sm max-w-none">
                {m.content}
              </ReactMarkdown>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading bubble */}
        <AnimatePresence>
          {sending && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="mr-auto max-w-[70%] rounded-2xl bg-white/80 px-4 py-3 border"
            >
              <span className="inline-flex gap-1">
                <Dot /> <Dot delay={0.1} /> <Dot delay={0.2} />
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Composer */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-sand/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center gap-2 px-3 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Schreib Tara…"
            className="flex-1 rounded-2xl border bg-white/70 px-4 py-3 outline-none backdrop-blur"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || sending}
            className="rounded-2xl border px-4 py-3 disabled:opacity-50"
          >
            Senden
          </button>
        </div>
      </div>
    </div>
  );
}

function Dot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0.3, y: 0 }}
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 1.1, delay }}
      className="inline-block h-2 w-2 rounded-full bg-neutral-500"
    />
  );
}
