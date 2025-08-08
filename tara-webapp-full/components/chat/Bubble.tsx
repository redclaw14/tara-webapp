// components/chat/Bubble.tsx
type Props = { role: "user" | "assistant"; text: string };

function LotusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
      <path
        d="M12 3c3 4 4 6 4 8 0 2-2 4-4 5-2-1-4-3-4-5 0-2 1-4 4-8Zm0 0c-5 2-7 5-7 8 0 3 3 6 7 7 4-1 7-4 7-7 0-3-2-6-7-8Z"
        fill="currentColor"
        opacity=".85"
      />
    </svg>
  );
}

export default function Bubble({ role, text }: Props) {
  const mine = role === "user";
  return (
    <div className={`flex items-end gap-2 ${mine ? "justify-end" : "justify-start"}`}>
      {!mine && (
        <div className="shrink-0 grid place-items-center w-7 h-7 rounded-full bg-white/80 border text-neutral-700">
          <LotusIcon />
        </div>
      )}
      <div
        className={[
          "max-w-[75%] rounded-2xl px-4 py-3 leading-relaxed",
          mine
            ? "bg-espresso text-sand/95"
            : "bg-white/80 border shadow-sm text-neutral-800",
        ].join(" ")}
      >
        {text}
      </div>
    </div>
  );
}
