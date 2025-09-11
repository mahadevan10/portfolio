import { Github, Linkedin, Mail, Phone } from "lucide-react"; 

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-ash_gray-100 p-6">
      <div className="w-full max-w-2xl bg-ash_gray-200 rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-ash_gray-500 mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-ash_gray-400 mb-6">
          Feel free to drop me a message or connect through my socials below.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/mahadevan10" target="_blank" rel="noopener noreferrer" className="text-ash_gray-400 hover:text-ash_gray-500 transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/mahadevanmn10" target="_blank" rel="noopener noreferrer" className="text-ash_gray-400 hover:text-ash_gray-500 transition">
            <Linkedin size={28} />
          </a>
          <a href="mailto:mahadevanmn10@gmail.com" className="text-ash_gray-400 hover:text-ash_gray-500 transition">
            <Mail size={28} />
          </a>
          <a href="tel:+918848570115" className="text-ash_gray-400 hover:text-ash_gray-500 transition">
            <Phone size={28} />
          </a>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-ash_gray-400 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-xl border border-ash_gray-300 px-4 py-2 bg-white text-ash_gray-200 focus:ring-2 focus:ring-ash_gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ash_gray-400 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-xl border border-ash_gray-300 px-4 py-2 bg-white text-ash_gray-200 focus:ring-2 focus:ring-ash_gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ash_gray-400 mb-1">Message</label>
            <textarea
              rows={4}
              required
              className="w-full rounded-xl border border-ash_gray-300 px-4 py-2 bg-white text-ash_gray-200 focus:ring-2 focus:ring-ash_gray-400 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-ash_gray-300 hover:bg-ash_gray-400 text-white font-semibold py-2 rounded-xl transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </section>
  );
}

