import { Link, useLocation } from "wouter";
import { Zap } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-soft-blue rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-charcoal">Grief Circuits</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`transition-colors ${location === '/' ? 'text-soft-blue' : 'text-gray-600 hover:text-soft-blue'}`}>
              Home
            </Link>
            <Link href="/session-story" className={`transition-colors ${location === '/session-story' ? 'text-soft-blue' : 'text-gray-600 hover:text-soft-blue'}`}>
              Our Story
            </Link>
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Link href={location === '/' ? '/session-story' : '/'} className="text-gray-600 hover:text-soft-blue transition-colors">
              {location === '/' ? 'Our Story' : 'Home'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
