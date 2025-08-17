import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Calendar, Clock, Users } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import SiteHeader from "@/components/layout/SiteHeader";

const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "/placeholder.svg",
      rating: 4.9,
      expertise: ["Dynamic Programming", "Graph Theory", "Contest Strategy"],
      experience: "5+ years",
      students: 120,
      nextSlot: "Today 3:00 PM",
      pricePerHour: 45
    },
    {
      id: 2,
      name: "Sarah Kumar",
      avatar: "/placeholder.svg",
      rating: 4.8,
      expertise: ["Data Structures", "Algorithms", "Interview Prep"],
      experience: "3+ years",
      students: 89,
      nextSlot: "Tomorrow 10:00 AM",
      pricePerHour: 35
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      avatar: "/placeholder.svg",
      rating: 4.9,
      expertise: ["Competitive Programming", "Mathematics", "Number Theory"],
      experience: "7+ years",
      students: 156,
      nextSlot: "Dec 20 2:00 PM",
      pricePerHour: 60
    }
  ];

  return (
    <PageShell>
      <SiteHeader />
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert{" "}
            <span className="bg-gradient-to-r from-royal-purple to-purple-400 bg-clip-text text-transparent">
              Mentors
            </span>
          </h1>
          <p className="text-xl text-silver-gray/90 max-w-4xl mx-auto leading-relaxed">
            Get personalized guidance from experienced competitive programmers. 
            Book 1:1 sessions or join small group mentorship programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-silver-gray/80">Expert Mentors</div>
          </div>
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 text-center">
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-silver-gray/80">Sessions Completed</div>
          </div>
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 text-center">
            <div className="text-3xl font-bold text-white mb-2">4.8</div>
            <div className="text-silver-gray/80">Average Rating</div>
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-8 hover:bg-cloud-gray/50 transition-all duration-300"
            >
              {/* Mentor Header */}
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback className="bg-royal-purple text-white font-bold">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{mentor.rating}</span>
                    <span className="text-silver-gray/80">({mentor.students} students)</span>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="text-royal-purple border-royal-purple/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Mentor Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-royal-purple" />
                  <span className="text-silver-gray/80">{mentor.experience} experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-royal-purple" />
                  <span className="text-silver-gray/80">{mentor.students} students mentored</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-royal-purple" />
                  <span className="text-silver-gray/80">Next slot: {mentor.nextSlot}</span>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="border-t border-silver-gray/10 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-white">${mentor.pricePerHour}</span>
                    <span className="text-silver-gray/80">/hour</span>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400">Available</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="border-royal-purple/50 text-royal-purple hover:bg-royal-purple/10"
                  >
                    View Profile
                  </Button>
                  <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white">
                    Book Session
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-cloud-gray/40 backdrop-blur-sm border border-silver-gray/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to become a mentor?
            </h2>
            <p className="text-xl text-silver-gray/90 mb-8 max-w-2xl mx-auto">
              Share your expertise with the next generation of competitive programmers. 
              Join our mentor program and help others achieve their goals.
            </p>
            <Button className="bg-royal-purple hover:bg-royal-purple/90 text-white px-8 py-3 text-lg">
              Apply to Mentor
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default Mentors;