"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Plus, Minus, ArrowRight, Loader2, RefreshCw, Zap } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function InteractiveDemo() {
  const [formData, setFormData] = useState({
    age: 28,
    sleep: 6,
    activity: "sedentary",
    stress: "high",
    diet: "average"
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCalculate = async () => {
    setLoading(true);
    setError("");
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
      const prompt = `
      You are Habito AI, a behavioral health profiling engine for a health startup.
      Analyze this user profile: Age ${formData.age}, Sleep: ${formData.sleep} hours/night, Activity: ${formData.activity}, Stress: ${formData.stress}, Diet: ${formData.diet}.
      
      Return a JSON object with this exact structure:
      {
        "healthScore": a number from 0 to 100 representing their baseline health score (lower means higher risk. e.g sedentary/high stress/poor diet should be around 40-50),
        "riskIndicators": [ array of 2 short clinical insights about their specific risk factors ],
        "recommendations": [ array of 3 actionable micro-habits based on their profile, labeled [EASY], [MEDIUM], [STRETCH] respectively ]
      }
      Do NOT include markdown formatting or backticks, just the exact raw json object.
      `;

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // updated from gemini-pro to working flash model
      const response = await model.generateContent(prompt);
      let resultText = response.response.text() || "{}";

      if (resultText.includes("\`\`\`")) {
        resultText = resultText.replace(/\`\`\`json/g, "").replace(/\`\`\`/g, "").trim();
      }

      setResult(JSON.parse(resultText));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-habito-teal-light/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-habito-teal-primary/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-habito-teal-primary font-bold tracking-wider uppercase text-sm mb-4 block">Interactive Demo</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-habito-neutral-dark mb-6">Calculate Your Habit Risk Index</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience our behavioral profiling AI. Enter your current lifestyle metrics to see your personalized early-warning insights.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-habito-teal-light/10 pointer-events-none"></div>

          {/* Input Form */}
          <div className="space-y-8 relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 border-b border-gray-100 pb-4">Lifestyle Profile</h3>

            <div className="space-y-6">
              {/* Age & Sleep */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-habito-teal-primary/50 transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sleep (hours/night)</label>
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-2">
                    <button onClick={() => setFormData({ ...formData, sleep: Math.max(3, formData.sleep - 1) })} className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"><Minus size={16} /></button>
                    <span className="flex-1 text-center font-bold text-gray-800">{formData.sleep}</span>
                    <button onClick={() => setFormData({ ...formData, sleep: Math.min(12, formData.sleep + 1) })} className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"><Plus size={16} /></button>
                  </div>
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-xl">
                  {['sedentary', 'moderate', 'active'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setFormData({ ...formData, activity: level })}
                      className={`py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${formData.activity === level ? 'bg-white text-habito-teal-deep shadow-sm border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stress Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Daily Stress Level</label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-xl">
                  {['low', 'medium', 'high'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setFormData({ ...formData, stress: level })}
                      className={`py-2 px-3 rounded-lg text-sm font-medium capitalize transition-all ${formData.stress === level ? 'bg-white text-habito-teal-deep shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Diet Quality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diet Quality (takeout frequency)</label>
                <select
                  value={formData.diet}
                  onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-habito-teal-primary/50 text-gray-700 font-medium"
                >
                  <option value="good">Mostly Home Cooked (Good)</option>
                  <option value="average">Mix of Home/Takeout (Average)</option>
                  <option value="poor">Mostly Delivery Apps (Poor)</option>
                </select>
              </div>

              <button
                onClick={handleCalculate}
                disabled={loading}
                className="w-full bg-habito-neutral-dark text-white rounded-xl py-4 font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {loading ? <Loader2 className="animate-spin mr-3 w-5 h-5" /> : <Activity className="mr-3 w-5 h-5" />}
                {loading ? "AI Running Pathways..." : "Generate Health AI Profile"}
              </button>

              {error && <p className="text-red-500 text-sm text-center font-medium mt-2 bg-red-50 py-2 rounded-lg">{error}</p>}
            </div>
          </div>

          {/* Results Output */}
          <div className="bg-gray-50 rounded-[1.5rem] p-8 border border-gray-100 flex flex-col justify-center relative overflow-hidden z-10 min-h-[400px]">
            {!result && !loading && (
              <div className="text-center text-gray-400">
                <Activity size={56} className="mx-auto mb-6 opacity-20" />
                <h4 className="text-xl font-bold text-gray-500 mb-2">Waiting for input</h4>
                <p>Fill out your behavioral profile and hit generate to see your AI-powered insights and micro-habits.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 flex-col">
                <RefreshCw size={40} className="text-habito-teal-primary animate-spin mb-4" />
                <p className="font-medium text-gray-600 animate-pulse text-lg">Analyzing lifestyle vectors...</p>
              </div>
            )}

            <AnimatePresence>
              {result && !loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full"
                >
                  <div className="text-center mb-8 border-b border-gray-100 pb-8">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Habit Risk Index</p>
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-36 h-36 transform -rotate-90 filter drop-shadow-md">
                        <circle cx="72" cy="72" r="64" className="text-gray-200" strokeWidth="12" fill="none" stroke="currentColor" />
                        <motion.circle
                          initial={{ strokeDasharray: "0, 1000" }}
                          animate={{ strokeDasharray: `${(result.healthScore / 100) * 402}, 1000` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          cx="72" cy="72" r="64"
                          className={result.healthScore >= 70 ? "text-green-500" : result.healthScore >= 40 ? "text-orange-500" : "text-red-500"}
                          strokeWidth="12" fill="none" stroke="currentColor" strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-gray-800 tracking-tighter">{result.healthScore}</span>
                        <span className="text-xs font-bold text-gray-400 mt-1 uppercase">/100 Score</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg">Key Risk Indicators</h4>
                    {result.riskIndicators.map((risk: string, i: number) => (
                      <div key={i} className="bg-white p-4 rounded-xl border border-red-100/50 shadow-sm flex items-start">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 mt-1.5 mr-4 flex-shrink-0 shadow-sm"></div>
                        <span className="text-sm text-gray-700 font-medium leading-relaxed">{risk}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mt-8">
                    <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                      <Zap size={18} className="text-yellow-500 mr-2" />
                      Recommended Micro-habits
                    </h4>
                    {result.recommendations.map((rec: string, i: number) => (
                      <div key={i} className="bg-habito-teal-light/40 p-4 rounded-xl border border-habito-teal-light/80 flex items-start group hover:bg-habito-teal-light transition-colors">
                        <ArrowRight size={18} className="text-habito-teal-primary mt-0.5 mr-3 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm font-semibold text-gray-800 leading-relaxed">{rec}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
