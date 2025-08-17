import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code, Trophy, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="min-h-screen bg-midnight-blue">
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-silver-gray/10">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-royal-purple rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl">NebulaCP</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/learn" className="text-silver-gray hover:text-white transition-colors">Learn</Link>
          <Link to="/problems" className="text-silver-gray hover:text-white transition-colors">Problems</Link>
          <Link to="/mentors" className="text-silver-gray hover:text-white transition-colors">Mentors</Link>
          <Link to="/community" className="text-silver-gray hover:text-white transition-colors">Community</Link>
          <Link to="/leaderboard" className="text-silver-gray hover:text-white transition-colors">Leaderboard</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-silver-gray hover:text-white hover:bg-transparent">Sign In</Button>
          <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white rounded-lg px-6">Get Started</Button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="bg-royal-purple text-white text-2xl font-bold">JD</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-white mb-2">John Doe</h2>
                <Badge className="bg-royal-purple/20 text-royal-purple">Expert</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-silver-gray">Global Rank</span>
                  <span className="text-white font-semibold">#247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-gray">Problems Solved</span>
                  <span className="text-white font-semibold">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-silver-gray">Current Streak</span>
                  <span className="text-white font-semibold">🔥 15 days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Learning Progress</h3>
              <Progress value={68} className="h-3 mb-4" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">68%</div>
                  <div className="text-silver-gray text-sm">Complete</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">45</div>
                  <div className="text-silver-gray text-sm">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">28</div>
                  <div className="text-silver-gray text-sm">Modules</div>
                </div>
              </div>
            </div>

            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Solved "Maximum Subarray" - Medium</span>
                  <span className="text-silver-gray text-sm ml-auto">2 hours ago</span>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="w-5 h-5 text-green-400" />
                  <span className="text-white">Completed Data Structures module</span>
                  <span className="text-silver-gray text-sm ml-auto">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;