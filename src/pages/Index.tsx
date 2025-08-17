import { Button } from "@/components/ui/button";
import { Users, Target, BookOpen, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-blue relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-purple/10 via-transparent to-royal-purple/5" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-royal-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-royal-purple/15 rounded-full blur-2xl" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-royal-purple rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">
            NebulaCP
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <span className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Learn
          </span>
          <span className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Problems
          </span>
          <span className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Mentors
          </span>
          <span className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Community
          </span>
          <span className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Leaderboard
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-silver-gray hover:text-white hover:bg-transparent"
          >
            Sign In
          </Button>
          <Button
            className="bg-royal-purple hover:bg-royal-purple/90 text-white rounded-lg px-6"
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-24">
        <div className="max-w-4xl">
          {/* Hero text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Practice sharper.
            <br />
            <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
              Climb faster.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-gray/90 mb-12 max-w-3xl leading-relaxed">
            Learn algorithms the right way, grind topic-wise DSA, and crush rating 
            ladders — with mentors and a global community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              className="bg-royal-purple hover:bg-royal-purple/90 text-white px-8 py-4 text-lg rounded-full font-medium"
            >
              Start Learning
            </Button>
            <Button
              variant="outline"
              className="border-silver-gray/30 text-white hover:bg-white/5 px-8 py-4 text-lg rounded-full font-medium"
            >
              Browse Rating Ladders
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 text-silver-gray/80">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span className="text-lg">10k+ Active Learners</span>
            </div>
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5" />
              <span className="text-lg">5k+ Problems Solved Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature sections at bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Learn section */}
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-royal-purple" />
              <h3 className="text-white text-xl font-bold">Learn</h3>
            </div>
            <p className="text-silver-gray/80 leading-relaxed">
              Master algorithms from foundations to advanced topics. Structured learning 
              paths with curated resources and progress tracking.
            </p>
          </div>

          {/* Rating section */}
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-royal-purple" />
              <h3 className="text-white text-xl font-bold">2400+ Rating</h3>
            </div>
            <p className="text-silver-gray/80 leading-relaxed">
              Challenge yourself with competitive programming problems. Climb rating 
              ladders and compete with the global community.
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-royal-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-royal-purple/30">
        <div className="w-8 h-8 bg-royal-purple rounded-lg flex items-center justify-center">
          <Code className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Index;