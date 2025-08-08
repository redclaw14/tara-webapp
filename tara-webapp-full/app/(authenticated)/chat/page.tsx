import ChatUI from "@/components/chat/ChatUI";

export const metadata = {
  title: "Tara – Chat",
};

export default function Page() {
  return (
    <main className="min-h-[calc(100dvh-3.5rem)] bg-sand">
      <div className="mx-auto max-w-5xl p-4">
        <header className="mb-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium opacity-90">Chat with Tara</h1>
            <span className="text-sm opacity-60">breathe</span>
          </div>
          {/* breath bar */}
          <div className="mt-2 h-[3px] rounded-full bg-neutral-300/60 overflow-hidden">
            <div className="h-full w-1/3 mx-auto rounded-full bg-neutral-600/50 breathe-bar" />
          </div>
        </header>

        <ChatUI />
      </div>
    </main>
  );
}
