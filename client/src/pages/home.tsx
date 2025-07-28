import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { PenTool, Users, Layers, Zap, Mail, MapPin } from "lucide-react";
import classroomImage from "@assets/WhatsApp Image 2025-07-27 at 18.02.14_43bb6dfa_1753725852223.jpg";

export default function Home() {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Thank you for your interest! We will be in touch soon.');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/10 to-clay-beige/20"></div>
        
        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <path d="M50,50 L350,50 L350,200 L200,200 L200,350 L50,350 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
            <circle cx="350" cy="50" r="5" fill="currentColor"/>
            <circle cx="200" cy="200" r="5" fill="currentColor"/>
            <circle cx="50" cy="350" r="5" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 leading-tight">
            Grief <span className="text-soft-blue">Circuits</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where Emotion Meets Physics
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            A student-founded initiative helping male high schoolers navigate grief, burnout, and recovery through physics-based metaphors and community healing.
          </p>
          <Button size="lg" className="bg-soft-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join the Circuit
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">About the Project</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Grief Circuits is a student-founded initiative designed for male high schoolers to explore grief, burnout, and recovery through physics-based metaphors. We use resistance, current, and pressure systems to understand emotional flow—and rebuild with clay, reflection, and community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What started with six quiet, guarded students has grown to over 100 participants. We've created a space where boys can discuss emotional resilience using the logical frameworks they already trust and respect.
              </p>
              <Link href="/session-story">
                <Button variant="outline" className="border-soft-blue text-soft-blue hover:bg-soft-blue hover:text-white">
                  Read Our Growth Story →
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={classroomImage} 
                  alt="Students in physics classroom during Grief Circuits session" 
                  className="w-full h-64 object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-clay-beige rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-charcoal">100+</div>
                <div className="text-sm text-gray-600">Students Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-warm-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Using physics principles to create safe spaces for emotional exploration and healing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Journaling Workshops */}
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-soft-blue/10 rounded-xl flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-soft-blue" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Journaling Workshops</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track emotional current flow through structured reflection. Map voltage drops as they relate to daily stress and build awareness of your personal circuit patterns.
                </p>
              </CardContent>
            </Card>

            {/* Clay Emotional Models */}
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-muted-coral/10 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-8 h-8 text-muted-coral" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Clay Emotional Models</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build physical representations of emotional circuits using conductive clay. Repair broken pathways and redesign systems for resilience through hands-on modeling.
                </p>
              </CardContent>
            </Card>

            {/* Group Conversations */}
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-clay-beige/40 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Systems-Based Group Conversations</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discuss parallel pathways for support and understand pressure distribution in peer networks. Learn how community can provide alternative routes for emotional energy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-gradient-to-br from-soft-blue/5 to-clay-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
            "By mapping the invisible, we begin to heal."
          </blockquote>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Male students often lack safe emotional outlets, trapped by expectations to suppress vulnerability. Traditional therapy can feel abstract or threatening to boys who think in logical, systematic terms.
            </p>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Grief Circuits bridges this gap by using the language of physics—resistance, current, pressure, feedback loops—to make emotional literacy accessible. We don't dismantle stoicism; we reframe it in terms students already respect.
            </p>
            
            <Card className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-charcoal mb-4">The Impact</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Boys who hadn't spoken to each other before were discussing how they were rebuilding their base nodes or adding capacitors after exams. The language began to spread, creating a new vocabulary for emotional resilience that felt both scientific and deeply personal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Healing Through Systems?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our growing community of students who are redesigning their emotional circuits for resilience and growth.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    type="text" 
                    placeholder="First Name" 
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-soft-blue"
                    required
                  />
                  <Input 
                    type="text" 
                    placeholder="Last Name" 
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-soft-blue"
                    required
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-soft-blue"
                  required
                />
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-gray-300 focus:ring-soft-blue">
                    <SelectValue placeholder="Select Your School/Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9th">9th Grade</SelectItem>
                    <SelectItem value="10th">10th Grade</SelectItem>
                    <SelectItem value="11th">11th Grade</SelectItem>
                    <SelectItem value="12th">12th Grade</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea 
                  placeholder="What draws you to Grief Circuits? (Optional)" 
                  rows={4} 
                  className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-soft-blue resize-none"
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-soft-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Healing Through Systems
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <p className="text-gray-400 mt-8 text-sm max-w-xl mx-auto">
            This program is scaling. Our annual STEM Olympiad will include Grief Circuits workshops open to visiting students across Lahore. The goal is structural literacy—helping boys understand their internal systems without shame or abstraction.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-soft-blue rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-charcoal">Grief Circuits</span>
              </div>
              <p className="text-gray-600 mb-4">Where emotion meets physics, and healing becomes systematic.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-charcoal mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>grief.circuits@school.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-charcoal mb-4">Learn More</h4>
              <div className="space-y-2">
                <Link href="/session-story" className="block text-gray-600 hover:text-soft-blue transition-colors">
                  Our Growth Story
                </Link>
                <Link href="/" className="block text-gray-600 hover:text-soft-blue transition-colors">
                  Join a Workshop
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 Grief Circuits. Building emotional resilience through systematic understanding.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
