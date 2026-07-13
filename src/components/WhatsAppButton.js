import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923169648707"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12.04 2.41c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.08 0 4.1-.57 5.81-1.59l3.12 1.05-.99-2.91c1.27-1.6 2.09-3.53 2.09-5.6 0-5.52-4.48-10-10-10zM12.04 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M16.59 15.61c-.39-.19-2.18-1.05-2.53-1.18-.35-.13-.6-.19-.85.19-.25.38-.94 1.18-.94 1.18s-.09.19-.09.48c0 .48.58.68.58.68s.35 0 .58-.09c.22-.09.51-.35.6-.58.09-.22.09-.48.09-.73 0-.25-.09-.58-.25-.73-.16-.19-.35-.19-.58-.19H9.5c-.48 0-.58 0-.58.58v5.8c0 .48.58.58.58.58h5.8c.48 0 .58 0 .58-.58v-1.15c0-.48-.09-.58-.58-.58z" />
      </svg>
    </Link>
  );
}