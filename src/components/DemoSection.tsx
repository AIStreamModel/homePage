
import { Play, ArrowRight, Video, Mic, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoSection() {
  const demoSteps = [
    {
      step: "01",
      icon: <Mic className="h-6 w-6" />,
      title: "開始講話",
      description: "直播者開始說話，系統即時錄音"
    },
    {
      step: "02", 
      icon: <TrendingUp className="h-6 w-6" />,
      title: "內容分析",
      description: "AI 分析語音內容、情緒和笑點"
    },
    {
      step: "03",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "觀眾互動",
      description: "虛擬觀眾根據分析結果產生回應"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Video className="h-4 w-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">實際演示</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            看看系統如何運作
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            透過簡單的三個步驟，體驗完整的 AI 直播訓練流程
          </p>
        </div>

        {/* Demo Video Placeholder */}
        <div className="mb-16 animate-fade-in">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 flex items-center justify-center group hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400 rounded-full"></div>
                <div className="absolute top-20 right-20 w-12 h-12 border border-pink-400 rounded-full"></div>
              </div>
              
              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <p className="text-white text-lg font-medium mt-4 group-hover:text-blue-300 transition-colors">
                  點擊觀看 Demo 影片
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {demoSteps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-full mb-4">
                  {step.step}
                </div>
                
                {/* Icon and content */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700/50 rounded-lg mb-4 text-blue-400">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow between steps */}
              {index < demoSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              準備好開始了嗎？
            </h3>
            <p className="text-gray-300 mb-6">
              立即體驗我們的 AI 直播訓練系統，讓你的直播技巧快速提升！
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              立即開始體驗
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
