import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Check, ChevronRight, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-midnight-blue">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-silver-gray/10">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-royal-purple rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">NebulaCP</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/learn" className="text-royal-purple hover:text-white transition-colors cursor-pointer">
            Learn
          </Link>
          <Link to="/problems" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Problems
          </Link>
          <Link to="/mentors" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Mentors
          </Link>
          <Link to="/community" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Community
          </Link>
          <Link to="/leaderboard" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Leaderboard
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-silver-gray hover:text-white hover:bg-transparent">
            Sign In
          </Button>
          <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white rounded-lg px-6">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
              Algorithms
            </span>
          </h1>
          <p className="text-xl text-silver-gray/90 max-w-4xl mx-auto leading-relaxed">
            Follow our curated learning path from foundations to advanced topics. Each module 
            includes theory, examples, and practice problems.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Your Progress</h2>
            <span className="text-xl font-semibold text-royal-purple">34% Complete</span>
          </div>
          
          <Progress value={34} className="h-3 mb-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">22</div>
              <div className="text-silver-gray/80">lessons completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">42</div>
              <div className="text-silver-gray/80">hours studied</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">128</div>
              <div className="text-silver-gray/80">problems solved</div>
            </div>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Foundations Module */}
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Foundations</h3>
                  <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm font-medium">
                    Beginner
                  </span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-silver-gray" />
            </div>

            <p className="text-silver-gray/80 mb-6 leading-relaxed">
              Time complexity, space complexity, and basic problem-solving techniques
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-royal-purple font-semibold">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-royal-purple" />
                <span className="text-silver-gray/80">12 lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-royal-purple" />
                <span className="text-silver-gray/80">4 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Started</span>
              </div>
            </div>
          </div>

          {/* Data Structures Module */}
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-royal-purple rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Data Structures</h3>
                  <span className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-sm font-medium">
                    Beginner
                  </span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-silver-gray" />
            </div>

            <p className="text-silver-gray/80 mb-6 leading-relaxed">
              Arrays, stacks, queues, linked lists, trees, and hash tables
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-royal-purple font-semibold">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-royal-purple" />
                <span className="text-silver-gray/80">18 lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-royal-purple" />
                <span className="text-silver-gray/80">8 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Started</span>
              </div>
            </div>
          </div>

          {/* Additional modules can be added here */}
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-silver-gray/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-silver-gray" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Graph Algorithms</h3>
                  <span className="inline-block bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-sm font-medium">
                    Intermediate
                  </span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-silver-gray" />
            </div>

            <p className="text-silver-gray/80 mb-6 leading-relaxed">
              BFS, DFS, shortest paths, MST, and advanced graph algorithms
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-silver-gray/60 font-semibold">Locked</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-silver-gray/60" />
                <span className="text-silver-gray/60">15 lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-silver-gray/60" />
                <span className="text-silver-gray/60">12 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-silver-gray/60">🔒</span>
                <span className="text-silver-gray/60">Locked</span>
              </div>
            </div>
          </div>

          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-silver-gray/20 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-silver-gray" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dynamic Programming</h3>
                  <span className="inline-block bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-sm font-medium">
                    Advanced
                  </span>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-silver-gray" />
            </div>

            <p className="text-silver-gray/80 mb-6 leading-relaxed">
              Memoization, tabulation, optimization problems, and DP patterns
            </p>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">Progress</span>
                <span className="text-silver-gray/60 font-semibold">Locked</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-silver-gray/60" />
                <span className="text-silver-gray/60">20 lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-silver-gray/60" />
                <span className="text-silver-gray/60">16 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 text-silver-gray/60">🔒</span>
                <span className="text-silver-gray/60">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;