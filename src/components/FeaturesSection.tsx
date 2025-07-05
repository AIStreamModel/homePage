
import { Mic, Bot, BarChart3, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="h-12 w-12 text-blue-400" />,
      title: "語音轉文字與內容分析",
      description: "分析直播者講話的情緒、重點、笑點，提供即時的內容品質評估",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Bot className="h-12 w-12 text-purple-400" />,
      title: "AI 聊天觀眾互動",
      description: "模擬真實聊天室回應，提供多樣化的觀眾互動訓練環境",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-green-400" />,
      title: "直播數據視覺化",
      description: "觀眾人數折線圖、觀眾反應熱度圖等，讓你清楚了解表現狀況",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">核心功能</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            三大智慧功能
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            結合最新的 AI 技術，為直播創作者提供全方位的訓練與分析工具
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-500 animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background decoration */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {feature.description}
              </p>
              
              {/* Hover effect line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              完整的直播訓練生態系統
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              我們不只是提供工具，更是打造一個完整的學習環境。從內容分析、觀眾互動到數據洞察，
              每個環節都經過精心設計，幫助你成為更優秀的直播創作者。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
