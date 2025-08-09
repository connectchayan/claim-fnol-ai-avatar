import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Trophy, Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

export default function About() {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trust & Reliability",
      description: "We've been protecting families for nearly three decades with unwavering commitment to our promises."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction at the center of what we do."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for excellence in every interaction, from getting quotes to processing claims."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community",
      description: "We're not just an insurance company - we're part of the communities we serve and protect."
    }
  ];

  const teamMembers = [
    {
      name: "Jennifer Martinez",
      role: "Chief Executive Officer",
      experience: "20+ years in insurance",
      description: "Jennifer leads ViBE with a vision of making insurance accessible and understandable for everyone."
    },
    {
      name: "David Thompson",
      role: "Claims Director",
      experience: "15+ years in claims",
      description: "David ensures our claims process remains fast, fair, and customer-friendly."
    },
    {
      name: "Sarah Kim",
      role: "Customer Success Manager",
      experience: "12+ years in customer service",
      description: "Sarah oversees our customer experience initiatives and agent training programs."
    }
  ];

  const milestones = [
    { year: "1995", event: "ViBE Auto Insurance founded with a mission to provide affordable, reliable coverage" },
    { year: "2001", event: "Reached 10,000 customers and expanded to serve three states" },
    { year: "2008", event: "Launched 24/7 claims reporting and customer service" },
    { year: "2015", event: "Introduced mobile app and online policy management" },
    { year: "2020", event: "Achieved A+ rating from Better Business Bureau" },
    { year: "2024", event: "Now serving 250,000+ customers across 15 states" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ViBE Auto Insurance</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            For nearly three decades, we've been more than just an insurance company. 
            We're your trusted partner on life's journey, protecting what matters most.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At ViBE Auto Insurance, our mission is simple: to provide exceptional auto insurance 
                coverage that combines affordability, reliability, and outstanding customer service. 
                We believe that everyone deserves quality protection without breaking the bank.
              </p>
              <p className="text-lg text-muted-foreground">
                Since 1995, we've built our reputation on treating every customer like family, 
                processing claims fairly and quickly, and being there when you need us most. 
                We're not just selling policies – we're providing peace of mind.
              </p>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="ViBE Auto Insurance team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced leaders are committed to delivering exceptional service and value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our commitment to serving customers better.
            </p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2"></div>
                <div className="flex-grow">
                  <p className="text-lg text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it – hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-4">
                  "I've been with ViBE for over 10 years. They've always been there when I needed them, 
                  and their rates are unbeatable. When my teenage daughter started driving, they helped 
                  us find the most affordable way to add her to our policy."
                </p>
                <p className="font-semibold">— Robert Chen, Long-time Customer</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-4">
                  "After my accident last year, ViBE's claims team was incredible. They walked me through 
                  every step, got my car repaired quickly, and even provided a rental car. I couldn't 
                  have asked for better service during a stressful time."
                </p>
                <p className="font-semibold">— Maria Santos, Satisfied Customer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}