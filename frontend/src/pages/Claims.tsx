import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, FileText, Camera, CheckCircle, AlertTriangle, Shield, Users } from "lucide-react";

export default function Claims() {
  const claimsSteps = [
    {
      number: 1,
      title: "Report Your Claim",
      description: "Contact us immediately after an incident. We're available 24/7 to take your claim.",
      icon: <Phone className="h-8 w-8 text-primary" />,
      timeline: "Immediately"
    },
    {
      number: 2,
      title: "Document the Scene",
      description: "Take photos, get police report number, and exchange information with other parties.",
      icon: <Camera className="h-8 w-8 text-primary" />,
      timeline: "At the scene"
    },
    {
      number: 3,
      title: "Claim Assignment",
      description: "We'll assign a dedicated claims adjuster to your case within 2 hours.",
      icon: <Users className="h-8 w-8 text-primary" />,
      timeline: "Within 2 hours"
    },
    {
      number: 4,
      title: "Vehicle Inspection",
      description: "Schedule an inspection at our approved repair facility or mobile inspection.",
      icon: <FileText className="h-8 w-8 text-primary" />,
      timeline: "Within 24 hours"
    },
    {
      number: 5,
      title: "Repair Authorization",
      description: "Once approved, we'll authorize repairs and coordinate with the repair shop.",
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      timeline: "Within 48 hours"
    }
  ];

  const claimTypes = [
    {
      title: "Collision Claims",
      description: "Damage from accidents with other vehicles or objects",
      urgency: "high",
      avgTime: "3-5 days"
    },
    {
      title: "Comprehensive Claims", 
      description: "Theft, vandalism, weather damage, or hitting an animal",
      urgency: "medium",
      avgTime: "2-4 days"
    },
    {
      title: "Glass Claims",
      description: "Windshield or window damage",
      urgency: "low",
      avgTime: "Same day"
    },
    {
      title: "Liability Claims",
      description: "When you're responsible for damage to others",
      urgency: "high",
      avgTime: "5-10 days"
    }
  ];

  const contactMethods = [
    {
      method: "Phone",
      details: "(555) 123-VIBE",
      description: "24/7 Claims Hotline",
      icon: <Phone className="h-6 w-6" />
    },
    {
      method: "Online",
      details: "File Online Claim",
      description: "Submit photos and details",
      icon: <FileText className="h-6 w-6" />
    },
    {
      method: "Mobile App",
      details: "ViBE Mobile App",
      description: "Report and track claims",
      icon: <Camera className="h-6 w-6" />
    }
  ];

  const importantTips = [
    "Stay safe first - move to a safe location if possible",
    "Call 911 if there are injuries or major damage",
    "Take photos of all vehicles, damage, and the scene",
    "Get contact and insurance info from other drivers",
    "Don't admit fault or discuss details with other parties",
    "Contact ViBE as soon as it's safe to do so"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">File a Claim with ViBE</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
            We're here to help when you need us most. Our streamlined claims process gets you back on the road quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-primary-foreground/10">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-VIBE
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/10">
              <FileText className="h-5 w-5 mr-2" />
              File Online Claim
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-4 bg-destructive text-destructive-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 text-center">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">Emergency? Call 911 first, then contact us at (555) 123-VIBE</span>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Report Your Claim - Multiple Ways</h2>
            <p className="text-xl text-muted-foreground">Choose the method that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-primary">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.method}</h3>
                  <div className="text-lg font-medium text-primary mb-2">{method.details}</div>
                  <p className="text-muted-foreground">{method.description}</p>
                  <Button className="mt-4" variant="outline">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Claims Process Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We've streamlined our process to make filing and processing claims as easy as possible.
            </p>
          </div>
          
          <div className="space-y-8">
            {claimsSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    {step.icon}
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <Badge variant="outline">{step.timeline}</Badge>
                  </div>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Types */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Claims We Handle</h2>
            <p className="text-xl text-muted-foreground">
              We process all types of auto insurance claims quickly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {claimTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <Badge 
                      variant={type.urgency === 'high' ? 'destructive' : type.urgency === 'medium' ? 'default' : 'secondary'}
                    >
                      {type.urgency} priority
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Avg. processing time: {type.avgTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What to Do After an Accident</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Following these steps will help ensure your safety and make the claims process smoother.
              </p>
              
              <div className="space-y-4">
                {importantTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="border-2 border-secondary">
              <CardHeader className="bg-secondary text-secondary-foreground">
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  Claims Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">24/7 Claims Hotline</h4>
                    <p className="text-2xl font-bold text-primary">(555) 123-VIBE</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Average Response Time</h4>
                    <p className="text-lg">Under 2 hours</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Claims Email</h4>
                    <p className="text-lg">claims@vibeauto.com</p>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Start Claim Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-sm opacity-90">Average Claim Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Claims Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-sm opacity-90">Claims Paid Annually</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}