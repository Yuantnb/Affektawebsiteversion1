import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { DynamicBackground } from './DynamicBackground';

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Particle System */}
      <DynamicBackground />

      {/* Main Content - Centered Slogan */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Main Slogan */}
          <h1 className="mb-12 px-4 text-center">
            <motion.span
              className="block text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Autonomous Intelligence
            </motion.span>
            <motion.div
              className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% auto',
                }}
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Made Safe
              </motion.span>
            </motion.div>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed"
          >
            We provide Advanced AI solutions mastering unforeseeable situations in safety critical operations domains
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white hover:text-white transition-colors cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs uppercase tracking-widest text-white">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="h-6 w-6 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}