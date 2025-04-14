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
return(
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Clear Choice Pools
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional pool maintenance and cleaning services to keep your pool clean and sanitized all year round.
            </p>
            <div className="flex gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+13378896169">
                        Get Free Quote
                    </a>
                  </Button>
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
      <div id="services" className="py-24 bg-white">
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
                title: "Competitive Pricing",
                description: "No hidden fees — Honest pricing to fit your budget without sacrificing quality",
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
              <a href="tel:+13378896169"
                 className="flex items-center gap-2">
              <PhoneCall className="h-5 w-5" />
              (337)889-6169
              </a>
            </Button>

            <Button
              size="lg"
              className="flex items-center gap-2"
            >
              <a
                href="mailto:westerchil@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                westerchil@gmail.com
              </a>
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