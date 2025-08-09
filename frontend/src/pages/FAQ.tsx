import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      color: "bg-blue-100 text-blue-800",
      faqs: [
        {
          question: "How do I get a quote for auto insurance?",
          answer: "Getting a quote is easy! You can get a free quote online in just 2 minutes by clicking 'Get Quote' and filling out our simple form. You can also call us at (555) 123-VIBE to speak with one of our licensed agents."
        },
        {
          question: "What information do I need to get a quote?",
          answer: "You'll need basic information including your driver's license number, vehicle information (year, make, model, VIN), your address, and driving history. Having this information ready will help speed up the process."
        },
        {
          question: "How quickly can I get coverage?",
          answer: "Coverage can begin immediately once you complete your application and make your first payment. Digital proof of insurance is available instantly, and your physical insurance cards will be mailed within 2-3 business days."
        }
      ]
    },
    {
      category: "Coverage Options",
      color: "bg-green-100 text-green-800",
      faqs: [
        {
          question: "What's the difference between liability, collision, and comprehensive coverage?",
          answer: "Liability coverage pays for damage you cause to others (required by law). Collision covers damage to your car from accidents. Comprehensive covers theft, vandalism, weather damage, and other non-collision events."
        },
        {
          question: "Do I need full coverage if my car is paid off?",
          answer: "While you're only legally required to carry liability insurance, we recommend maintaining comprehensive and collision coverage to protect your investment, especially if your vehicle has significant value."
        },
        {
          question: "What is uninsured motorist coverage?",
          answer: "This coverage protects you if you're hit by someone without insurance or with insufficient coverage. It can pay for medical bills, lost wages, and vehicle damage when the at-fault driver can't."
        }
      ]
    },
    {
      category: "Claims Process",
      color: "bg-purple-100 text-purple-800",
      faqs: [
        {
          question: "How do I file a claim?",
          answer: "You can file a claim 24/7 by calling our claims hotline at (555) 123-VIBE, using our mobile app, or filing online. We recommend reporting claims as soon as possible after an incident."
        },
        {
          question: "How long does the claims process take?",
          answer: "Most claims are processed within 48 hours. Simple claims like glass repair can often be completed the same day, while more complex claims may take 3-5 business days."
        },
        {
          question: "Will my rates go up if I file a claim?",
          answer: "Not necessarily. If you're not at fault for an accident, your rates typically won't increase. For at-fault claims, any rate impact depends on various factors including your driving history and the type of claim."
        }
      ]
    },
    {
      category: "Billing & Payments",
      color: "bg-orange-100 text-orange-800",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit cards, debit cards, bank transfers, and automatic bank drafts. You can pay online, by phone, by mail, or set up automatic payments for convenience."
        },
        {
          question: "Can I change my payment schedule?",
          answer: "Yes! We offer monthly, quarterly, semi-annual, and annual payment options. Contact us to discuss which payment schedule works best for your budget."
        },
        {
          question: "What happens if I miss a payment?",
          answer: "We'll send you a notice and provide a grace period to bring your account current. If payment isn't received within the grace period, your policy may be cancelled. Contact us immediately if you're having trouble making payments."
        }
      ]
    },
    {
      category: "Discounts & Savings",
      color: "bg-red-100 text-red-800",
      faqs: [
        {
          question: "What discounts are available?",
          answer: "We offer many discounts including safe driver, good student, multi-vehicle, multi-policy, defensive driving course completion, and more. Our agents can help you identify all available discounts."
        },
        {
          question: "How can I lower my insurance premium?",
          answer: "Consider increasing your deductible, maintaining a clean driving record, taking a defensive driving course, bundling multiple vehicles, or qualifying for available discounts. We can review your policy to find savings opportunities."
        },
        {
          question: "Do you offer discounts for low mileage drivers?",
          answer: "Yes! If you drive fewer than 7,500 miles per year, you may qualify for our low mileage discount. We also offer usage-based insurance programs that can provide additional savings."
        }
      ]
    }
  ];

  const blogPosts = [
    {
      title: "5 Tips for Safe Winter Driving",
      excerpt: "Essential tips to keep you safe on winter roads, from tire maintenance to emergency kits.",
      category: "Safety Tips",
      readTime: "3 min read"
    },
    {
      title: "Understanding Your Auto Insurance Policy",
      excerpt: "A complete guide to reading and understanding what your policy covers.",
      category: "Insurance 101",
      readTime: "5 min read"
    },
    {
      title: "What to Do After a Car Accident",
      excerpt: "Step-by-step instructions for handling accidents and protecting yourself.",
      category: "Claims Guide",
      readTime: "4 min read"
    },
    {
      title: "New Car vs. Used Car: Insurance Considerations",
      excerpt: "How your vehicle choice affects your insurance rates and coverage needs.",
      category: "Buying Guide",
      readTime: "6 min read"
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Find answers to common questions about ViBE Auto Insurance, or browse our helpful blog articles.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQ Content */}
            <div className="lg:col-span-2">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-8">
                  {filteredFAQs.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <div className="flex items-center space-x-3 mb-6">
                        <Badge className={category.color}>{category.category}</Badge>
                        <h2 className="text-2xl font-bold">{category.category}</h2>
                      </div>
                      
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.faqs.map((faq, faqIndex) => (
                          <AccordionItem 
                            key={faqIndex} 
                            value={`${categoryIndex}-${faqIndex}`}
                            className="border border-border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-6">
                              <span className="text-lg font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-6">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No FAQs found matching your search.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="border-2 border-secondary">
                <CardHeader className="bg-secondary text-secondary-foreground">
                  <CardTitle>Still Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-sm text-muted-foreground">(555) 123-VIBE</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Email Support</div>
                      <div className="text-sm text-muted-foreground">support@vibeauto.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-semibold">Live Chat</div>
                      <div className="text-sm text-muted-foreground">Available 24/7</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <a href="/quote" className="block text-primary hover:underline">Get a Quote</a>
                    <a href="/claims" className="block text-primary hover:underline">File a Claim</a>
                    <a href="/services" className="block text-primary hover:underline">Coverage Options</a>
                    <a href="/contact" className="block text-primary hover:underline">Contact Us</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Helpful Articles & Tips</h2>
            <p className="text-xl text-muted-foreground">
              Stay informed with our latest articles on auto insurance and safe driving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="text-xs text-muted-foreground">{post.readTime}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}