
import { Github, Mail, FileText, ExternalLink, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "ai-streaming@example.com",
      action: "發送郵件",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Line",
      description: "@ai-streaming-coach",
      action: "加入好友",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "電話",
      description: "+886 2 1234 5678",
      action: "立即撥打",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const resources = [
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub Repository",
      description: "查看我們的開源代碼",
      url: "https://github.com/ai-streaming-coach"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "技術文件",
      description: "詳細的 API 說明文件",
      url: "#"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      title: "Demo 網站",
      description: "線上體驗完整功能",
      url: "#"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">聯絡我們</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            與我們取得聯繫
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            有任何問題或建議？我們很樂意聽到您的聲音，並提供最即時的技術支援
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl mb-6 text-white shadow-lg`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {method.description}
              </p>
              <Button 
                className={`bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white rounded-full px-6 py-2 transform hover:scale-105 transition-all duration-300`}
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            相關資源與連結
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-lg border border-slate-700/40 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700/50 group-hover:bg-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-all duration-300">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {resource.description}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            準備開始你的直播之旅？
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            加入我們的 AI 直播訓練平台，讓科技成為你成功路上的最佳夥伴
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              免費開始使用
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-full text-lg font-medium backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
            >
              了解更多詳情
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
