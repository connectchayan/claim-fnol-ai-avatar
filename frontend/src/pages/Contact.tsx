import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Shield } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      details: "(555) 123-VIBE",
      description: "Available 24/7 for claims and emergencies",
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      details: "hello@vibeauto.com",
      description: "General inquiries and support",
      action: "Send Email"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      details: "Chat with an agent",
      description: "Available during business hours",
      action: "Start Chat"
    }
  ];

  const locations = [
    {
      name: "Corporate Headquarters",
      address: "123 Insurance Blvd",
      city: "Safety City, SC 12345",
      phone: "(555) 123-VIBE",
      hours: "Mon-Fri: 8am-6pm, Sat: 9am-3pm"
    },
    {
      name: "Regional Office - North",
      address: "456 Coverage Lane",
      city: "Protection Town, PT 67890",
      phone: "(555) 456-VIBE",
      hours: "Mon-Fri: 8am-5pm"
    },
    {
      name: "Regional Office - South",
      address: "789 Policy Street",
      city: "Secure City, SE 13579",
      phone: "(555) 789-VIBE",
      hours: "Mon-Fri: 8am-5pm"
    }
  ];

  const departments = [
    {
      name: "Sales & New Policies",
      description: "Get quotes and start new policies",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      name: "Claims Department",
      description: "File and manage insurance claims",
      icon: <Shield className="h-8 w-8 text-primary" />
    },
    {
      name: "Customer Service",
      description: "Policy changes and general support",
      icon: <MessageCircle className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact ViBE Auto Insurance</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            We're here to help with all your auto insurance needs. Reach out to us anytime.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-primary">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <div className="text-lg font-medium text-primary mb-2">{info.details}</div>
                  <p className="text-muted-foreground mb-4">{info.description}</p>
                  <Button variant="outline">{info.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need assistance? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="policy">Policy Question</SelectItem>
                          <SelectItem value="claim">Claims Inquiry</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="complaint">File a Complaint</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe how we can help you..."
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Department Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Departments</h2>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 flex items-start space-x-4">
                        {dept.icon}
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                          <p className="text-muted-foreground">{dept.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-2 border-secondary">
                <CardHeader className="bg-secondary text-secondary-foreground">
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="border-t pt-3 mt-4">
                      <div className="flex justify-between text-sm">
                        <span>Claims Reporting</span>
                        <span className="font-medium text-primary">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-xl text-muted-foreground">
              Visit us in person at one of our convenient locations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">{location.address}</div>
                      <div className="text-muted-foreground">{location.city}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5" />
                      <span className="text-sm">{location.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Emergency Claims Support</h2>
          <p className="text-xl opacity-90 mb-6">
            If you're in an accident or need to file an urgent claim, we're available 24/7.
          </p>
          <div className="text-3xl font-bold mb-2">(555) 123-VIBE</div>
          <p className="opacity-90">Available 24 hours a day, 7 days a week</p>
        </div>
      </section>
    </div>
  );
}