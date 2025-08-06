import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="mt-16 border-t border-pink-300/30 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-3 text-center">
        {/* Social Icons */}
        <div className="flex gap-5 text-2xl text-gray-800">
          <Link href="https://github.com/Asteele30" target="_blank" className="hover:text-pink-600 transition-colors">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/aspen-steele" target="_blank" className="hover:text-pink-600 transition-colors">
            <FaLinkedin />
          </Link>
          <Link href="mailto:aspen@steele-online.com" className="hover:text-pink-600 transition-colors">
            <FaEnvelope />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-800/80">
          &copy; {new Date().getFullYear()} Aspen Steele - Made with love
        </p>
      </div>
    </footer>
  );
}
