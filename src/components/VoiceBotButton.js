export default function VoiceBotButton({ className = "" }) {
  return (
    <a
      href="https://voice-bot-web-28339467651.us-central1.run.app"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold shadow bg-gradient-to-r from-cambridge_blue-500 to-hookers_green-500 text-white hover:from-hookers_green-500 hover:to-cambridge_blue-500 transition ${className}`}
    >
      {/* Phone SVG icon */}
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
        <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.29a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.06.35 2.16.59 3.29.72a2 2 0 0 1 1.72 2z"/>
      </svg>
      Talk with Mahadevan's voiceBot
    </a>
  );
}