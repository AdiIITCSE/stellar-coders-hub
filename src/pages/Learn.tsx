import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ExternalLink, Play } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";

const topicsData = [
  {
    id: "foundations",
    title: "Foundations",
    difficulty: "Beginner",
    description: "Master the fundamentals of algorithmic thinking and complexity analysis",
    lessons: 12,
    hours: "4-6",
    progress: 85,
    status: "started",
    content: {
      overview: "Learn time complexity, space complexity, and basic problem-solving techniques essential for competitive programming.",
      keyTopics: ["Big O Notation", "Time Complexity Analysis", "Space Complexity", "Basic Problem Solving"],
      resources: [
        { title: "USACO Guide - Basic Complete Search", url: "https://usaco.guide/bronze/complete-search" },
        { title: "CP-Algorithms - Complexity", url: "https://cp-algorithms.com/others/complexity.html" }
      ]
    }
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    difficulty: "Beginner",
    description: "Master fundamental data structures and string manipulation techniques",
    lessons: 18,
    hours: "6-8",
    progress: 60,
    status: "started",
    content: {
      overview: "Deep dive into arrays, strings, and their common patterns used in competitive programming.",
      keyTopics: ["Two Pointers", "Sliding Window", "Prefix Sums", "String Algorithms"],
      resources: [
        { title: "USACO Guide - Introduction to Data Structures", url: "https://usaco.guide/bronze/intro-ds" },
        { title: "LeetCode - Array Problems", url: "https://leetcode.com/tag/array/" }
      ]
    }
  },
  {
    id: "trees",
    title: "Trees & Recursion",
    difficulty: "Intermediate",
    description: "Explore tree structures and recursive problem-solving techniques",
    lessons: 15,
    hours: "8-10",
    progress: 0,
    status: "locked",
    content: {
      overview: "Learn binary trees, tree traversals, and recursive thinking patterns.",
      keyTopics: ["Binary Trees", "Tree Traversals", "Recursion", "Binary Search Trees"],
      resources: [
        { title: "USACO Guide - Introduction to Trees", url: "https://usaco.guide/silver/intro-tree" },
        { title: "CP-Algorithms - Trees", url: "https://cp-algorithms.com/graph/tree-algorithms.html" }
      ]
    }
  },
  {
    id: "graphs",
    title: "Graph Algorithms",
    difficulty: "Intermediate",
    description: "Master graph theory and essential graph algorithms",
    lessons: 20,
    hours: "12-15",
    progress: 0,
    status: "locked",
    content: {
      overview: "Learn BFS, DFS, shortest paths, MST, and advanced graph algorithms.",
      keyTopics: ["Graph Representation", "BFS/DFS", "Dijkstra's Algorithm", "Union Find"],
      resources: [
        { title: "USACO Guide - Graph Traversal", url: "https://usaco.guide/silver/graph-traversal" },
        { title: "CP-Algorithms - Graphs", url: "https://cp-algorithms.com/graph/" }
      ]
    }
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    difficulty: "Advanced",
    description: "Master optimization problems and DP patterns",
    lessons: 25,
    hours: "16-20",
    progress: 0,
    status: "locked",
    content: {
      overview: "Learn memoization, tabulation, optimization problems, and DP patterns.",
      keyTopics: ["1D DP", "2D DP", "DP on Trees", "Optimization Techniques"],
      resources: [
        { title: "USACO Guide - Introduction to DP", url: "https://usaco.guide/gold/intro-dp" },
        { title: "CP-Algorithms - Dynamic Programming", url: "https://cp-algorithms.com/dynamic_programming/" }
      ]
    }
  },
  {
    id: "number-theory",
    title: "Number Theory & Math",
    difficulty: "Advanced",
    description: "Explore mathematical concepts used in competitive programming",
    lessons: 18,
    hours: "10-12",
    progress: 0,
    status: "locked",
    content: {
      overview: "Learn modular arithmetic, prime numbers, and mathematical algorithms.",
      keyTopics: ["Modular Arithmetic", "Prime Numbers", "GCD/LCM", "Combinatorics"],
      resources: [
        { title: "USACO Guide - Modular Arithmetic", url: "https://usaco.guide/gold/modular" },
        { title: "CP-Algorithms - Algebra", url: "https://cp-algorithms.com/algebra/" }
      ]
    }
  }
];

const Learn = () => {
  return (
    <PageShell>
      <SiteHeader />
      
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

        {/* Learning Topics Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {topicsData.map((topic) => (
            <AccordionItem 
              key={topic.id} 
              value={topic.id} 
              className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline [&[data-state=open]>div]:bg-cloud-gray/60">
                <div className="flex items-center gap-6 w-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    topic.status === 'started' ? 'bg-royal-purple' : 'bg-silver-gray/20'
                  }`}>
                    <BookOpen className={`w-6 h-6 ${
                      topic.status === 'started' ? 'text-white' : 'text-silver-gray'
                    }`} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        topic.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        topic.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {topic.difficulty}
                      </span>
                      {topic.status === 'locked' && (
                        <span className="text-silver-gray/60">🔒</span>
                      )}
                    </div>
                    <p className="text-silver-gray/80 text-sm mb-3">{topic.description}</p>
                    
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-royal-purple" />
                        <span className="text-silver-gray/80">{topic.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-royal-purple" />
                        <span className="text-silver-gray/80">{topic.hours} hours</span>
                      </div>
                      {topic.status !== 'locked' && (
                        <div className="flex items-center gap-2">
                          <span className="text-royal-purple font-semibold">{topic.progress}% complete</span>
                        </div>
                      )}
                    </div>
                    
                    {topic.status !== 'locked' && (
                      <Progress value={topic.progress} className="h-2 mt-3" />
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-8 pb-6">
                <div className="pt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                    <p className="text-silver-gray/80 leading-relaxed">{topic.content.overview}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.content.keyTopics.map((keyTopic) => (
                        <span key={keyTopic} className="bg-royal-purple/10 text-royal-purple px-3 py-1 rounded-full text-sm">
                          {keyTopic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
                    <div className="space-y-3">
                      {topic.content.resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between bg-midnight-blue/50 rounded-lg p-4">
                          <div className="flex items-center gap-3">
                            <ExternalLink className="w-4 h-4 text-royal-purple" />
                            <span className="text-white">{resource.title}</span>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-royal-purple/50 text-royal-purple hover:bg-royal-purple/10"
                            onClick={() => window.open(resource.url, '_blank')}
                          >
                            Visit
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="bg-royal-purple hover:bg-royal-purple/90 text-white"
                      disabled={topic.status === 'locked'}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {topic.status === 'started' ? 'Continue Learning' : topic.status === 'locked' ? 'Locked' : 'Start Learning'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-royal-purple/50 text-royal-purple hover:bg-royal-purple/10"
                      disabled={topic.status === 'locked'}
                    >
                      Practice Problems
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageShell>
  );
};

export default Learn;