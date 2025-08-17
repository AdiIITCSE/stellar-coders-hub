import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Heart, Share, Eye, Clock, Code, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Community = () => {
  const posts = [
    {
      id: 1,
      title: "Best approach for solving DP problems?",
      author: "Alex Chen",
      avatar: "/placeholder.svg",
      category: "Discussion",
      tags: ["Dynamic Programming", "Tips"],
      views: 234,
      replies: 18,
      likes: 45,
      timeAgo: "2 hours ago",
      isPinned: false
    },
    {
      id: 2,
      title: "Complete guide to Segment Trees with examples",
      author: "Sarah Kumar",
      avatar: "/placeholder.svg",
      category: "Tutorial",
      tags: ["Data Structures", "Advanced"],
      views: 567,
      replies: 32,
      likes: 89,
      timeAgo: "1 day ago",
      isPinned: true
    },
    {
      id: 3,
      title: "How to optimize my Dijkstra implementation?",
      author: "Mike Rodriguez",
      avatar: "/placeholder.svg",
      category: "Question",
      tags: ["Graph Theory", "Optimization"],
      views: 156,
      replies: 12,
      likes: 23,
      timeAgo: "3 hours ago",
      isPinned: false
    }
  ];

  const categories = ["All", "Discussion", "Tutorial", "Question", "Announcement"];

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
          <Link to="/problems" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Problems
          </Link>
          <Link to="/mentors" className="text-silver-gray hover:text-white transition-colors cursor-pointer">
            Mentors
          </Link>
          <Link to="/community" className="text-royal-purple hover:text-white transition-colors cursor-pointer">
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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Community{" "}
              <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
                Hub
              </span>
            </h1>
            <p className="text-xl text-silver-gray/90 max-w-3xl leading-relaxed">
              Connect with fellow competitive programmers, share solutions, and learn from 
              experienced mentors in our vibrant community.
            </p>
          </div>
          <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">2.5K</div>
            <div className="text-silver-gray/80">Members</div>
          </div>
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">450</div>
            <div className="text-silver-gray/80">Discussions</div>
          </div>
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">1.2K</div>
            <div className="text-silver-gray/80">Solutions</div>
          </div>
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">89</div>
            <div className="text-silver-gray/80">Mentors</div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-white font-medium">Categories:</span>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "ghost"}
                  className={`rounded-full px-4 py-2 text-sm ${
                    category === "All"
                      ? "bg-royal-purple text-white"
                      : "text-silver-gray hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all duration-300 ${
                post.isPinned ? "border-royal-purple/30" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback className="bg-royal-purple text-white font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {post.isPinned && (
                          <Badge className="bg-royal-purple/20 text-royal-purple">
                            Pinned
                          </Badge>
                        )}
                        <Badge 
                          variant="outline" 
                          className={`
                            ${post.category === 'Tutorial' ? 'text-green-400 border-green-400/50' : ''}
                            ${post.category === 'Discussion' ? 'text-blue-400 border-blue-400/50' : ''}
                            ${post.category === 'Question' ? 'text-yellow-400 border-yellow-400/50' : ''}
                            ${post.category === 'Announcement' ? 'text-red-400 border-red-400/50' : ''}
                          `}
                        >
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-royal-purple cursor-pointer">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-silver-gray/80">
                        <span>by {post.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-royal-purple/10 text-royal-purple"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Post Stats */}
                  <div className="flex items-center gap-6 text-sm text-silver-gray/80">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.replies}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <Button variant="ghost" className="text-silver-gray/80 hover:text-white p-0 h-auto">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-royal-purple/50 text-royal-purple hover:bg-royal-purple/10">
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Community;