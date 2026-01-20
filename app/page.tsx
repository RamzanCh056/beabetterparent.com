'use client';

import Image from "next/image";
import Header from "./components/Header";
import PlanButton from "./components/PlanButton";
import { useEffect, useState } from "react";

function SnowAnimation() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number; opacity: number }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      size: 8 + Math.random() * 12,
      opacity: 0.4 + Math.random() * 0.6,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 text-white animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity,
            filter: 'blur(0.5px)',
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <SnowAnimation />
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
        <Image
            src="https://images.pexels.com/photos/3820059/pexels-photo-3820059.jpeg?cs=srgb&dl=pexels-olly-3820059.jpg&fm=jpg"
            alt="Happy family with children playing"
            fill
            className="object-cover"
          priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/10 via-blue-50/5 to-cyan-50/10"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="flex items-center justify-start min-h-[80vh]">
            {/* Main Content */}
            <div className="space-y-6 animate-fadeInUp text-left max-w-2xl">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-1.5 text-xs font-semibold text-white animate-scaleIn">
                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                Your Partner in Parenting
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fadeInUp" style={{ animationDelay: '0.1s', textShadow: '0 3px 10px rgba(0,0,0,0.4), 0 0 30px rgba(0,0,0,0.2)' }}>
                Parenting is easier with a{" "}
                <span className="text-yellow-300" style={{ textShadow: '0 3px 10px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,0,0.3)' }}>helping hand.</span>
          </h1>
              
              {/* Subheadline */}
              <p className="text-base md:text-lg text-white leading-relaxed max-w-xl animate-fadeInUp font-semibold" style={{ animationDelay: '0.2s', textShadow: '0 2px 8px rgba(0,0,0,0.3), 0 0 20px rgba(0,0,0,0.2)' }}>
                Find peace, confidence and cooperation with Be A Better Parent – Your partner in raising happy, healthy children.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fadeInUp justify-start" style={{ animationDelay: '0.3s' }}>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Get Started Free
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Watch Introduction
                </button>
              </div>
              
              {/* App Store Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-start">
                <a href="https://apps.apple.com/in/app/be-a-better-parent/id6752773560" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.beabeeterparent.official&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-2 relative z-10 justify-start">
                <div className="flex gap-1">
                  {['A', 'B', 'C', 'D'].map((letter, i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center text-xs font-medium text-gray-700 border-2 border-white shadow-sm">
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 relative z-10">
                  <span className="text-sm font-semibold text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>50,000+ happy parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parenting Support Section */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Parent Counseling
            </span>
          </div>
          <h2 className="mb-3 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Professional{" "}
            <span className="text-orange-500">Parenting Support</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600">
            Connect with expert counselors who understand your parenting journey and help you build stronger family relationships.
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Expert Counseling",
                description: "One-on-one guidance from parenting experts",
                image: "https://images.pexels.com/photos/3820059/pexels-photo-3820059.jpeg?cs=srgb&dl=pexels-olly-3820059.jpg&fm=jpg",
              },
              {
                title: "Stronger Bonds",
                description: "Build lasting connections with your children",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=90",
              },
              {
                title: "Family Support",
                description: "Comprehensive support for the whole family",
                image: "https://plus.unsplash.com/premium_photo-1661326255490-ce5c06eca4c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Features
            </span>
          </div>
          <h2 className="mb-3 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need,{" "}
            <span className="text-orange-500">In One App</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600">
            Explore podcasts, books, videos, and track your parenting journey - all designed to help you become a calmer, more confident parent.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-purple-600 flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                ),
                title: "Expert Podcasts",
                description: "Learn on the go with expert advice",
              },
              {
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-green-500 flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                ),
                title: "Curated Books",
                description: "Parenting guides for every stage",
              },
              {
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-orange-500 flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                ),
                title: "Video Library",
                description: "Visual guidance and tutorials",
              },
              {
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-purple-500 flex items-center justify-center">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                ),
                title: "Progress Tracking",
                description: "See your growth as a parent",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="transform hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mt-4 mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Metrics Section */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {[
              {
                icon: (
                  <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                ),
                value: "50K+",
                label: "Happy Parents",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                ),
                value: "500+",
                label: "Expert Sessions",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                ),
                value: "100+",
                label: "Parenting Books",
              },
              {
                icon: (
                  <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                    <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                ),
                value: "4.9",
                label: "App Store Rating",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              How It Works
            </span>
          </div>
          <h2 className="mb-3 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Simple steps to{" "}
            <span className="text-purple-600">better parenting</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600">
            Getting started is easy. Follow these four simple steps and begin your journey to calmer, more confident parenting today.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-purple-600 flex items-center justify-center animate-bounce">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </div>
                ),
                title: "Download the App",
                description: "Get started in seconds by downloading Be A Better Parent from the App Store or Google Play.",
              },
              {
                step: "02",
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-green-500 flex items-center justify-center animate-pulse">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                ),
                title: "Ask a Question",
                description: "Type any parenting question or concern. Our AI understands the context and nuances of your situation.",
              },
              {
                step: "03",
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-orange-500 flex items-center justify-center border-2 border-orange-300 animate-pulse">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                ),
                title: "Get Answers & Tips",
                description: "Receive personalized, expert-backed advice instantly. Save tips and track your parenting progress.",
              },
              {
                step: "04",
                icon: (
                  <div className="h-16 w-16 rounded-lg bg-pink-500 flex items-center justify-center animate-bounce">
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                ),
                title: "Get Tip One-to-One Call with Celia",
                description: "Schedule a personal consultation with Celia Kibler for expert guidance tailored to your family's unique needs.",
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-2 -left-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                  Step {item.step}
                </div>
                <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-800">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Available on iOS & Android
              </div>
              
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Download Be A Better Parent{" "}
                <span className="text-orange-500">Now!</span>
              </h2>
              
              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                Join thousands of parents who are discovering the joy of calm, confident parenting. Your family deserves it.
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">•</span>
                <span className="text-sm text-gray-600">10K+ Reviews</span>
              </div>
              
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/in/app/be-a-better-parent/id6752773560" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.beabeeterparent.official&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-900 transition-colors cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">50K+</div>
                    <div className="text-xs text-gray-600">Happy Parents</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">4.9</div>
                    <div className="text-xs text-gray-600">App Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Family Photo with Overlays */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/646d96c0ada53346eb6b704f/0c2e44f7-21cd-436d-950b-fffd8c9ec9f2/Parental+pressure.jpg"
                  alt="Parental pressure"
                  fill
                  className="object-cover"
                  unoptimized
                />
                
                {/* Overlay Notifications */}
                <div className="absolute top-4 left-4 bg-green-100 rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                  <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">New tip available! Just now</span>
                </div>
                
                <div className="absolute top-20 left-4 bg-orange-100 rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                  <svg className="h-4 w-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">Family first You're doing great!</span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-purple-100 rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg">
                  <svg className="h-4 w-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">Get the app! Free download</span>
                </div>
                
                {/* Interactive Icons */}
                <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Testimonials
            </span>
          </div>
          <h2 className="mb-3 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Real Parents,{" "}
            <span className="text-purple-600">Real Results</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600">
            Watch how Celia's Family Coaching has transformed families and helped parents build stronger bonds with their children.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* YouTube Video Testimonial */}
            <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video shadow-2xl hover:scale-105 transition-transform duration-300 animate-fadeIn">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/l6ofI8jy_es"
                title="Celia Kibler Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-red-600 text-white px-4 py-2 rounded text-xs font-bold uppercase">
                  Our Success Stories
                </div>
              </div>
            </div>
            
            {/* Recommendation Card */}
            <div className="space-y-4 animate-slideInRight">
              <div className="rounded-xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Justin Cappon Recommends Celia Kibler for{" "}
                  <span className="text-purple-600">Blended Families</span>
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how Celia's proven strategies have helped countless families navigate parenting challenges with confidence and compassion.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="rounded-lg bg-yellow-50 p-3 text-center hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-center text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <div className="text-xs font-semibold text-gray-900">5-Star Rating</div>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3 text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-xs font-semibold text-gray-600">Families Helped</div>
                  </div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 border-l-4 border-purple-600">
                  <p className="text-sm text-gray-700 italic">
                    "Celia's coaching transformed our blended family dynamics. We finally have peace and connection at home."
                  </p>
                </div>
              </div>
              <button className="w-full rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-yellow-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                5-Star Reviews
              </button>
            </div>
          </div>
          
          {/* Written Reviews */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Mother of 2",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
                text: "This app has completely transformed how I parent. The instant advice feature is a lifesaver, and the coaching has helped me become more confident and calm.",
              },
              {
                name: "Michael Chen",
                role: "Father of 3",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
                text: "As a single parent, I felt overwhelmed and unsure. Be A Better Parent gave me the tools and support I needed. The personalized programs are fantastic.",
              },
              {
                name: "Emily Rodriguez",
                role: "Mother of 1",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
                text: "The unlimited questions feature is amazing! I can ask anything at any time and get expert advice. It's like having a parenting coach in my pocket.",
              },
              {
                name: "David Thompson",
                role: "Father of 2",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
                text: "Celia's one-on-one calls are game-changers. She helped me understand my children better and build stronger relationships. Worth every penny!",
              },
              {
                name: "Jessica Martinez",
                role: "Mother of 3",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
                text: "The books by Celia Kibler are incredible resources. Combined with the app, I feel equipped to handle any parenting challenge that comes my way.",
              },
              {
                name: "Robert Kim",
                role: "Father of 1",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
                text: "Best parenting investment I've made. The community support and expert guidance have made such a positive impact on our family life.",
              },
            ].map((review, index) => (
              <div key={index} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-3">
            <Image
                    src={review.image}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-purple-200"
                    unoptimized
                  />
                  <div>
                    <div className="text-sm font-bold text-gray-900">{review.name}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 text-center">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              Pricing
            </span>
          </div>
          <h2 className="mb-3 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your Plan
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-gray-600">
            Select the perfect plan for your parenting journey. All plans include access to our community and resources.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Member",
                period: "MONTHLY",
                price: "$9.99",
                unit: "/mo",
                billing: "Billed monthly",
                planId: "member_monthly",
                features: [
                  "Access to all basic features",
                  "Daily parenting tips",
                  "Community support",
                ],
                borderColor: "border-purple-200",
                bgColor: "bg-white",
              },
              {
                title: "Member",
                period: "YEARLY",
                price: "$99",
                unit: "/yr",
                billing: "Save $20 per year",
                planId: "member_yearly",
                features: [
                  "Everything in Monthly",
                  "Priority support",
                  "Exclusive yearly content",
                ],
                borderColor: "border-purple-200",
                bgColor: "bg-white",
              },
              {
                title: "PRO",
                period: "MONTHLY",
                price: "$47",
                unit: "/mo",
                billing: "Billed monthly",
                planId: "pro_monthly",
                features: [
                  "Everything in Member",
                  "Unlimited questions & answers",
                  "1-on-1 expert coaching",
                  "Premium content library",
                  "Priority support 24/7",
                  "Personalized parenting plans",
                ],
                borderColor: "border-yellow-300",
                bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
              },
              {
                title: "PRO",
                period: "YEARLY",
                price: "$470",
                unit: "/yr",
                billing: "Save $94 per year",
                planId: "pro_yearly",
                features: [
                  "Everything in PRO Monthly",
                  "Unlimited questions & answers",
                  "Unlimited coaching sessions",
                  "Early access to new features",
                  "Advanced analytics & insights",
                ],
                borderColor: "border-yellow-400",
                bgColor: "bg-gradient-to-br from-yellow-50 to-amber-50",
                badge: "Best Value",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl ${plan.bgColor} border-2 ${plan.borderColor} p-6 shadow-lg`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-1 text-xs font-bold text-white shadow-md">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.title}</h3>
                <p className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">{plan.period}</p>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.unit}</span>
                </div>
                <p className="text-xs text-gray-600 mb-5">{plan.billing}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs leading-relaxed text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <PlanButton
                  planTitle={plan.title}
                  planPeriod={plan.period}
                  price={plan.price}
                  planId={plan.planId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Love Section */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="https://img.freepik.com/premium-photo/sharing-love-shot-young-family-relaxing-together-home_590464-5018.jpg"
                  alt="Happy family relaxing together at home"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-700">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Sharing Love
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Building Stronger{" "}
                <span className="text-purple-600">Family Bonds</span>
              </h2>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Every moment spent together is an opportunity to create lasting memories and strengthen the bonds that make your family unique. Our app helps you make the most of these precious moments.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Join thousands of families who are discovering new ways to connect, communicate, and grow together through our comprehensive parenting resources and support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors cursor-pointer">
                  Start Your Journey
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Top Section with Logo and Description */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold">Be A Better Parent</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Empowering parents with the tools, knowledge, and support they need to raise happy, healthy children.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
          </div>
          
          {/* Resources and Legal */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">Download App</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/in/app/be-a-better-parent/id6752773560" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-black hover:bg-gray-100 transition-colors hover:scale-105 cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.beabeeterparent.official&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-white px-5 py-3 text-black hover:bg-gray-100 transition-colors hover:scale-105 cursor-pointer">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Media and Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-4">
                <a href="https://www.facebook.com/beabetterparentdotcom" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="Facebook">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/beabetterparentdotcom" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="Instagram">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@beabetterparent.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="TikTok">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.18 6.18 0 0 0-.1-.83 5.93 5.93 0 0 0-5.83-4.88 5.93 5.93 0 0 0-5.93 5.93v.01a5.93 5.93 0 0 0 5.93 5.93 5.93 5.93 0 0 0 4.88-2.33v4.5a8.22 8.22 0 0 1-4.88 1.6 8.2 8.2 0 0 1-8.2-8.2 8.2 8.2 0 0 1 8.2-8.2 8.2 8.2 0 0 1 6.3 2.8v-3.1a4.85 4.85 0 0 1 4.83-4.83 4.83 4.83 0 0 1 4.83 4.83v.01a4.83 4.83 0 0 1-4.83 4.83z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@beabetterparentdotcom" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="YouTube">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/celiakibler/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="LinkedIn">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://www.skool.com/beabetterparent/about" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="Online Community">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </a>
                <a href="mailto:hello@beabetterparent.com" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-colors hover:scale-110 cursor-pointer" aria-label="Email">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">
                © 2026 Be A Better Parent. All rights reserved.
              </p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Made with ❤️ for parents everywhere
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
