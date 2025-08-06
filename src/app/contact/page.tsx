'use client';

import { useState } from "react";
import { Mail, MapPin, Send, User, MessageSquare, Clock, CheckCircle, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Send me a message anytime",
      contact: "aspen@steele-online.com",
      action: "mailto:aspen@steele-online.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Based in Atlanta, Georgia",
      contact: "Available for remote work",
      action: null,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-800"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-600"
    },
  ];

  return (
    <div className="page-content min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Let&apos;s Connect
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I&apos;m always excited to discuss new opportunities, collaborate on projects, 
            or simply connect with fellow developers and innovators.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={method.title}
                className="group bg-white/25 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                {method.action ? (
                  <a
                    href={method.action}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{method.contact}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-blue-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Send a Message</h2>
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="text-green-600 mr-3" size={20} />
                <p className="text-green-700 font-medium">Message sent successfully! I&apos;ll get back to you soon.</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <User size={16} className="inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all"
                  placeholder="What&apos;s this about?"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/70 transition-all resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello!"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            {/* Response Time */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg">
              <div className="flex items-center mb-6">
                <Clock className="text-green-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Quick Response</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or connect with me on social media.
              </p>
              <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium">
                  ?? Currently available for new projects and collaborations!
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect on Social</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all border border-white/60 group ${social.color}`}
                    >
                      <IconComponent className="text-gray-700 group-hover:text-white mr-4 transition-colors" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                          {social.name}
                        </h4>
                        <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">
                          Follow me on {social.name}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What type of projects do you work on?</h4>
                  <p className="text-gray-700 text-sm">
                    I specialize in web applications, mobile apps, and full-stack development using modern technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Do you work remotely?</h4>
                  <p className="text-gray-700 text-sm">
                    Yes! I work with clients worldwide and am experienced in remote collaboration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What&apos;s your typical project timeline?</h4>
                  <p className="text-gray-700 text-sm">
                    It depends on the scope, but most projects range from 2-12 weeks. I&apos;ll provide detailed estimates upfront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-2xl p-12 border border-white/40 shadow-2xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you have a detailed plan or just an idea, I&apos;m here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Start a Conversation
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/50 text-gray-700 rounded-xl hover:bg-white/70 transition-all font-medium border border-white/60"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}