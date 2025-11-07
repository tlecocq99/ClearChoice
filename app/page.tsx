"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  PhoneCall,
  Mail,
  Clock,
  Shield,
  Droplets,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`); // update the URL hash manually
  }
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      setMenuOpen(false); // close menu after click
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-cyan-600 h-16 sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95 transition-all duration-300">
        <div className="flex justify-between items-center h-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="relative h-12 w-48 animate-fadeIn">
            <Image
              src="/images/logo.PNG"
              alt="Clear Choice Pool Service Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="text-white font-semibold px-6 py-2 hover:bg-white/20 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              Menu
            </button>
            {menuOpen && (
              <div className="fixed right-4 top-20 w-56 bg-white rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-100 animate-slideDown">
                <button
                  onClick={() => handleNavClick("services")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("why-choose-us")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                >
                  Why Choose Us
                </button>
                <button
                  onClick={() => handleNavClick("faq")}
                  className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200"
                >
                  FAQ (Coming Soon)
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <Image
          src="/images/sunset.png"
          alt="Sunset pool background"
          fill
          className="object-cover object-center transform scale-105 transition-transform duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-slideUp">
            <h1
              className={`${jura.className} text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl animate-fadeIn`}
            >
              Clear Choice Pools
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 drop-shadow-lg animate-fadeIn delay-200 leading-relaxed">
              Professional pool maintenance and cleaning services to keep your
              pool clean and sanitized all year round.
            </p>
            <div className="flex gap-4 animate-slideUp delay-300">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <a href="#contact">Get Free Quote</a>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div id="services" className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fadeIn">
            Our Professional Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full animate-scaleIn"></div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600 bg-white/80 backdrop-blur-sm animate-slideUp delay-100 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Droplets className="h-14 w-14 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                Regular Maintenance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Weekly or bi-weekly cleaning services to keep your pool in
                perfect condition.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-cyan-600 bg-white/80 backdrop-blur-sm animate-slideUp delay-200 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-14 w-14 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Chemical Balance</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert water testing and chemical balancing for safe,
                crystal-clear water.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500 bg-white/80 backdrop-blur-sm animate-slideUp delay-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="h-14 w-14 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Equipment Check</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular inspection and maintenance of all pool equipment and
                systems.
              </p>
            </Card>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div id="why-choose-us" className="py-24 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-fadeIn">
            Why Choose Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-16 rounded-full animate-scaleIn"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Always available for emergency services",
                icon: <Clock className="h-8 w-8" />,
              },
              {
                title: "Licensed & Insured",
                description: "Fully certified professional service",
                icon: <Shield className="h-8 w-8" />,
              },
              {
                title: "Competitive Pricing",
                description:
                  "No hidden fees — Honest pricing to fit your budget without sacrificing quality",
                icon: <CheckCircle2 className="h-8 w-8" />,
              },
            ].map((item, index) => (
              <div key={index} className={`flex items-start gap-6 p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-slideUp delay-${(index + 1) * 100}`}>
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md flex-shrink-0 transform hover:rotate-6 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 id="contact" className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6 rounded-full animate-scaleIn"></div>
            <p className="text-gray-600 text-lg">
              Get in touch for a free quote or any questions
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 animate-slideUp">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-6"
            >
              <a href="tel:+13378896169" className="flex items-center gap-3">
                <PhoneCall className="h-6 w-6" />
                <span className="text-lg font-semibold">(337)889-6169</span>
              </a>
            </Button>

            <Button size="lg" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl px-8 py-6">
              <a
                href="mailto:westerchil@gmail.com"
                className="flex items-center gap-3"
              >
                <Mail className="h-6 w-6" />
                <span className="text-lg font-semibold">westerchil@gmail.com</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Clear Choice Pool Service
            </h2>
            <p className="text-gray-400 text-lg mb-2">
              Professional pool maintenance and cleaning services
            </p>
            <p className="mt-8 text-gray-500 text-sm">
              © {new Date().getFullYear()} Clear Choice Pool Service. All rights
              reserved.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </footer>
    </div>
  );
}
