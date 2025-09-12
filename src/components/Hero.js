import React from "react";

/**
 * Hero component
 * - Shows: "hey, you have reached Mahadevan's Portfolio website"
 * - Uses your custom Tailwind palette (tailwind.config.js)
 * - Accepts `bgImage` prop (string path or URL). If not provided, shows a gradient fallback.
 */
export default function Hero({ bgImage = "", dp = "" }) {
  // inline style for background image + overlay
  const bgStyle = bgImage
    ? {
        backgroundImage: `linear-gradient(to bottom right, rgba(15,15,15,0.28), rgba(15,15,15,0.18)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
    : {};

  return (
    <header
      className="w-full min-h-screen flex items-center bg-fixed"
      // fallback gradient when bgImage not provided uses your palette
      style={
        Object.keys(bgStyle).length
          ? bgStyle
          : {
              background:
                "linear-gradient(135deg, rgba(132,169,140,0.95) 0%, rgba(82,121,111,0.95) 50%, rgba(47,62,70,0.95) 100%)",
            }
      }
    >
      {/* glass card centered */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white/6 backdrop-blur-md border border-ash_gray-600/40 rounded-3xl p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left: Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-stone-200">
                hey, you have reached{" "}
                <span className="block text-cambridge_blue-500">Mahadevan's Portfolio website</span>
              </h1>

              <p className="mt-6 text-md text-hookers_green-900 max-w-2xl">
                I build ML & AI tools and create elegant web experiences. Browse projects,
                explore my skills, or download my resume from the navbar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium shadow-sm
                             bg-dark_slate_gray-500 text-ash_gray-900 hover:bg-hookers_green-500 hover:text-white transition"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-ash_gray-400
                             text-ash_gray-500 hover:bg-ash_gray-500 hover:text-dark_slate_gray-700 transition"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right: circular badge MB */}
            <div
                className="w-40 h-40 rounded-full flex items-center justify-center shrink-0
                        bg-gradient-to-br from-cambridge_blue-500 to-hookers_green-500 shadow-xl overflow-hidden"
            >
                <img
                    src={dp}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

          </div>
        </div>

        {/* subtle credit / hint */}
        <div className="mt-6 text-center text-xs text-ash_gray-800/80">
            Built with React & Tailwind CSS. Backend: Node.js + Express + Nodemailer.
        </div>
      </div>
    </header>
  );
}
