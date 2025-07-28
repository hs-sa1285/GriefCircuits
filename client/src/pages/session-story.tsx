import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Users, TrendingUp, Heart } from "lucide-react";
import classroomImage from "@assets/WhatsApp Image 2025-07-27 at 18.02.14_43bb6dfa_1753725852223.jpg";

export default function SessionStory() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-soft-blue/10 to-clay-beige/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8 text-gray-600 hover:text-soft-blue">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6 leading-tight">
              From Six to <span className="text-soft-blue">Standing Room Only</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              The story of how Grief Circuits grew from a small experiment to a movement that reached over 100 students
            </p>
            
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-soft-blue" />
                </div>
                <div className="text-2xl font-bold text-charcoal">6</div>
                <div className="text-sm text-gray-600">Started With</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-muted-coral/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-muted-coral" />
                </div>
                <div className="text-2xl font-bold text-charcoal">100+</div>
                <div className="text-sm text-gray-600">Students Reached</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-clay-beige/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-charcoal">1</div>
                <div className="text-sm text-gray-600">Final Session</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <Card className="bg-gradient-to-r from-soft-blue/5 to-clay-beige/5 rounded-2xl mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-charcoal mb-6">The Beginning</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  In a dimly lit physics lab repurposed for something quieter, more personal, a small group of high school boys sat around a table covered in wires, batteries, resistors, and lumps of modeling clay. The usual problem sets had been replaced by a different kind of circuit diagram. One that mapped pressure, loss, and burnout across the fragile architecture of the teenage psyche. This was the first session of Grief Circuits, an initiative I founded to help male students articulate emotional experiences through the familiar language of systems, models, and physical logic.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Attendance began modestly; six students, quiet, guarded. We started by examining voltage drops as a metaphor for emotional depletion. We built circuits where broken paths could be repaired with conductive clay, modeling the idea that healing doesn't mean restoring the original circuit but redesigning it for resilience. Journaling exercises tracked the current of daily emotional flow. Stress became resistance. Support became parallel pathways.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-clay-beige/10 to-soft-blue/5 rounded-2xl mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-charcoal mb-6">The Growth</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Over time, the room filled. Friends brought friends. Students who wouldn't normally enter a counselor's office found permission here to reflect logically, spatially, privately. By spring, over a hundred students from across campus had joined at least one session. The language began to spread. Boys who hadn't spoken to each other before were discussing how they were rebuilding their base nodes or adding capacitors after exams.
                </p>
                
                <div className="bg-white rounded-xl p-6 border-l-4 border-soft-blue">
                  <blockquote className="text-xl italic text-gray-600">
                    "Students who wouldn't normally enter a counselor's office found permission here to reflect logically, spatially, privately."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-muted-coral/5 to-clay-beige/5 rounded-2xl mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-charcoal mb-6">The Final Session</h2>
                
                {/* Add the classroom image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
                  <img 
                    src={classroomImage} 
                    alt="Final Grief Circuits session with over 100 students in attendance" 
                    className="w-full h-64 object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                      Standing Room Only - 100+ Students
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our final session of the year had standing room only. More than one hundred students showed up. Some brought journals they had kept throughout the term. Others just came to listen. The models on the table weren't perfect replicas of any known circuit, but they made sense to those who had built them. That was the point.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-3">What Students Brought</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Personal journals from the term</li>
                      <li>• Clay circuit models they'd built</li>
                      <li>• Stories of emotional redesign</li>
                      <li>• New vocabulary for resilience</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-charcoal mb-3">The Impact</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 100+ students engaged</li>
                      <li>• Cross-campus participation</li>
                      <li>• New peer connections formed</li>
                      <li>• Physics metaphors adopted school-wide</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-soft-blue/10 to-muted-coral/5 rounded-2xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-charcoal mb-6">Scaling the Program</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Now the program is scaling. This September, my school's annual STEM Olympiad will include a new segment. One dedicated to Grief Circuits and the broader idea of systems-based emotional education. Workshops will be open to visiting students from across Pakistan, with an expected reach of over 1000+ participants. The goal is not therapeutic catharsis. It is structural literacy. If boys can understand pressure in pipes and signal loss in wires, they can begin to map those same principles onto internal states without shame or abstraction.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't need to dismantle stoicism. We just need to reframe it in terms they already respect. The circuits are already in place. They just need better routing.
                </p>
                
                <div className="mt-8 p-6 bg-charcoal rounded-xl text-white">
                  <h4 className="text-xl font-bold mb-4">What's Next: National Scale Impact</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-soft-blue mb-2">1000+</div>
                      <strong className="text-white">Expected Participants</strong>
                      <p className="text-gray-300 mt-1 text-sm">Students from across Pakistan joining STEM Olympiad workshops</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-muted-coral mb-2">Sept</div>
                      <strong className="text-white">STEM Olympiad Launch</strong>
                      <p className="text-gray-300 mt-1 text-sm">Dedicated Grief Circuits segment at annual competition</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-clay-beige mb-2">🔧</div>
                      <strong className="text-white">Structural Literacy</strong>
                      <p className="text-gray-300 mt-1 text-sm">Teaching emotional systems without shame or abstraction</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-600">
                    <p className="text-gray-300 text-sm italic">
                      "We don't need to dismantle stoicism. We just need to reframe it in terms they already respect."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-soft-blue/10 to-clay-beige/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-6">Be Part of This Movement</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            What started as an experiment with six students has become a new way for young men to understand and heal from emotional challenges. Join us in building better circuits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="bg-soft-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl">
                Join a Workshop
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="lg" className="border-soft-blue text-soft-blue hover:bg-soft-blue hover:text-white px-8 py-4 rounded-xl">
                Learn More About Our Method
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-gray py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-soft-blue rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-charcoal">Grief Circuits</span>
          </Link>
          <p className="text-gray-600 mb-4">Building emotional resilience through systematic understanding.</p>
          <p className="text-gray-500 text-sm">&copy; 2024 Grief Circuits. Where emotion meets physics, and healing becomes systematic.</p>
        </div>
      </footer>
    </div>
  );
}
