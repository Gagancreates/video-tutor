"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Play, Sparkles, Brain, Zap, Users, BookOpen, TrendingUp, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import VideoGenerator from "@/components/video-generator"

export default function Home() {
  return (
    <div 
      className="min-h-screen relative overflow-hidden font-inter bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/newbg.png')",
      }}
    >
      {/* No overlays here - just the pure background image */}

      <header className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <div className="relative group">
            <div className="size-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/30">
              <Brain className="text-white h-6 w-6" />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 blur-md opacity-50 -z-10 transition-all duration-300 group-hover:opacity-70 group-hover:blur-lg" />
          </div>
          <span className="font-bold text-3xl text-white tracking-tight">EduTutor</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex items-center gap-10"
        >
          <Link href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">
            Features
          </Link>
          <Link href="#transform" className="text-gray-300 hover:text-white font-medium transition-colors">
            Transform
          </Link>
          <Link href="#impact" className="text-gray-300 hover:text-white font-medium transition-colors">
            Impact
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex items-center gap-4"
        >
          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-6 shadow-lg shadow-blue-600/25 border border-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30">
            Get Started
          </Button>
        </motion.div>
      </header>

      <main className="relative z-10">
        <>
          {/* Hero Section - Adjusted to fit screen properly */}
          <section className="container mx-auto px-6 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Revolutionizing Education with AI</span>
              </motion.div>

              <h1 className="font-medium text-5xl md:text-7xl lg:text-7xl text-white mb-8 leading-tight tracking-tight relative aesthetic-text">
                <span className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl -z-10"></span>
                Your Personal{" "}
                <span className="bg-clip-text text-transparent drop-shadow-sm animate-text-shimmer ai-tutor-text inline-block">
                  AI Video Tutor
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide aesthetic-text">
                Transform your learning experience with AI-powered video lessons tailored just for you. 
                Master any subject with personalized, engaging visual content.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl h-16 px-10 text-lg font-semibold shadow-2xl shadow-blue-600/25 border border-blue-500/20 group transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 relative overflow-hidden"
                  onClick={() => window.location.href = '/learn'}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-text-shimmer"></span>
                  <span className="aesthetic-text">Start Learning Now</span>
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl h-16 px-10 text-lg border border-gray-700 backdrop-blur-sm transition-all duration-300 aesthetic-text"
                  onClick={() => window.location.href = '#demo'}
                >
                  <Play className="mr-3 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Scroll indicator */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1.2, duration: 0.8 }}
                className="hidden md:flex flex-col items-center mt-4 gap-2"
              >
                <span className="text-gray-500 text-sm">Scroll to explore</span>
                <div className="h-12 w-6 border border-gray-700 rounded-full flex items-start justify-center p-1.5">
                  <motion.div 
                    className="h-2 w-2 bg-blue-400 rounded-full"
                    animate={{ 
                      y: [0, 16, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Video Generator Section - moved outside initial viewport */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="mt-40 relative"
              id="video-generator"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5 -z-10 rounded-3xl blur-xl" />
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="p-8 md:p-12">
                  <VideoGenerator />
                </div>
              </div>
            </motion.div>

            {/* Demo Video Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-24 relative"
              id="demo"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-sm overflow-hidden">
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Watch How It Works</h3>
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                    <div className="relative size-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
            >
              {[
                { number: "10K+", label: "Videos Created" },
                { number: "50K+", label: "Students Reached" },
                { number: "95%", label: "Engagement Rate" },
                { number: "30s", label: "Average Creation Time" },
              ].map((stat, index) => (
                <div key={index} className="text-center relative group">
                  <div className="absolute inset-0 bg-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </section>

          {/* Transform Education Section */}
          <section id="transform" className="container mx-auto px-6 py-28">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 [text-shadow:0_0_25px_rgba(79,70,229,0.15)] relative">
                <span className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl -z-10"></span>
                Transforming Education,{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                  One Video at a Time
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
                From traditional textbooks to immersive visual experiences. See how EduTutor is revolutionizing the
                way we learn and teach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="space-y-10"
              >
                {[
                  {
                    icon: BookOpen,
                    title: "From Static to Dynamic",
                    description:
                      "Transform boring textbook concepts into engaging visual narratives that students actually want to watch.",
                  },
                  {
                    icon: Brain,
                    title: "AI-Powered Personalization",
                    description:
                      "Every video is uniquely crafted to match the learning style and pace of your students.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Measurable Impact",
                    description:
                      "See 3x higher engagement rates and 40% better retention compared to traditional methods.",
                  },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex gap-5 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="size-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center backdrop-blur-sm group-hover:border-blue-500/40 transition-all duration-300">
                        <item.icon className="h-7 w-7 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 shadow-2xl overflow-hidden group hover:border-gray-700 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="flex gap-2">
                        <div className="size-3 rounded-full bg-red-500" />
                        <div className="size-3 rounded-full bg-yellow-500" />
                        <div className="size-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-gray-400 text-sm">EduTutor Studio</span>
                    </div>
                    <div className="space-y-5">
                      <div className="h-4 bg-gradient-to-r from-blue-500 to-transparent rounded-full w-3/4" />
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-transparent rounded-full w-1/2" />
                      <div className="h-4 bg-gradient-to-r from-cyan-500 to-transparent rounded-full w-2/3" />
                      <div className="mt-10 aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20 flex items-center justify-center overflow-hidden group-hover:border-blue-500/30 transition-all duration-300">
                        <div className="relative size-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="container mx-auto px-6 py-28 relative">
            {/* Decorative grid for this section */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24 relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
              <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 [text-shadow:0_0_25px_rgba(79,70,229,0.15)] relative">
                <span className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl -z-10"></span>
                Powered by Next-Gen AI
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto tracking-wide">
                Every feature designed to make education more engaging, accessible, and effective.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: Zap,
                  title: "Lightning Fast Generation",
                  description:
                    "Create professional educational videos in under 30 seconds with our advanced AI pipeline.",
                  gradient: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Brain,
                  title: "Intelligent Animations",
                  description:
                    "AI analyzes your topic and creates custom p5.js animations that perfectly illustrate concepts.",
                  gradient: "from-blue-500 to-purple-500",
                },
                {
                  icon: Users,
                  title: "Natural Voice Synthesis",
                  description:
                    "Human-like narration that adapts tone and pace to match the complexity of your content.",
                  gradient: "from-green-500 to-cyan-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-10 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-500 h-full">
                    <div
                      className={`size-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-8 group-hover:shadow-lg transition-all duration-300 relative`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                      <feature.icon className="h-8 w-8 text-white relative z-10" />
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    
                    <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Link href="#" className="text-blue-400 flex items-center text-sm font-medium hover:text-blue-300 transition-colors">
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="container mx-auto px-6 py-28 relative">
            {/* Decorative background for testimonials */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.05),transparent_50%)] opacity-70" />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20 relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
              <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 [text-shadow:0_0_25px_rgba(79,70,229,0.15)] relative">
                <span className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl -z-10"></span>
                Trusted by Educators <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">Worldwide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto tracking-wide">
                Hear what teachers and institutions are saying about EduTutor.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  quote: "EduTutor has transformed how I teach complex physics concepts. Students are more engaged than ever.",
                  author: "Dr. Emily Chen",
                  role: "Physics Professor, MIT",
                  gradient: "from-blue-500/10 to-purple-500/10"
                },
                {
                  quote: "We've seen a 40% improvement in student comprehension after integrating EduTutor videos into our curriculum.",
                  author: "Michael Rodriguez",
                  role: "Principal, Lincoln High School",
                  gradient: "from-cyan-500/10 to-blue-500/10"
                },
                {
                  quote: "The ability to create custom educational content in seconds has revolutionized our online learning platform.",
                  author: "Sarah Johnson",
                  role: "Director of E-Learning, Coursera",
                  gradient: "from-purple-500/10 to-pink-500/10"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-xl opacity-30 -z-10 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-3xl p-8 border border-gray-800 backdrop-blur-sm h-full hover:border-gray-700 transition-all duration-300">
                    <div className="text-3xl text-blue-400 mb-4">"</div>
                    <p className="text-gray-300 mb-8 leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white font-bold">
                        {testimonial.author[0]}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.author}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-6 py-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-12 md:p-24 text-center border border-blue-500/20 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10" />
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 size-96 bg-blue-600/15 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 size-96 bg-purple-600/15 rounded-full blur-3xl -z-10" />
              
              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              <h2 className="font-bold text-4xl md:text-6xl text-white mb-8 relative [text-shadow:0_0_25px_rgba(79,70,229,0.2)]">
                <span className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl -z-10"></span>
                Ready for Personalized Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative tracking-wide">
                Join thousands of students who are mastering subjects faster with personalized AI video tutorials.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl h-16 px-12 text-lg font-semibold shadow-2xl shadow-blue-600/25 border border-blue-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/30 group relative">
                Start Learning Now
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </section>
        </>
      </main>

      <footer className="relative z-10 container mx-auto px-6 py-16 border-t border-gray-800">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="text-white h-5 w-5" />
              </div>
              <span className="font-bold text-xl text-white">EduTutor</span>
            </div>
            <p className="text-gray-400 mb-6">Transforming education with AI-powered video generation and animation.</p>
            <div className="flex items-center gap-4">
              <Link href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 EduTutor. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
