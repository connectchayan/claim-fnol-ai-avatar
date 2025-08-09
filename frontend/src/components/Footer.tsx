import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">ViBE Auto Insurance</span>
            </div>
            <p className="text-sm opacity-90">
              Protecting what matters most with reliable, affordable auto insurance coverage.
              Your trusted partner on the road since 1995.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="opacity-90 hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link to="/quote" className="opacity-90 hover:opacity-100 transition-opacity">Get Quote</Link></li>
              <li><Link to="/claims" className="opacity-90 hover:opacity-100 transition-opacity">File a Claim</Link></li>
              <li><Link to="/faq" className="opacity-90 hover:opacity-100 transition-opacity">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance Types</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Auto Insurance</li>
              <li className="opacity-90">Motorcycle Insurance</li>
              <li className="opacity-90">Commercial Vehicle</li>
              <li className="opacity-90">Classic Car Coverage</li>
              <li className="opacity-90">SR-22 Insurance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-70" />
                <span className="opacity-90">(555) 123-VIBE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-70" />
                <span className="opacity-90">hello@vibeauto.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 opacity-70 mt-0.5" />
                <span className="opacity-90">
                  123 Insurance Blvd<br />
                  Safety City, SC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
            <p>&copy; 2024 ViBE Auto Insurance. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              <Link to="/accessibility" className="hover:opacity-100 transition-opacity">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};