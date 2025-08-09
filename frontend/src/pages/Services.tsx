import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Bike, Truck, Crown, FileText, Shield, CheckCircle } from "lucide-react";
import servicesImage from "@/assets/services-image.jpg";

export default function Services() {
  const services = [
    {
      icon: <Car className="h-12 w-12 text-primary" />,
      title: "Standard Auto Insurance",
      description: "Comprehensive coverage for your everyday vehicle with liability, collision, and comprehensive options.",
      features: ["Liability Coverage", "Collision Coverage", "Comprehensive Coverage", "Uninsured Motorist", "Medical Payments"],
      popular: true
    },
    {
      icon: <Bike className="h-12 w-12 text-primary" />,
      title: "Motorcycle Insurance",
      description: "Specialized coverage designed for motorcycle riders with features tailored to your bike and riding style.",
      features: ["Bike Coverage", "Gear Protection", "Roadside Assistance", "Custom Parts Coverage", "Passenger Liability"]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Commercial Vehicle",
      description: "Protect your business vehicles and fleet with comprehensive commercial auto insurance solutions.",
      features: ["Fleet Coverage", "Cargo Protection", "Business Liability", "Driver Coverage", "Equipment Insurance"]
    },
    {
      icon: <Crown className="h-12 w-12 text-primary" />,
      title: "Classic Car Coverage",
      description: "Specialty insurance for vintage, classic, and collector vehicles with agreed value coverage.",
      features: ["Agreed Value", "Show Car Coverage", "Spare Parts", "Limited Use Discount", "Expert Adjusters"]
    }
  ];

  const additionalServices = [
    {
      icon: <FileText className="h-8 w-8 text-secondary" />,
      title: "SR-22 Filing",
      description: "We handle all SR-22 requirements and filing for license reinstatement."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Gap Insurance",
      description: "Protect yourself from owing more than your car is worth if it's totaled."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      title: "Rental Car Coverage",
      description: "Get a rental car while yours is being repaired after a covered claim."
    }
  ];

  const coverageOptions = [
    {
      name: "Liability Coverage",
      description: "Required by law. Covers damages to others when you're at fault.",
      required: true
    },
    {
      name: "Collision Coverage",
      description: "Pays for damage to your car from accidents, regardless of fault.",
      required: false
    },
    {
      name: "Comprehensive Coverage", 
      description: "Protects against theft, vandalism, weather damage, and other non-collision events.",
      required: false
    },
    {
      name: "Uninsured Motorist",
      description: "Protects you when the other driver doesn't have insurance.",
      required: false
    },
    {
      name: "Medical Payments",
      description: "Covers medical expenses for you and your passengers.",
      required: false
    },
    {
      name: "Personal Injury Protection",
      description: "Covers medical bills, lost wages, and other expenses regardless of fault.",
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Insurance Services</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comprehensive auto insurance solutions tailored to your specific needs and budget.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insurance Coverage Types</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of specialized insurance products designed to protect what matters most to you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative border-2 hover:border-primary/50 transition-colors">
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-secondary">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold">Coverage Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full">
                    <Link to="/quote">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">
              Extra protection and services to complement your auto insurance policy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Your Coverage Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about the different types of coverage available and what each one protects you against.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageOptions.map((option, index) => (
              <Card key={index} className={option.required ? "border-secondary border-2" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{option.name}</h3>
                    {option.required && (
                      <Badge variant="outline" className="text-xs border-secondary text-secondary">
                        Required
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ViBE for Your Auto Insurance?</h2>
              <div className="space-y-4 text-lg opacity-90">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Competitive rates with discounts for safe drivers, multiple vehicles, and bundled policies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>24/7 claims reporting and customer service support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Fast claim processing with most claims resolved within 48 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Local agents who understand your community and needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span>Easy online policy management and mobile app</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">A+</div>
              <div className="text-xl mb-2">Better Business Bureau Rating</div>
              <div className="opacity-75">Trusted by 250,000+ customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a personalized quote in minutes and see how much you can save with ViBE Auto Insurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-secondary border-white hover:bg-secondary-foreground/10">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              <Link to="/contact">Contact Agent</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}