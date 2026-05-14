import Link from 'next/link';
import { ArrowRight, Building2, Home, MapPin, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <Building2 className="text-white/10" size={80} />
          </div>
          <div className="absolute top-40 right-20 animate-float animation-delay-2000">
            <Home className="text-white/10" size={60} />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-float animation-delay-4000">
            <MapPin className="text-white/10" size={70} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 animate-pulse-slow">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Premium Real Estate Platform</span>
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              Find Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 animate-gradient">
                Dream Property
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Discover premium lands, luxury villas, modern apartments, and exclusive development projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Explore Properties
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTEyIDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">250+</div>
              <div className="text-sm md:text-base opacity-90">Properties Available</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up animation-delay-200">180+</div>
              <div className="text-sm md:text-base opacity-90">Land Plots</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up animation-delay-400">45+</div>
              <div className="text-sm md:text-base opacity-90">New Projects</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up animation-delay-600">500+</div>
              <div className="text-sm md:text-base opacity-90">Happy Families</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Stagger Animation */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
              Why Choose BuildBase?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property with premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Listings',
                description: 'Handpicked properties from verified builders and owners',
                delay: '0',
              },
              {
                icon: TrendingUp,
                title: 'Best Prices',
                description: 'Competitive pricing with transparent deals and no hidden costs',
                delay: '200',
              },
              {
                icon: Sparkles,
                title: 'Expert Guidance',
                description: 'Professional support throughout your property journey',
                delay: '400',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${feature.delay}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section with Hover Effects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
              Explore Property Types
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect property that matches your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Villas',
                image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
                count: '120+ Properties',
              },
              {
                title: 'Modern Apartments',
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
                count: '85+ Properties',
              },
              {
                title: 'Premium Lands',
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
                count: '180+ Plots',
              },
            ].map((type, index) => (
              <div
                key={index}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${type.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                    <h3 className="text-3xl font-bold mb-2">{type.title}</h3>
                    <p className="text-white/80 mb-4">{type.count}</p>
                    <Button variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View All <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Animation */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-pink-600 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Get in touch with us today and let our experts guide you to your dream home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 group">
              Contact Us Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
