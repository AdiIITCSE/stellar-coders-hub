import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6">
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
        <Link to="/profile">
          <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white rounded-lg px-6">Profile</Button>
        </Link>
      </div>
    </nav>
  );
};

export default SiteHeader;