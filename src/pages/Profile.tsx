import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Trophy, Target, Clock, Edit, RotateCcw, ExternalLink } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";
import RatingChart from "@/components/profile/RatingChart";
import TopicsDonut from "@/components/profile/TopicsDonut";
import { useLocalStore } from "@/hooks/useLocalStore";

const Profile = () => {
  const [profileData, setProfileData] = useLocalStore("profile-data", {
    name: "John Doe",
    bio: "Passionate competitive programmer and problem solver. Love tackling complex algorithms!",
    connectedAccounts: {
      codeforces: "",
      leetcode: "",
      atcoder: "",
      cses: ""
    }
  });
  
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState(profileData.bio);
  const [tempAccounts, setTempAccounts] = useState(profileData.connectedAccounts);

  const handleSaveBio = () => {
    setProfileData({ ...profileData, bio: tempBio });
    setIsEditingBio(false);
  };

  const handleSaveAccounts = () => {
    setProfileData({ ...profileData, connectedAccounts: tempAccounts });
  };

  return (
    <PageShell>
      <SiteHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarFallback className="bg-royal-purple text-white text-2xl font-bold">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-white mb-2">{profileData.name}</h2>
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

            {/* Bio Section */}
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Bio</h3>
                <Dialog open={isEditingBio} onOpenChange={setIsEditingBio}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-silver-gray hover:text-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-cloud-gray border-silver-gray/20">
                    <DialogHeader>
                      <DialogTitle className="text-white">Edit Bio</DialogTitle>
                    </DialogHeader>
                    <Textarea
                      value={tempBio}
                      onChange={(e) => setTempBio(e.target.value)}
                      className="bg-midnight-blue border-silver-gray/30 text-white min-h-[100px]"
                      placeholder="Tell others about yourself..."
                    />
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" onClick={() => setIsEditingBio(false)}>Cancel</Button>
                      <Button onClick={handleSaveBio} className="bg-royal-purple hover:bg-royal-purple/90">Save</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <p className="text-silver-gray/80 leading-relaxed">{profileData.bio}</p>
            </div>

            {/* Connected Accounts */}
            <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Connected Accounts</h3>
                <Button variant="ghost" size="sm" className="text-silver-gray hover:text-white">
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {Object.entries(tempAccounts).map(([platform, handle]) => (
                  <div key={platform} className="space-y-2">
                    <Label htmlFor={platform} className="text-white capitalize">{platform}</Label>
                    <div className="flex gap-2">
                      <Input
                        id={platform}
                        value={handle}
                        onChange={(e) => setTempAccounts({...tempAccounts, [platform]: e.target.value})}
                        placeholder={`${platform} handle`}
                        className="bg-midnight-blue border-silver-gray/30 text-white"
                      />
                      {handle && (
                        <Button variant="outline" size="sm" className="border-royal-purple/50 text-royal-purple">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                <Button 
                  onClick={handleSaveAccounts} 
                  className="w-full bg-royal-purple hover:bg-royal-purple/90 text-white mt-4"
                >
                  Save Accounts
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Learning Progress */}
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

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RatingChart />
              <TopicsDonut />
            </div>

            {/* Recent Activity */}
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
                <div className="flex items-center gap-4">
                  <Trophy className="w-5 h-5 text-green-400" />
                  <span className="text-white">Achieved 15-day solving streak</span>
                  <span className="text-silver-gray text-sm ml-auto">2 days ago</span>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Reached Expert level on Codeforces</span>
                  <span className="text-silver-gray text-sm ml-auto">1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default Profile;