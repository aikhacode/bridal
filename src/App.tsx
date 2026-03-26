import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="serif text-2xl font-semibold tracking-tight italic">Rizkiaprilmakeup</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Portfolio', 'Services', 'Graduation', 'Bridal', 'Testimonials'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm">
              BOOK NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {['Portfolio', 'Services', 'Graduation', 'Bridal', 'Testimonials'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block text-base font-medium text-gray-600 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
            THE ETHEREAL ATELIER
          </span>
          <h1 className="serif text-5xl md:text-7xl leading-[1.1] mb-8">
            Timeless Beauty for Your <span className="italic-serif text-indigo-600">Most Precious</span> Moments
          </h1>
          <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
            Sidoarjo's premier editorial bridal and graduation artistry. We craft looks that celebrate your natural grace with an elevated, luxury touch.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
              Book a Consultation
            </button>
            <button className="bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=1000" 
              alt="Bridal Makeup" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[200px]"
          >
            <p className="serif text-lg font-medium italic mb-1">"Pure Artistry"</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Beyond the Depth</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Bridal Artistry",
      description: "Comprehensive wedding day looks that balance long-lasting coverage with a natural, radiant light.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Graduation Glamour",
      description: "Photogenic makeup that highlights your features for your milestone celebration and professional portraits.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Special Events",
      description: "High-fashion inspired looks for galas, photography sessions, or any evening when you want to shine.",
      image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="serif text-4xl mb-4">Our Artistry</h2>
          <p className="text-gray-500">
            Custom makeup services designed for those who seek editorial perfection and professional care in Sidoarjo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="serif text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-indigo-600 transition-colors">
                  Explore Service <ArrowRight size={14} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState('Bridal');
  const tabs = ['Bridal', 'Editorial', 'Graduation'];
  
  const images = [
    { src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800", size: "tall" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800", size: "wide" },
    { src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800", size: "square" },
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", size: "square" },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="serif text-5xl italic mb-8">The Gallery</h2>
          <div className="flex justify-center space-x-4">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  filter === tab 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Tall */}
          <div className="md:row-span-2">
            <div className="h-full rounded-3xl overflow-hidden shadow-lg">
              <img src={images[0].src} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          {/* Right Top - Wide */}
          <div className="md:col-span-2">
            <div className="aspect-[16/7] rounded-3xl overflow-hidden shadow-lg">
              <img src={images[1].src} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Bottom Two - Squares */}
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
            <img src={images[2].src} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-square">
            <img src={images[3].src} alt="Gallery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <span className="serif text-4xl text-gray-300 block mb-4">“</span>
              <h2 className="serif text-4xl mb-8 leading-tight">
                What our clients in Sidoarjo say about their Atelier experience.
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="border-l-2 border-indigo-100 pl-8">
                <p className="text-gray-500 italic mb-6 leading-relaxed">
                  "Rizki understood exactly the look I wanted for my wedding. I felt like myself but elevated. The makeup lasted all day even in the heat!"
                </p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Anisa Rahmawati</p>
                  <p className="text-xs text-gray-400">Bridal Client, Sidoarjo</p>
                </div>
              </div>

              <div className="border-l-2 border-indigo-100 pl-8">
                <p className="text-gray-500 italic mb-6 leading-relaxed">
                  "The best graduation makeup I've ever had. It looked so natural on camera but gave me that perfect glow. Highly recommended!"
                </p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Dian Sastro</p>
                  <p className="text-xs text-gray-400">Graduation Client, Surabaya</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=1000" 
                alt="Happy Client" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-gray-50">
              <h2 className="serif text-5xl mb-6">Begin Your Journey</h2>
              <p className="text-gray-500 mb-12 max-w-sm">
                Contact us to check availability for your date or to schedule a trial session at our Sidoarjo studio.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Location</p>
                    <p className="text-sm text-gray-600">Jl. Gajah Mada No. 24, Sidoarjo, East Java</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                    <p className="text-sm text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                    <p className="text-sm text-gray-600">hello@rizkiaprilmakeup.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 outline-none transition-all appearance-none bg-white">
                      <option>Bridal</option>
                      <option>Graduation</option>
                      <option>Editorial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell us about your event date and vision" className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 outline-none transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-8">
            <span className="serif text-lg font-semibold italic">Rizkiaprilmakeup Atelier</span>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">Instagram</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">WhatsApp</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">Portfolio</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
            © 2024 Rizkiaprilmakeup Atelier. Sidoarjo's Premier Bridal & Graduation Artistry.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
