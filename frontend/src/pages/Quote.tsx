import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, Calculator, Shield, Star } from "lucide-react";

type FormData = {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  dateOfBirth: string;
  maritalStatus: string;
  
  // Vehicle Info
  year: string;
  make: string;
  model: string;
  vin: string;
  usage: string;
  annualMileage: string;
  
  // Coverage
  coverageLevel: string;
  deductible: string;
  
  // Additional
  currentInsurance: boolean;
  violations: boolean;
  goodStudent: boolean;
  multiVehicle: boolean;
};

export default function Quote() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "", zipCode: "", dateOfBirth: "", maritalStatus: "",
    year: "", make: "", model: "", vin: "", usage: "", annualMileage: "",
    coverageLevel: "", deductible: "",
    currentInsurance: false, violations: false, goodStudent: false, multiVehicle: false
  });
  const [quote, setQuote] = useState<number | null>(null);
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const calculateQuote = () => {
    // Simplified quote calculation logic
    let basePrice = 800;
    
    // Vehicle age adjustment
    const vehicleAge = 2024 - parseInt(formData.year);
    if (vehicleAge < 3) basePrice += 200;
    else if (vehicleAge > 10) basePrice -= 150;
    
    // Coverage level adjustment
    if (formData.coverageLevel === "premium") basePrice += 300;
    else if (formData.coverageLevel === "basic") basePrice -= 200;
    
    // Deductible adjustment
    if (formData.deductible === "250") basePrice += 100;
    else if (formData.deductible === "1000") basePrice -= 100;
    
    // Discounts
    if (formData.goodStudent) basePrice -= 50;
    if (formData.multiVehicle) basePrice -= 100;
    if (!formData.violations) basePrice -= 75;
    if (formData.currentInsurance) basePrice -= 25;
    
    // Mileage adjustment
    const mileage = parseInt(formData.annualMileage);
    if (mileage < 7500) basePrice -= 50;
    else if (mileage > 15000) basePrice += 75;
    
    return Math.max(basePrice, 400); // Minimum quote
  };

  const handleNext = () => {
    if (step === totalSteps) {
      const calculatedQuote = calculateQuote();
      setQuote(calculatedQuote);
      toast({
        title: "Quote Generated!",
        description: "Your personalized quote is ready.",
      });
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (quote) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-secondary">
            <CardHeader className="text-center bg-secondary text-secondary-foreground">
              <CardTitle className="text-3xl">Your ViBE Auto Insurance Quote</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-primary mb-2">
                  ${quote}<span className="text-2xl">/year</span>
                </div>
                <div className="text-lg text-muted-foreground">
                  or ${Math.round(quote / 12)}/month
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Shield className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <div className="font-semibold">Comprehensive Coverage</div>
                  <div className="text-sm text-muted-foreground">Full protection included</div>
                </div>
                <div className="text-center">
                  <Calculator className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <div className="font-semibold">Competitive Rate</div>
                  <div className="text-sm text-muted-foreground">Best price guaranteed</div>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <div className="font-semibold">24/7 Support</div>
                  <div className="text-sm text-muted-foreground">Always here for you</div>
                </div>
              </div>
              
              <div className="bg-accent/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Your Quote Details:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="text-muted-foreground">Vehicle:</span> {formData.year} {formData.make} {formData.model}</div>
                  <div><span className="text-muted-foreground">Coverage:</span> {formData.coverageLevel}</div>
                  <div><span className="text-muted-foreground">Deductible:</span> ${formData.deductible}</div>
                  <div><span className="text-muted-foreground">Annual Mileage:</span> {formData.annualMileage}</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" size="lg">
                  Start Policy Application
                </Button>
                <Button variant="outline" size="lg" onClick={() => {setQuote(null); setStep(1);}}>
                  Modify Quote
                </Button>
              </div>
              
              <div className="text-center mt-6 text-sm text-muted-foreground">
                Quote valid for 30 days. Final rates subject to underwriting approval.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Auto Insurance Quote</h1>
          <p className="text-xl text-muted-foreground">Just a few quick questions to get your personalized rate</p>
        </div>
        
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Personal Information"}
              {step === 2 && "Vehicle Information"}
              {step === 3 && "Coverage Preferences"}
              {step === 4 && "Additional Information"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => updateFormData("zipCode", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="maritalStatus">Marital Status</Label>
                    <Select value={formData.maritalStatus} onValueChange={(value) => updateFormData("maritalStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single</SelectItem>
                        <SelectItem value="married">Married</SelectItem>
                        <SelectItem value="divorced">Divorced</SelectItem>
                        <SelectItem value="widowed">Widowed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="year">Year *</Label>
                    <Select value={formData.year} onValueChange={(value) => updateFormData("year", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="make">Make *</Label>
                    <Select value={formData.make} onValueChange={(value) => updateFormData("make", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                        <SelectItem value="chevrolet">Chevrolet</SelectItem>
                        <SelectItem value="nissan">Nissan</SelectItem>
                        <SelectItem value="bmw">BMW</SelectItem>
                        <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                        <SelectItem value="audi">Audi</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="model">Model *</Label>
                    <Input
                      id="model"
                      value={formData.model}
                      onChange={(e) => updateFormData("model", e.target.value)}
                      placeholder="Enter model"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="vin">VIN (Vehicle Identification Number)</Label>
                  <Input
                    id="vin"
                    value={formData.vin}
                    onChange={(e) => updateFormData("vin", e.target.value)}
                    placeholder="17-character VIN"
                    maxLength={17}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="usage">Primary Use *</Label>
                    <Select value={formData.usage} onValueChange={(value) => updateFormData("usage", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select usage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="commute">Commute to Work</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="pleasure">Pleasure Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="annualMileage">Annual Mileage *</Label>
                    <Select value={formData.annualMileage} onValueChange={(value) => updateFormData("annualMileage", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mileage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5000">Under 5,000</SelectItem>
                        <SelectItem value="7500">5,000 - 7,500</SelectItem>
                        <SelectItem value="10000">7,500 - 10,000</SelectItem>
                        <SelectItem value="12500">10,000 - 12,500</SelectItem>
                        <SelectItem value="15000">12,500 - 15,000</SelectItem>
                        <SelectItem value="20000">15,000 - 20,000</SelectItem>
                        <SelectItem value="25000">Over 20,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <Label htmlFor="coverageLevel">Coverage Level *</Label>
                  <Select value={formData.coverageLevel} onValueChange={(value) => updateFormData("coverageLevel", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select coverage level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic Coverage (State Minimum)</SelectItem>
                      <SelectItem value="standard">Standard Coverage (Recommended)</SelectItem>
                      <SelectItem value="premium">Premium Coverage (Full Protection)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="deductible">Deductible *</Label>
                  <Select value={formData.deductible} onValueChange={(value) => updateFormData("deductible", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select deductible" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="250">$250</SelectItem>
                      <SelectItem value="500">$500</SelectItem>
                      <SelectItem value="1000">$1,000</SelectItem>
                      <SelectItem value="1500">$1,500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Higher deductibles typically result in lower monthly premiums.
                  </div>
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="currentInsurance"
                      checked={formData.currentInsurance}
                      onCheckedChange={(checked) => updateFormData("currentInsurance", !!checked)}
                    />
                    <Label htmlFor="currentInsurance">I currently have auto insurance</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="violations"
                      checked={formData.violations}
                      onCheckedChange={(checked) => updateFormData("violations", !!checked)}
                    />
                    <Label htmlFor="violations">I have had moving violations or accidents in the past 3 years</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="goodStudent"
                      checked={formData.goodStudent}
                      onCheckedChange={(checked) => updateFormData("goodStudent", !!checked)}
                    />
                    <Label htmlFor="goodStudent">I am a student with good grades (GPA 3.0 or higher)</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="multiVehicle"
                      checked={formData.multiVehicle}
                      onCheckedChange={(checked) => updateFormData("multiVehicle", !!checked)}
                    />
                    <Label htmlFor="multiVehicle">I have multiple vehicles to insure</Label>
                  </div>
                </div>
                
                <div className="bg-accent/30 rounded-lg p-4 text-sm">
                  <div className="font-semibold mb-2">Potential Discounts Applied:</div>
                  <ul className="space-y-1 text-muted-foreground">
                    {!formData.violations && <li>• Safe Driver Discount</li>}
                    {formData.currentInsurance && <li>• Continuous Coverage Discount</li>}
                    {formData.goodStudent && <li>• Good Student Discount</li>}
                    {formData.multiVehicle && <li>• Multi-Vehicle Discount</li>}
                  </ul>
                </div>
              </>
            )}

            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button onClick={handleNext} className="flex items-center">
                {step === totalSteps ? "Get Quote" : "Next"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          Your information is secure and will not be shared with third parties.
        </div>
      </div>
    </div>
  );
}