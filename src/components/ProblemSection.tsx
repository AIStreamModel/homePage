
import { AlertTriangle, Users, TrendingDown, MessageCircle } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <Users className="h-8 w-8 text-red-400" />,
      title: "觀眾喜好難以掌握",
      description: "新手直播者缺乏經驗，不知道什麼內容能吸引觀眾注意"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-orange-400" />,
      title: "缺乏即時反饋",
      description: "現有平台沒有提供即時的情緒分析和內容建議工具"
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-yellow-400" />,
      title: "練習機會有限",
      description: "直播新手沒有安全的環境來練習和改善自己的表現"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">現有痛點</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            直播新手面臨的挑戰
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            許多想要開始直播的創作者，都會遇到這些共同的問題
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-700/50 rounded-full mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution teaser */}
        <div className="text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            我們的解決方案
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            結合 <span className="text-blue-400 font-semibold">AI 聊天模擬</span> + 
            <span className="text-purple-400 font-semibold"> 語音分析</span> + 
            <span className="text-pink-400 font-semibold"> 直播視覺介面</span>
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
