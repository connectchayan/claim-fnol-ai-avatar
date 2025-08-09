import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, DollarSign, Users, Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import LiveKitWidget from "@/components/ai_avatar/LiveKitWidget";
import { useState, useEffect } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Wifi, 
  Car, 
  Utensils, 
  Waves, 
  Dumbbell,
  Crown,
  Calendar,
  
  ChefHat,
  Coffee,
  MessageCircle
} from "lucide-react";

export default function Home() {

  const [showSupport, setShowSupport] = useState(false);
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-secondary" />,
      title: "Affordable Rates",
      description: "Get the coverage you need at prices that fit your budget. We offer competitive rates without sacrificing quality."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "Fast Claims Processing",
      description: "File claims 24/7 and get quick resolutions. Most claims are processed within 48 hours."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Expert Support",
      description: "Our licensed agents are here to help you find the perfect coverage and answer all your questions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "ViBE saved me hundreds on my car insurance while giving me better coverage. Their customer service is outstanding!",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "When I had an accident, ViBE's claims process was so smooth. They handled everything quickly and professionally.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      text: "I've been with ViBE for 5 years. They consistently offer great rates and their app makes managing my policy easy.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Affordable Auto Insurance You Can Trust
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Protect what matters most with ViBE Auto Insurance. Get a free quote in minutes and start saving today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ViBE Auto Insurance?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional coverage and service that puts you first.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">250K+</div>
              <div className="text-sm opacity-90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <div className="text-sm opacity-90">Claims Paid Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">29 Years</div>
              <div className="text-sm opacity-90">In Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save on Auto Insurance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust ViBE for their auto insurance needs.
            Get your free quote in just 2 minutes.
          </p>
          <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white text-secondary border-white hover:bg-secondary-foreground/10">
            <Link to="/quote" className="flex items-center">
              Start Your Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
       {/* Floating AI Concierge Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="secondary" 
          size="lg"
          className="rounded-full shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 px-6 py-3"
          onClick={() => setShowSupport(true)}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">Talk to AI Concierge</span>
        </Button>
      </div>
      {/* LiveKit Widget */}
      {showSupport && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
          <div className="pointer-events-auto">
            <LiveKitWidget setShowSupport={setShowSupport} />
          </div>
        </div>
      )}
    </div>
  );
}