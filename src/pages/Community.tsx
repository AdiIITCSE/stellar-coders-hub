import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Heart, Share, Eye, Clock, ChevronDown, Send, ThumbsUp, ThumbsDown } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";
import NewPostDialog from "@/components/community/NewPostDialog";
import { useLocalStore } from "@/hooks/useLocalStore";

const Community = () => {
  const [sortBy, setSortBy] = useState("recent");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useLocalStore("community-posts", [
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
      dislikes: 2,
      timeAgo: "2 hours ago",
      isPinned: false,
      isLiked: false,
      isDisliked: false,
      comments: [
        { id: 1, author: "Sarah Kim", content: "I recommend starting with 1D DP problems first!", timeAgo: "1 hour ago" },
        { id: 2, author: "Mike Rodriguez", content: "Practice on LeetCode's DP section systematically.", timeAgo: "30 mins ago" }
      ]
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
      dislikes: 3,
      timeAgo: "1 day ago",
      isPinned: true,
      isLiked: false,
      isDisliked: false,
      comments: [
        { id: 1, author: "John Doe", content: "Excellent tutorial! Very clear explanations.", timeAgo: "20 hours ago" }
      ]
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
      dislikes: 1,
      timeAgo: "3 hours ago",
      isPinned: false,
      isLiked: false,
      isDisliked: false,
      comments: []
    }
  ]);
  
  const [newComment, setNewComment] = useState("");

  const handleAddPost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      upvotes: 0,
      replies: 0,
      views: 0,
      likes: 0,
      dislikes: 0,
      isLiked: false,
      isDisliked: false,
      comments: []
    };
    setPosts([post, ...posts]);
  };

  const handleVote = (postId, type) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        if (type === 'like') {
          if (post.isLiked) {
            return { ...post, likes: post.likes - 1, isLiked: false };
          } else {
            return { 
              ...post, 
              likes: post.likes + 1, 
              dislikes: post.isDisliked ? post.dislikes - 1 : post.dislikes,
              isLiked: true, 
              isDisliked: false 
            };
          }
        } else {
          if (post.isDisliked) {
            return { ...post, dislikes: post.dislikes - 1, isDisliked: false };
          } else {
            return { 
              ...post, 
              dislikes: post.dislikes + 1, 
              likes: post.isLiked ? post.likes - 1 : post.likes,
              isDisliked: true, 
              isLiked: false 
            };
          }
        }
      }
      return post;
    }));
  };

  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;
    
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const comment = {
          id: Date.now(),
          author: "You",
          content: newComment,
          timeAgo: "just now"
        };
        return { 
          ...post, 
          comments: [...post.comments, comment],
          replies: post.replies + 1
        };
      }
      return post;
    }));
    setNewComment("");
  };

  const filteredPosts = posts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === "recent") return 0; // Simple ordering for now
    if (sortBy === "top") return b.likes - a.likes;
    if (sortBy === "discussed") return b.replies - a.replies;
    return 0;
  });

  const categories = ["All", "Discussion", "Tutorial", "Question", "Announcement"];

  return (
    <PageShell>
      <SiteHeader />
      
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
          <NewPostDialog onAddPost={handleAddPost} />
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

        {/* Filters and Sorting */}
        <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-medium">Categories:</span>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "ghost"}
                    className={`rounded-full px-4 py-2 text-sm ${
                      category === selectedCategory
                        ? "bg-royal-purple text-white"
                        : "text-silver-gray hover:text-white"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-midnight-blue border-silver-gray/30 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-cloud-gray border-silver-gray/30">
                  <SelectItem value="recent" className="text-white">Most Recent</SelectItem>
                  <SelectItem value="top" className="text-white">Top Voted</SelectItem>
                  <SelectItem value="discussed" className="text-white">Most Discussed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
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

                  {/* Post Stats and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm text-silver-gray/80">
                      <button 
                        onClick={() => handleVote(post.id, 'like')}
                        className={`flex items-center gap-2 hover:text-white transition-colors ${
                          post.isLiked ? 'text-green-400' : ''
                        }`}
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </button>
                      <button 
                        onClick={() => handleVote(post.id, 'dislike')}
                        className={`flex items-center gap-2 hover:text-white transition-colors ${
                          post.isDisliked ? 'text-red-400' : ''
                        }`}
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span>{post.dislikes}</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.replies}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-silver-gray/80 hover:text-white p-0 h-auto">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Comments Section */}
                  {post.comments.length > 0 && (
                    <Collapsible className="mt-4">
                      <CollapsibleTrigger className="flex items-center gap-2 text-silver-gray hover:text-white transition-colors">
                        <ChevronDown className="w-4 h-4" />
                        <span>View {post.comments.length} comments</span>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-3">
                        {post.comments.map((comment) => (
                          <div key={comment.id} className="bg-midnight-blue/50 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-white font-medium">{comment.author}</span>
                              <span className="text-silver-gray/60 text-sm">• {comment.timeAgo}</span>
                            </div>
                            <p className="text-silver-gray/80">{comment.content}</p>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {/* Add Comment */}
                  <div className="mt-4 flex gap-3">
                    <Textarea
                      placeholder="Add a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="bg-midnight-blue border-silver-gray/30 text-white min-h-[80px]"
                    />
                    <Button 
                      onClick={() => handleAddComment(post.id)}
                      className="bg-royal-purple hover:bg-royal-purple/90 text-white self-end"
                      disabled={!newComment.trim()}
                    >
                      <Send className="w-4 h-4" />
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
    </PageShell>
  );
};

export default Community;