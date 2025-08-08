// components/chat/Bubble.tsx
type Props = {
  role: "user" | "assistant";
  text: string;
};

export default function Bubble({ role, text }: Props) {
  const mine = role === "user";
  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
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
