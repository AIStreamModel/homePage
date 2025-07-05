
import { Github, Linkedin, Mail, Code, Brain, Palette, Database } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "黃乙恩",
      role: "前端工程師 & API 整合",
      description: "負責前端介面開發與模型 API 整合，專精於 React 和現代化 Web 技術",
      avatar: "https://obs.line-scdn.net/0hQT9oMeJRDnsEFiZLxblxLD1AAgo3cht9am4WTikeVUp6LlUuanYWASQeBEM1LhskOWxASHYWA0kscRsvbSM",
      icon: <Code className="h-5 w-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "李小華",
      role: "AI 模型開發",
      description: "專責語音識別與自然語言處理模型開發，具有深度學習背景",
      avatar: "https://obs.line-scdn.net/0hugSynaoYKkhuAAJ4r61VH1dWJjldZD9OAHg1fEsIcH0ROXEbVGMwMk5XdX9fY2geVno3Lk8AIHoTZ2kfUWY",
      icon: <Brain className="h-5 w-5" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "王小美",
      role: "UI/UX 設計師",
      description: "負責使用者介面設計與使用者體驗優化，打造直觀易用的操作介面",
      avatar: "https://obs.line-scdn.net/0hvu1f8srOKVoMHwFqzbRWDTVJJSs_ezxcYmdmPS8ecGIje3IFMy5mICwbf2w9Jm0IM2VjaS9Kf21xLW9eNCk",
      icon: <Palette className="h-5 w-5" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "陳小強",
      role: "後端工程師",
      description: "負責系統架構設計與資料庫管理，確保系統穩定性與擴展性",
      avatar: "https://obs.line-scdn.net/0hHkdtDJgEF0RZDT90mKdoE2BbGzVqaQJCN3UNJS9fHnQmaExBYmwLPnkOGSBoNVMWY3dacS8OT3J8OVBHNms",
      icon: <Database className="h-5 w-5" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">開發團隊</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            認識我們的團隊
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            由經驗豐富的開發者和設計師組成，致力於打造最優質的 AI 直播訓練體驗
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${member.gradient} p-1`}>
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {member.icon}
                </div>
              </div>
              
              {/* Info */}
              <h3 className="text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className={`text-sm font-medium mb-3 text-transparent bg-clip-text bg-gradient-to-r ${member.gradient}`}>
                {member.role}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {member.description}
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <button className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "3+", label: "年開發經驗" },
            { number: "10+", label: "專案完成" },
            { number: "100%", label: "代碼覆蓋率" },
            { number: "24/7", label: "技術支援" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/30 rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 150}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
