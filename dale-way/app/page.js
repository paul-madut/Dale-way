'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Card from './components/Card';
import AnimationWrapper from './components/AnimationWrapper';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    gsap.fromTo('.hero-content', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-white">
        {/* Top Bar */}
        <div className="bg-blue-600 text-white px-4 py-2">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <span>Over 20 years serving Eastern Ontario</span>
            <span>Professional real estate expertise in Ottawa & surrounding areas</span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex min-h-[calc(100vh-40px)]">
          {/* Left Side - Content */}
          <div className="flex-1 flex items-center px-8 lg:px-16">
            <div className="max-w-xl hero-content">
              <p className="text-sm font-medium text-gray-600 mb-4">Building Your Dreams</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Eastern Ontario's<br />
                Premier Property<br />
                Experts
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 20 years of dedicated experience, we help clients navigate the
                complex real estate landscape in Ottawa and surrounding areas. Your trusted
                partners in finding the perfect home or maximizing your property investment.
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <Button href="#contact">Contact Us Now</Button>
                <Button href="#services" variant="outline">Explore Our Services</Button>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <img
                src="/hero/pexels-marketingtuig-87223.jpg"
                alt="Beautiful Ontario real estate property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <AnimationWrapper>
                <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">Services</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Comprehensive Real <br />
                  Estate Solutions for <br />
                  Ottawa
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We offer tailored services for both residential and commercial property 
                  transactions, ensuring a smooth and successful experience for every client.
                </p>
              </AnimationWrapper>
              
              <div className="space-y-8">
                <AnimationWrapper delay={0.2}>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Residential</h3>
                    <p className="text-gray-600 mb-4">
                      Find your dream home or sell your property with expert guidance and 
                      local market insights.
                    </p>
                    <Button href="#contact" size="sm">Learn More</Button>
                  </div>
                </AnimationWrapper>
                
                <AnimationWrapper delay={0.4}>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Commercial</h3>
                    <p className="text-gray-600 mb-4">
                      Strategic property investments and sales for businesses looking to 
                      maximize their real estate potential.
                    </p>
                    <Button href="#contact" variant="outline" size="sm">Contact</Button>
                  </div>
                </AnimationWrapper>
              </div>
            </div>
            
            <AnimationWrapper delay={0.3} className="lg:order-2">
              <div className="rounded-lg aspect-square overflow-hidden">
                <img
                  src="/services/pexels-pixabay-53610.jpg"
                  alt="Professional real estate services"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper className="text-center mb-12">
            <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wider">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Commitment to Excellence <br />
              in Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring unparalleled expertise and dedication to every real estate transaction in Eastern Ontario.
            </p>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimationWrapper delay={0.1}>
              <div className="text-center">
                <div className="rounded-lg aspect-video mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Ottawa neighborhood with beautiful homes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Local Market Expertise</h3>
                <p className="text-gray-600 mb-6">
                  Deep understanding of Ottawa's real estate landscape gained through two decades of experience.
                </p>
                <div className="flex justify-center">
                  <Button href="#contact" variant="outline" size="sm">Learn More</Button>
                  <Button href="#contact" variant="ghost" size="sm" className="ml-4">Contact</Button>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.3}>
              <div className="text-center">
                <div className="rounded-lg aspect-video mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Real estate agent meeting with clients"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Personalized Client Service</h3>
                <p className="text-gray-600 mb-6">
                  Tailored approach that puts your unique needs and goals at the forefront of every transaction.
                </p>
                <div className="flex justify-center">
                  <Button href="#contact" variant="outline" size="sm">Learn More</Button>
                  <Button href="#contact" variant="ghost" size="sm" className="ml-4">Contact</Button>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={0.5}>
              <div className="text-center">
                <div className="rounded-lg aspect-video mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Sold sign in front of beautiful home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
                <p className="text-gray-600 mb-6">
                  Consistent success in helping clients achieve their real estate objectives with strategic guidance.
                </p>
                <div className="flex justify-center">
                  <Button href="#contact" variant="outline" size="sm">Learn More</Button>
                  <Button href="#contact" variant="ghost" size="sm" className="ml-4">Contact</Button>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive Services <br />
              <span className="text-gray-600">Tailored solutions for your real estate journey</span>
            </h2>
          </AnimationWrapper>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <AnimationWrapper delay={0.1}>
              <Card className="text-center h-full">
                <h3 className="text-xl font-bold mb-4">Valuation</h3>
                <p className="text-gray-600 mb-4">
                  Accurate property assessment using advanced market analysis techniques
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button>Explore</Button>
              </Card>
            </AnimationWrapper>
            
            <AnimationWrapper delay={0.3}>
              <Card className="text-center h-full">
                <h3 className="text-xl font-bold mb-4">Analysis</h3>
                <p className="text-gray-600 mb-4">
                  In depth market research to inform strategic decisions
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button>Explore</Button>
              </Card>
            </AnimationWrapper>
            
            <AnimationWrapper delay={0.5}>
              <Card className="text-center h-full">
                <h3 className="text-xl font-bold mb-4">Negotiation</h3>
                <p className="text-gray-600 mb-4">
                  Expert support to secure the best possible terms
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Button>Explore</Button>
              </Card>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Team <br />
              <span className="text-gray-600">Dedicated professionals with deep real estate expertise</span>
            </h2>
          </AnimationWrapper>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { name: "Jennifer Roberts", role: "Lead Broker", description: "Veteran real estate professional with 20 years of experience in Eastern Ontario markets." },
              { name: "Michael Thompson", role: "Senior Agent", description: "Specializes in commercial property transactions and strategic market analysis." },
              { name: "Sarah Chen", role: "Residential Specialist", description: "Expert in helping first time homebuyers navigate the Ottawa real estate market." },
              { name: "David Kim", role: "Investment Advisor", description: "Provides strategic guidance for real estate investment opportunities." }
            ].map((member, index) => (
              <AnimationWrapper key={index} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to find your <br />
              perfect property?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your real estate goals and create a personalized strategy.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Button>Schedule</Button>
              <Button variant="secondary">Contact</Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Dale Way</h3>
              <p className="text-gray-300 mb-4">
                Eastern Ontario's premier property experts with 20 years of experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Residential</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Valuation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>hello@daleway.io</p>
                <p>+1 (613) 555-0123</p>
                <p>123 Main Street<br />Ottawa, Ontario K1P 5M7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Dale Way. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
