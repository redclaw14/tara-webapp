// app/chat/page.tsx  (or app/app/chat/page.tsx)
import ChatUI from "@/components/chat/ChatUI";

export const metadata = {
  title: "Tara – Chat",
};

export default function Page() {
  return (
    <main className="min-h-[calc(100dvh-3.5rem)] bg-sand">
      <div className="mx-auto max-w-5xl p-4">
        <header className="mb-3 flex items-center justify-between">
          <h1 className="text-lg font-medium opacity-90">Chat with Tara</h1>
          <span className="text-sm opacity-60">breathe</span>
        </header>
        <ChatUI />
      </div>
    </main>
  );
}
