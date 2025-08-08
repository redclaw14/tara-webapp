// app/chat/page.tsx
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import ChatWindow from "@/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <main className="min-h-screen">
      <SignedOut>
        <div className="p-6">
          <p>Please sign in to chat.</p>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>
        <ChatWindow />
      </SignedIn>
    </main>
  );
}
