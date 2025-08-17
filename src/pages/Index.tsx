import { Button } from "@/components/ui/button";
import { Users, Target, BookOpen, Trophy, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";


const Index = () => {
  return (
    <PageShell>
      <SiteHeader />

      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 animated-bg"></div>

      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero text */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Practice{" "}
              <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
                sharper
              </span>
              <br />
              Climb faster
            </h1>

            <p className="text-xl md:text-2xl text-silver-gray/90 mb-12 max-w-3xl leading-relaxed">
              Learn algorithms the right way, grind topic-wise DSA, and crush rating 
              ladders — with mentors and a global community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link to="/learn">
                <Button
                  className="bg-royal-purple hover:bg-royal-purple/90 text-white px-8 py-4 text-lg rounded-full font-medium"
                >
                  Start Learning
                </Button>
              </Link>
              <Link to="/problems">
                <Button
                  variant="outline"
                  className="border-silver-gray/30 text-white hover:bg-white/5 px-8 py-4 text-lg rounded-full font-medium"
                >
                  Browse Rating Ladders
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-silver-gray/80">Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-silver-gray/80">Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-silver-gray/80">Students</div>
              </div>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            <Link to="/learn">
              <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Learn</h3>
                <p className="text-silver-gray/80 text-sm">
                  Master algorithms with curated content
                </p>
              </div>
            </Link>

            <Link to="/problems">
              <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Practice</h3>
                <p className="text-silver-gray/80 text-sm">
                  Solve problems by topic or rating
                </p>
              </div>
            </Link>

            <Link to="/mentors">
              <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Mentors</h3>
                <p className="text-silver-gray/80 text-sm">
                  Get guidance from experts
                </p>
              </div>
            </Link>

            <Link to="/leaderboard">
              <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Compete</h3>
                <p className="text-silver-gray/80 text-sm">
                  Join the global leaderboard
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating microphone icon */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-royal-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-royal-purple/30">
        <div className="w-8 h-8 bg-royal-purple rounded-lg flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-white" />
        </div>
      </div>
    </PageShell>
  );
};

export default Index;
