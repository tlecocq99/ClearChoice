"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Mail, Clock, Shield, Droplets, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log({ name, email, phone, message });
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Clear Choice Pools, Clear Choice Service
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional pool maintenance and cleaning services to keep your pool pristine all year round.
            </p>
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get Free Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Request a Free Quote</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your pool service needs"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Submit Request</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <a
                href="#services"
                className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Our Professional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Droplets className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Maintenance</h3>
              <p className="text-gray-600">
                Weekly or bi-weekly cleaning services to keep your pool in perfect condition.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chemical Balance</h3>
              <p className="text-gray-600">
                Expert water testing and chemical balancing for safe, crystal-clear water.
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <CheckCircle2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipment Check</h3>
              <p className="text-gray-600">
                Regular inspection and maintenance of all pool equipment and systems.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Always available for emergency services",
                icon: <Clock className="h-6 w-6" />,
              },
              {
                title: "Licensed & Insured",
                description: "Fully certified professional service",
                icon: <Shield className="h-6 w-6" />,
              },
              {
                title: "Experienced Team",
                description: "Over 3 years of industry experience",
                icon: <CheckCircle2 className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600">Get in touch for a free quote or any questions</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <PhoneCall className="h-5 w-5" />
              (337) 889-6169
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              contact@poolservice.com
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Clear Choice Pool Service</h2>
            <p className="text-gray-400">
              Professional pool maintenance and cleaning services
            </p>
            <p className="mt-8 text-gray-400 text-sm">
              © {new Date().getFullYear()} Clear Choice Pool Service. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
