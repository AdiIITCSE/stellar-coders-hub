import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Star, Check, Circle, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Problems = () => {
  const [activeTab, setActiveTab] = useState("dsa");

  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      platform: "LeetCode",
      points: 1200,
      tags: ["Array", "Hash Table"],
      solved: true
    },
    {
      id: 2,
      title: "Binary Tree Inorder Traversal",
      difficulty: "Medium",
      platform: "LeetCode",
      points: 1400,
      tags: ["Tree", "DFS"],
      solved: false
    },
    {
      id: 3,
      title: "Maximum Subarray",
      difficulty: "Medium",
      platform: "LeetCode",
      points: 1300,
      tags: ["Dynamic Programming", "Array"],
      solved: true
    }
  ];

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
          <Link to="/learn" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Learn
          </Link>
          <Link to="/problems" className="text-royal-purple hover:text-white transition-colors cursor-pointer">
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
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Practice{" "}
            <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
              Problems
            </span>
          </h1>
          <p className="text-xl text-silver-gray/90 max-w-4xl mx-auto leading-relaxed">
            Solve problems by topic (DSA) or rating (CP). Track your progress across multiple 
            platforms and improve systematically.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-full p-2">
            <div className="flex">
              <Button
                variant={activeTab === "dsa" ? "default" : "ghost"}
                className={`rounded-full px-6 py-3 transition-all ${
                  activeTab === "dsa" 
                    ? "bg-royal-purple text-white" 
                    : "text-silver-gray hover:text-white"
                }`}
                onClick={() => setActiveTab("dsa")}
              >
                <Circle className="w-4 h-4 mr-2" />
                DSA Problems
              </Button>
              <Button
                variant="ghost"
                className="text-silver-gray hover:text-white rounded-full px-6 py-3"
                onClick={() => setActiveTab("cp")}
              >
                CP Ladders
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-silver-gray" />
              <span className="text-white font-medium">Filters:</span>
            </div>
            
            <Select>
              <SelectTrigger className="w-40 bg-transparent border-silver-gray/20 text-white">
                <SelectValue placeholder="All Difficulties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40 bg-transparent border-silver-gray/20 text-white">
                <SelectValue placeholder="All Platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="leetcode">LeetCode</SelectItem>
                <SelectItem value="codeforces">Codeforces</SelectItem>
                <SelectItem value="atcoder">AtCoder</SelectItem>
                <SelectItem value="cses">CSES</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40 bg-transparent border-silver-gray/20 text-white">
                <SelectValue placeholder="All Topics" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="array">Array</SelectItem>
                <SelectItem value="tree">Tree</SelectItem>
                <SelectItem value="graph">Graph</SelectItem>
                <SelectItem value="dp">Dynamic Programming</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {problem.solved ? (
                      <Check className="w-6 h-6 text-green-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-silver-gray/60" />
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant="secondary"
                        className={`
                          ${problem.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : ''}
                          ${problem.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                          ${problem.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' : ''}
                        `}
                      >
                        {problem.difficulty}
                      </Badge>
                      <span className="text-silver-gray text-sm">{problem.platform}</span>
                      <div className="flex gap-2">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-royal-purple border-royal-purple/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-royal-purple" />
                    <span className="text-white font-semibold">{problem.points}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problems;