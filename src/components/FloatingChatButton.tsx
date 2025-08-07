import { Button } from "./ui/button"
import Link from "next/link"
 import { Chat } from '@nsmr/pixelart-react';

export default function FloatingChatButton() {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button asChild className="rounded-full p-0 transform transition-all duration-300 
                                 hover:scale-110 hover:rotate-3 hover:shadow-xl
                                 animate-float bg-gradient-to-r from-purple-500 to-pink-500
                                 hover:from-purple-600 hover:to-pink-600" size="sm">
          <Link href="/contact" className="inline-flex items-center px-4 py-3">
             <Chat className="animate-bounce" size={24} color="white" />
            <span>Let&apos;s Chat!</span>
          </Link>
        </Button>
      </div>

    )
}