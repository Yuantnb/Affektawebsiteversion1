import { HeroSection } from '../components/HeroSection';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Brain, Shield, Zap, Satellite, Ship, Building2, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import nasaLogo from 'figma:asset/48cd9513c05ba6d64a325decfb22d8f92405a48f.png';
import iCorpsLogo from 'figma:asset/05cde95de9a47c905de30ee81fdf453436cd4d66.png';

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <HeroSection />

      {/* Core Value Proposition - Circuit Board Theme */}
      <section className="relative py-40 overflow-hidden bg-[#0a0e1a]">
        {/* Tech circuit grid background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0d1525] to-[#0a0e1a]" />
          
          {/* Animated circuit lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {/* Horizontal lines */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={`${(i + 1) * 16.666}%`}
                x2="100%"
                y2={`${(i + 1) * 16.666}%`}
                stroke="#0071e3"
                strokeWidth="1"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatDelay: 5 }}
              />
            ))}
            {/* Vertical lines */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={`${(i + 1) * 16.666}%`}
                y1="0"
                x2={`${(i + 1) * 16.666}%`}
                y2="100%"
                stroke="#0071e3"
                strokeWidth="1"
                strokeDasharray="10,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: i * 0.15, repeat: Infinity, repeatDelay: 5 }}
              />
            ))}
          </svg>

          {/* Circuit nodes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-3 h-3 rounded-full bg-primary"
              style={{
                left: `${10 + (i * 6.5)}%`,
                top: `${20 + ((i * 7) % 60)}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Glowing tech overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 max-w-4xl mx-auto text-white">
              When the unexpected happens,
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                our AI responds
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We develop advanced large language models that understand context and reason through novel situations.
            </p>
          </motion.div>

          {/* Technology Pillars */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Brain, 
                label: 'LLM Deep Reasoning',
                description: 'Advanced language models that understand context and reason through novel situations'
              },
              { 
                icon: Shield, 
                label: 'Formal Methods',
                description: 'Mathematically proven safety guarantees for mission-critical decisions'
              },
              { 
                icon: Zap, 
                label: 'Bayesian Inference',
                description: 'Probabilistic reasoning under uncertainty with real-time adaptation'
              }
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl border border-primary/30 bg-[#0d1525]/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/20">
                  <tech.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl mb-3 text-white">{tech.label}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{tech.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NASA Partnership - Deep Space Theme */}
      <section className="relative py-40 overflow-hidden bg-[#000000]">
        {/* Space-themed animated background */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-[#001d3d] to-[#000814]"/>
          
          {/* Animated stars */}
          <div className="absolute inset-0">
            {[...Array(100)].map((_, i) => {
              const size = Math.random() * 2 + 1;
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              const duration = Math.random() * 3 + 2;
              const delay = Math.random() * 2;
              
              return (
                <motion.div
                  key={`star-${i}`}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: size,
                    height: size,
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>

          {/* Orbital paths */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <motion.ellipse
              cx="50%"
              cy="50%"
              rx="45%"
              ry="30%"
              stroke="#0071e3"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.ellipse
              cx="50%"
              cy="50%"
              rx="35%"
              ry="20%"
              stroke="#4dabf7"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>

          {/* Floating satellites */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`satellite-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 15}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Satellite className="w-6 h-6 text-primary/60" />
            </motion.div>
          ))}

          {/* Glowing nebula effect */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Gradient overlay for content readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* NASA Logo and Title */}
              <div className="flex items-center gap-6 mb-8">
                <motion.img 
                  src={nasaLogo} 
                  alt="NASA" 
                  className="h-16 sm:h-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                  }}
                />
                <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white">
                  Developed for
                  <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                    manned NASA Deep Space Missions
                  </span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                AFFEKTA is building autonomous decision-making systems for NASA's deep space missions 
                under STTR Phase I grant <span className="text-primary">T6.09-1000</span>.
              </p>
              <p className="text-lg text-gray-200 mb-10 leading-relaxed">
                Our technology enables life-critical habitats to operate independently when 
                Earth-based expert support is unavailable—a challenge that becomes reality 
                as humans venture deeper into space.
              </p>
              <Button
                size="lg"
                onClick={() => navigate('/about')}
                className="text-lg px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Our NASA Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* I-Corps Badge - Lower Right Corner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-8 right-8 flex flex-col items-end gap-3"
          >
            {/* Trusted Partner Button */}
            <Button
              onClick={() => navigate('/icorps')}
              variant="outline"
              className="group px-6 py-3 border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-primary text-sm">Trusted Partner</span>
              <ArrowRight className="ml-2 h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* I-Corps Logo */}
            <motion.button
              onClick={() => navigate('/icorps')}
              className="group relative px-6 py-4 rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-sm hover:border-primary/60 hover:from-primary/30 hover:to-purple-500/30 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={iCorpsLogo} 
                alt="NSF I-Corps - Selected 2025" 
                className="h-12 w-auto"
                style={{
                  mixBlendMode: 'screen',
                  filter: 'brightness(1.1) contrast(1.1)'
                }}
              />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-purple-500/0 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview - Data Mesh Theme */}
      <section className="relative py-40 overflow-hidden bg-[#0f1419]">
        {/* Animated mesh background */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419]" />
          
          {/* Animated data points mesh */}
          <svg className="absolute inset-0 w-full h-full opacity-15">
            {/* Create mesh lines */}
            {[...Array(8)].map((_, row) => 
              [...Array(12)].map((_, col) => {
                const x = (col + 1) * 8.333;
                const y = (row + 1) * 12.5;
                return (
                  <motion.circle
                    key={`mesh-${row}-${col}`}
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="2"
                    fill="#0071e3"
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                      r: [2, 3, 2],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: (row + col) * 0.1,
                    }}
                  />
                );
              })
            )}
            {/* Connection lines */}
            {[...Array(20)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <motion.line
                  key={`conn-${i}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="#0071e3"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            })}
          </svg>

          {/* Rotating gradient orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.15) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 text-white">
              Safety-critical systems
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                across industries
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When unforeseen events pose system risk
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                label: 'Aerospace',
                image: 'https://images.unsplash.com/photo-1646073981029-960badede3f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBhaXJjcmFmdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxODkxNjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                label: 'Oil & Gas',
                image: 'https://images.unsplash.com/photo-1600221574280-9bcd5d108100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBnYXMlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjE4OTE2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                label: 'Healthcare',
                image: 'https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNzg3ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              { 
                label: 'Infrastructure',
                image: 'https://images.unsplash.com/photo-1725781535657-29d825bc7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjE4OTE2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              }
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                {/* Background Image */}
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 transition-opacity duration-300 group-hover:from-black/80 group-hover:via-black/40" />
                
                {/* Border & Glow Effect */}
                <div className="absolute inset-0 border border-primary/30 rounded-2xl transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-xl group-hover:shadow-primary/20" />
                
                {/* Content */}
                <div className="relative h-full flex items-end p-6">
                  <h3 className="text-2xl text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {industry.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('/industries')}
              variant="outline"
              className="text-lg px-8 py-6 border-primary/40 text-white hover:border-primary/60 hover:bg-primary/10 transition-all"
            >
              Explore All Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA - Quantum Grid Theme */}
      <section className="relative py-40 overflow-hidden bg-[#08090d]">
        {/* Quantum-inspired grid */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#08090d] via-[#0d0f17] to-[#08090d]" />
          
          {/* Glowing grid */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 113, 227, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 113, 227, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />

          {/* Quantum particles */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`quantum-${i}`}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Floating gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0, 113, 227, 0.2) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-10 text-white">
              Ready to master the
              <span className="block mt-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                unpredictable?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
              Join NASA and forward-thinking organizations deploying AI systems 
              that turn uncertainty into opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/engagement')}
                className="text-lg px-10 py-7 shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/technology')}
                className="text-lg px-10 py-7 border-primary/40 text-white hover:border-primary/60 hover:bg-primary/10 transition-all"
              >
                Explore Technology
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}