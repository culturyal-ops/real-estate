import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building2, Home, MapPin, Sparkles, TrendingUp, Award, Bed, Bath, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockProperties, mockLands, mockProjects } from '@/lib/mockData';
import { formatPrice, formatArea } from '@/lib/utils';

export default function HomePage() {
  const featuredProperties = mockProperties.filter(p => p.featured).slice(0, 3);
  const featuredProjects = mockProjects.filter(p => p.featured).slice(0, 3);
  const featuredLands = mockLands.filter(l => l.featured).slice(0, 3);
  
  const propertiesCount = mockProperties.length;
  const landsCount = mockLands.length;
  const projectsCount = mockProjects.length;
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
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">{propertiesCount}+</div>
              <div className="text-sm md:text-base opacity-90">Properties Available</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up animation-delay-200">{landsCount}+</div>
              <div className="text-sm md:text-base opacity-90">Land Plots</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up animation-delay-400">{projectsCount}+</div>
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

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Your journey to finding the perfect property in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Browse Properties',
                description: 'Explore our curated collection of premium properties',
                icon: '🏠',
              },
              {
                step: '02',
                title: 'Schedule Visit',
                description: 'Book a site visit at your convenience',
                icon: '📅',
              },
              {
                step: '03',
                title: 'Get Expert Advice',
                description: 'Consult with our property experts',
                icon: '💼',
              },
              {
                step: '04',
                title: 'Close the Deal',
                description: 'Complete paperwork and move in',
                icon: '🔑',
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="text-6xl font-bold text-gray-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from happy homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Villa Owner',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
                text: 'BuildBase helped us find our dream villa in Whitefield. The entire process was smooth and transparent. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                role: 'Apartment Buyer',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
                text: 'Excellent service and great property options. The team was very professional and helped us every step of the way.',
                rating: 5,
              },
              {
                name: 'Amit Patel',
                role: 'Land Investor',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
                text: 'Found the perfect plot for my future home. The documentation process was hassle-free. Thank you BuildBase!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹500Cr+</div>
              <div className="text-gray-300">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Stagger Animation - REMOVED DUPLICATE */}

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

      {/* Featured Properties */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-xl text-gray-600">
                Handpicked premium properties just for you
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/properties">
                View All <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <Link
                key={property.id}
                href={`/properties/${property.slug}`}
                className={`group block animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${property.gallery[0].image.url}')` }}
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {property.priceLabel}
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {property.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {property.location.address}, {property.location.city}
                    </p>
                    <div className="flex items-center justify-between text-gray-700 pt-4 border-t">
                      <div className="flex items-center">
                        <Bed size={18} className="mr-1" />
                        <span className="text-sm font-semibold">{property.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath size={18} className="mr-1" />
                        <span className="text-sm font-semibold">{property.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Maximize size={18} className="mr-1" />
                        <span className="text-sm font-semibold">{formatArea(property.sqftSuperBuiltUp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
                New Development Projects
              </h2>
              <p className="text-xl text-gray-600">
                Upcoming and ongoing residential enclaves
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.gallery[0].image.url}')` }}
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold capitalize">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {project.location.address}, {project.location.city}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t">
                    <span>{project.totalUnits} Total Units</span>
                    <span className="text-primary font-semibold">{project.availableUnits} Available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Lands */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
                Premium Land Plots
              </h2>
              <p className="text-xl text-gray-600">
                Build your dream home on these prime locations
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/lands">
                View All <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLands.map((land, index) => (
              <div
                key={land.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up animation-delay-${index * 200}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${land.gallery[0].image.url}')` }}
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {land.priceLabel}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {land.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {land.location.address}, {land.location.city}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {land.description}
                  </p>
                  <div className="flex items-center justify-between text-sm pt-4 border-t">
                    <span className="text-gray-600">Total Area</span>
                    <span className="text-primary font-semibold text-lg">{land.totalArea} sq.ft</span>
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
