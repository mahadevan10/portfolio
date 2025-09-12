
// SkillsHybrid.jsx
import React, { useEffect } from "react";

const categories = [
  { title: "Programming", desc: "Clean, readable code & automation.", items: ["Python", "MERN stack"] },
  { title: "ML & Data", desc: "Models, pipelines, and visualizations.", items: ["LSTM", "TensorFlow", "Pandas", "Numpy", "matplotlib"] },
  { title: "Tools & Infra", desc: "Deployment and productivity.", items: ["MS Excel", "Git", "Render", "Huggingface"] },
];

const allChips = [
  "React","Node.js","OpenCV","Scikit-learn","TensorFlow","Excel","Web Scraping",
  "Time-series data","Tailwind CSS","RAG Systems","HTML","CSS"
];


export default function SkillsHybrid() {
  useEffect(() => {
  }, []);

  return (
    <section id="skills" className="py-16 px-6" style={{
      background: "var(--ash)", // set in root or tailwind config
      color: "var(--dark)"
    }}>
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
        {/* LEFT: categories */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--dark)" }}>
            Skills
          </h2>
          <p className="text-base max-w-xl">
            I combine engineering discipline with data-driven decision making — below are the tools and workflows I use regularly.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map(cat => (
              <div key={cat.title} className="p-5 rounded-2xl shadow-md" style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))",
                border: "1px solid rgba(0,0,0,0.06)"
              }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--forest)" }}>{cat.title}</h3>
                <p className="text-sm text-dark/70 mb-3">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm font-medium" style={{
                      background: "var(--earth)",
                      color: "var(--dark)"
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* chip cloud */}
          <div className="mt-6 p-4 rounded-2xl" style={{ borderTop: "1px dashed rgba(0,0,0,0.06)" }}>
            <h4 className="text-sm font-semibold mb-3 text-dark/80">Also familiar with</h4>
            <div className="flex flex-wrap gap-2">
              {allChips.map(c => (
                <span key={c} className="text-xs px-3 py-1 rounded-full" style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "transparent",
                  color: "var(--dark)"
                }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

   
      </div>
    </section>
  );
}
