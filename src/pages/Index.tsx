import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-blue relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/10 via-transparent to-royal-purple/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-purple/15 rounded-full blur-2xl" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-white font-bold text-xl tracking-wider">
          COMPETITIVE<br />PROGRAMMING
        </div>
        
        <div className="flex items-center space-x-8">
          <span className="text-silver-gray hover:text-white transition-colors tracking-wider cursor-pointer">
            ETEI
          </span>
          <span className="text-silver-gray hover:text-white transition-colors tracking-wider cursor-pointer">
            BUSINESS
          </span>
          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-full px-6 py-2 tracking-wider"
          >
            WATCH
          </Button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8">
        {/* Hero text */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            ENHANCE YOUR<br />
            ALGORITHMIC
            <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
              SKILLS
            </span>
          </h1>
          
          {/* CTA Button */}
          <Button
            className="bg-gradient-to-r from-royal-purple to-purple-600 hover:from-purple-600 hover:to-royal-purple text-white border-0 rounded-full px-8 py-4 text-lg font-medium tracking-wider shadow-lg hover:shadow-royal-purple/25 transition-all duration-300 transform hover:scale-105"
          >
            GET STARTED NOW
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-16">
          {/* LEETCODE Card */}
          <div className="bg-cloud-gray/80 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/90 transition-all duration-300 hover:shadow-lg hover:shadow-royal-purple/10">
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider">
              LEETCODE
            </h3>
            <p className="text-silver-gray/80 text-sm leading-relaxed">
              SOLVE ALGORITHMIC PROBLEMS WITH OPTIMIZED SOLUTIONS. PRACTICE DATA STRUCTURES AND ALGORITHMS WITH REAL INTERVIEW QUESTIONS. BUILD YOUR CODING CONFIDENCE.
            </p>
          </div>

          {/* SOLVE FIRST Card */}
          <div className="bg-cloud-gray/80 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/90 transition-all duration-300 hover:shadow-lg hover:shadow-royal-purple/10">
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider">
              SOLVE FIRST
            </h3>
            <p className="text-silver-gray/80 text-sm leading-relaxed">
              START WITH THE FUNDAMENTALS AND PROGRESS TO ADVANCED TOPICS. STRUCTURED LEARNING PATH WITH GUIDED TUTORIALS AND STEP-BY-STEP EXPLANATIONS.
            </p>
          </div>

          {/* CONTEST Card */}
          <div className="bg-cloud-gray/80 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/90 transition-all duration-300 hover:shadow-lg hover:shadow-royal-purple/10">
            <h3 className="text-white text-xl font-bold mb-4 tracking-wider">
              CONTEST
            </h3>
            <p className="text-silver-gray/80 text-sm leading-relaxed">
              PARTICIPATE IN COMPETITIVE PROGRAMMING CONTESTS. CHALLENGE YOURSELF WITH TIME-LIMITED PROBLEMS AND CLIMB THE GLOBAL LEADERBOARD.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative curved elements */}
      <div className="absolute top-0 right-0 w-full h-32">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,0 C300,60 600,60 900,20 C1050,0 1150,10 1200,0 L1200,120 L0,120 Z"
            fill="url(#gradient1)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#6045EA', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#6045EA', stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path
            d="M0,120 C300,60 600,60 900,100 C1050,120 1150,110 1200,120 L1200,0 L0,0 Z"
            fill="url(#gradient2)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#6045EA', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#6045EA', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Index;