"use client";
import Title from "@/components/Title";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "support@eazycart.com",
      subdetail: "We'll respond within 24 hours",
      accent: "#22c55e",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      subdetail: "Mon-Fri, 9AM - 6PM EST",
      accent: "#3b82f6",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "794 Francisco St, San Francisco",
      subdetail: "CA 94102, United States",
      accent: "#f59e0b",
    },
  ];

  const faqItems = [
    {
      icon: Clock,
      question: "What are your business hours?",
      answer:
        "We're available Monday to Friday, 9:00 AM to 6:00 PM EST. Our online store is open 24/7.",
    },
    {
      icon: MessageCircle,
      question: "How quickly can I expect a response?",
      answer:
        "We aim to respond to all inquiries within 24 hours during business days.",
    },
  ];

  return (
    <div className="mx-6">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto my-10">
        <div className="text-center bg-slate-50 border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a question or need assistance? We're here to help! Reach out to
            us through any of the channels below.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="relative h-52 px-6 flex flex-col items-center justify-center text-center border rounded-lg group hover:shadow-lg transition-all"
              style={{
                backgroundColor: info.accent + "10",
                borderColor: info.accent + "30",
              }}
            >
              <div
                className="absolute -top-5 text-white size-12 flex items-center justify-center rounded-md group-hover:scale-110 transition"
                style={{ backgroundColor: info.accent }}
              >
                <info.icon size={24} />
              </div>
              <h3 className="text-slate-800 font-medium mt-4 text-lg">
                {info.title}
              </h3>
              <p className="text-slate-700 font-medium mt-2">{info.detail}</p>
              <p className="text-sm text-slate-600 mt-1">{info.subdetail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & FAQ Section */}
      <div className="max-w-6xl mx-auto my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-emerald-600 mb-3">
                  <Send className="mx-auto" size={48} />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-emerald-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-emerald-700 font-medium">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent resize-none bg-slate-50 focus:bg-white transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-slate-800 hover:-translate-y-0.5 shadow-md hover:shadow-lg active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Quick Answers
              </h2>

              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-emerald-500 mt-1">
                        <faq.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-800 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-slate-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-slate-900 rounded-xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold tracking-tight mb-3">
                Need Immediate Help?
              </h3>
              <p className="text-slate-300 mb-6 font-medium">
                Check out our Help Center for instant answers to common
                questions, or contact our support team directly.
              </p>
              <button className="bg-white text-slate-900 px-6 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-md active:scale-95 transition-all">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map or Additional Section */}
      <div className="max-w-6xl mx-auto my-20">
        <div className="bg-slate-100 rounded-2xl p-8 sm:p-16">
          <Title
            visibleButton={false}
            title="We're Here for You"
            description="Whether you have a question about products, orders, or need technical support, our dedicated team is ready to assist you."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-500 text-sm font-medium">Average Response Time</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-500 mt-1">2 hours</p>
            </div>
            <div className="bg-white px-6 py-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-500 text-sm font-medium">Customer Satisfaction</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-500 mt-1">98%</p>
            </div>
            <div className="bg-white px-6 py-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-500 text-sm font-medium">Support Tickets Resolved</p>
              <p className="text-2xl font-bold tracking-tight text-emerald-500 mt-1">10K+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
