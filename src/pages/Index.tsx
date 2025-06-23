import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
const Index = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Success!",
      description: "You've been added to the waitlist."
    });
    setEmail("");
    setIsLoading(false);
  };
  return <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40">
          <source src="https://livewallpapers4free.com/wp-content/uploads/2024/06/nncusyehhfddyhgr.mp4" type="video/mp4" />
        </video>
        {/* Grainy overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-8xl text-white tracking-tight md:text-6xl font-bold text-center">
            Think Sanctuary.
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed md:text-base">
            A sanctuary to your ideas, shower thoughts, notes, random scribbles, anything!
          </p>

          {/* Waitlist Form */}
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required className="flex-1 bg-white/10 text-white placeholder:text-gray-400 border-0 rounded-sm" />
              <Button type="submit" disabled={isLoading} className="bg-white text-black hover:bg-gray-200 px-6 py-2 font-medium">
                {isLoading ? "Joining..." : "Join waitlist"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            {/* Waitlist Counter */}
            <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">1,247 people already joined</span>
            </div>
          </div>
        </div>
      </div>

      {/* Beta Notice */}
      <div className="absolute bottom-20 left-0 right-0 z-20 text-center">
        <p className="text-gray-400 text-sm">
          Currently in beta • Open source on GitHub
        </p>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-0 left-0 right-0 z-20 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors relative group">
                Home
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-100 group-hover:scale-x-110 transition-transform origin-left"></span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors relative group">
                Features
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors relative group">
                Contact
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span>Credits</span>
          </div>
        </div>
      </nav>
    </div>;
};
export default Index;