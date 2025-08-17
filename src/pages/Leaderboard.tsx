import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";

const Leaderboard = () => {
  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 15420, streak: 47, badge: "Grandmaster", avatar: "/placeholder.svg" },
    { rank: 2, name: "Sarah Kumar", points: 14890, streak: 35, badge: "Master", avatar: "/placeholder.svg" },
    { rank: 3, name: "Mike Rodriguez", points: 13650, streak: 28, badge: "Expert", avatar: "/placeholder.svg" },
    { rank: 4, name: "Emma Watson", points: 12340, streak: 22, badge: "Expert", avatar: "/placeholder.svg" },
    { rank: 5, name: "David Kim", points: 11890, streak: 19, badge: "Candidate Master", avatar: "/placeholder.svg" },
  ];

  return (
    <PageShell>
      <SiteHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Global <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">Leaderboard</span>
          </h1>
          <p className="text-xl text-silver-gray/90 max-w-4xl mx-auto">
            Compete with the best minds in competitive programming. Climb the ranks and showcase your skills.
          </p>
        </div>

        <div className="space-y-4">
          {leaderboard.map((user, index) => (
            <div key={user.rank} className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6 hover:bg-cloud-gray/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    {index < 3 ? (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-600'
                      }`}>
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-cloud-gray rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">#{user.rank}</span>
                      </div>
                    )}
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-royal-purple text-white">{user.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{user.name}</h3>
                    <Badge className="bg-royal-purple/20 text-royal-purple">{user.badge}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{user.points.toLocaleString()} XP</div>
                  <div className="text-silver-gray">🔥 {user.streak} day streak</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
};

export default Leaderboard;