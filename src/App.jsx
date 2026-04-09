import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      const adviceText = response.data.slip.advice;
      setAdvice(adviceText);
    } catch (error) {
      console.log("Failed to fetch advice: ", error);
    }
  }

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col justify-center items-center">

      {/* Background Layer with Gradient Overlay */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApEKkpqlFpRBuhRAr3reU0fwIr5u247w-Sc13ofOhajmzIIbHgjM8bGjQrkm3t7t4hi6NI_Gd99TDdACud6NdJAFdsx7yCc5siXXF5Y_IgMabTmmY_YRQdU55Gabfhj0Hkdf9fzCSmQaGYj0WRe2E66IpvkwwnVJj2_7cjfs8rMwL_ddSVH9QNapSSVT1RlqEW1fKAcfAM2asF3XhOn4s77LHAHvoGgFWOVYrPklPYe1dPjlu5jfBc3jRvvvzuSovQPXmN8XQNI3w')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/65 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 w-full px-6 flex justify-center">
        {/* The Advice Card */}
        <article className="w-full max-w-[420px] bg-surface-container-high/70 backdrop-blur-xl rounded-card p-10 advice-card-shadow border-l-4 border-primary-container flex flex-col items-start gap-8">

          {/* Metadata Label */}
          <header>
            <span className="text-on-surface-variant text-xs font-bold tracking-[0.1em] uppercase">
              Advice
            </span>
          </header>

          {/* Advice Text Section */}
          <section className="min-h-[140px] flex items-center">
            <h1 className="text-white text-3xl font-extrabold leading-tight tracking-tight">
              "{advice || "Loading wisdom..."}"
            </h1>
          </section>

          {/* Visual Divider */}
          <div className="w-full h-px bg-outline-variant/30"></div>

          {/* Action Section */}
          <footer className="w-full relative">
            <button
              onClick={fetchAdvice}
              className="btn-hover-fx w-full h-14 rounded-xl bg-gradient-to-r from-primary-container to-primary-fixed text-on-primary font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">refresh</span>
              <span>Get New Advice</span>
            </button>

            {/* Insight Glow Decoration */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-container/10 blur-[60px] rounded-full pointer-events-none"></div>
          </footer>
        </article>
      </main>

      {/* Subtle Insight Glow (External) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
    </div>
  );

}