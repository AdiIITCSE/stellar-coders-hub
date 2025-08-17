import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ExternalLink, Search } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";

const dsaProblems = [
  { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays", platform: "LeetCode", solved: true, points: 50 },
  { id: 2, title: "House Robber", difficulty: "Medium", topic: "Dynamic Programming", platform: "LeetCode", solved: false, points: 100 },
];

const cpProblems = [
  { id: 1, title: "Watermelon", rating: 800, platform: "Codeforces", solved: true, points: 100 },
  { id: 2, title: "Lights Out", rating: 1000, platform: "Codeforces", solved: false, points: 150 },
];

const Problems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <PageShell>
      <SiteHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Practice Problems</h1>
          <p className="text-xl text-silver-gray/90">Sharpen your skills with DSA problems and CP ladders</p>
        </div>

        <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-silver-gray w-4 h-4" />
            <Input
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-midnight-blue border-silver-gray/30 text-white"
            />
          </div>
        </div>

        <Tabs defaultValue="dsa" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-cloud-gray/40">
            <TabsTrigger value="dsa" className="text-white data-[state=active]:bg-royal-purple">DSA Problems</TabsTrigger>
            <TabsTrigger value="cp" className="text-white data-[state=active]:bg-royal-purple">CP Ladders</TabsTrigger>
          </TabsList>

          <TabsContent value="dsa">
            <div className="grid gap-4">
              {dsaProblems.map((problem) => (
                <div key={problem.id} className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">{problem.title}</h3>
                      <div className="flex gap-2">
                        <Badge className="bg-green-500/20 text-green-400">{problem.difficulty}</Badge>
                        <Badge className="bg-royal-purple/20 text-royal-purple">{problem.topic}</Badge>
                      </div>
                    </div>
                    <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />Solve
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cp">
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Rating 800</h3>
              <div className="grid gap-3">
                {cpProblems.filter(p => p.rating === 800).map((problem) => (
                  <div key={problem.id} className="bg-midnight-blue/50 border border-silver-gray/10 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white">{problem.title}</span>
                      <Button size="sm" className="bg-royal-purple hover:bg-royal-purple/90 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />Solve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageShell>
  );
};

export default Problems;