import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Wallet, Users, Zap, Globe, Twitter, MessageCircle, Send, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const MartinCryptoSite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Built on Solana for instant transactions and minimal fees"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Governed by holders, shaped by the community"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Accessible to everyone, everywhere, anytime"
    }
  ];

  const roadmapItems = [
    { phase: "Phase 1", title: "Launch", status: "completed", items: ["Token Creation", "Website Launch", "Community Building"] },
    { phase: "Phase 2", title: "Growth", status: "active", items: ["DEX Listings", "Marketing Campaign", "Partnerships"] },
    { phase: "Phase 3", title: "Expansion", status: "upcoming", items: ["CEX Listings", "NFT Collection", "DAO Governance"] },
    { phase: "Phase 4", title: "Evolution", status: "upcoming", items: ["Cross-chain Bridge", "DeFi Integration", "Global Adoption"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-green-900/20" />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            right: `${-mousePosition.x * 0.03}px`,
            bottom: `${-mousePosition.y * 0.03}px`,
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-xl">🦎</span>
              </div>
            </div>
            <span className="text-2xl font-bold">MARTIN</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#tokenomics" className="hover:text-green-400 transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-green-400 transition-colors">Roadmap</a>
            <a href="#community" className="hover:text-green-400 transition-colors">Community</a>
            <button className="bg-gradient-to-r from-green-500 to-purple-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block hover:text-green-400 transition-colors">About</a>
              <a href="#tokenomics" className="block hover:text-green-400 transition-colors">Tokenomics</a>
              <a href="#roadmap" className="block hover:text-green-400 transition-colors">Roadmap</a>
              <a href="#community" className="block hover:text-green-400 transition-colors">Community</a>
              <button className="w-full bg-gradient-to-r from-green-500 to-purple-600 px-6 py-2 rounded-full font-semibold">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm">Live on Solana</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-purple-600 bg-clip-text text-transparent">
              MARTIN
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            The friendliest gecko in the Solana ecosystem
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the revolution of community-driven finance with MARTIN, where speed meets sustainability on the fastest blockchain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-green-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all flex items-center gap-2">
              Buy $MARTIN
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all">
              Read Whitepaper
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { label: "Total Supply", value: "1B" },
              { label: "Holders", value: "10K+" },
              { label: "Market Cap", value: "$5M" },
              { label: "Transactions", value: "100K+" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Gecko */}
        <div 
          className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            transform: `translateY(${-50 + scrollY * 0.1}%)`,
          }}
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-400/20 to-purple-600/20 blur-3xl animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center text-[200px]">
              🦎
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why <span className="bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">MARTIN?</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-green-500/50 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-purple-600 p-0.5 mb-6">
                  <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>

                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 to-purple-600/0 ${hoveredCard === index ? 'from-green-500/10 to-purple-600/10' : ''} transition-all duration-300 pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">Tokenomics</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-purple-600/20 blur-3xl" />
              <div className="relative bg-black/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <h3 className="text-2xl font-bold mb-6">Distribution</h3>
                <div className="space-y-4">
                  {[
                    { label: "Community Rewards", value: "40%", color: "from-green-400 to-green-600" },
                    { label: "Liquidity Pool", value: "30%", color: "from-purple-400 to-purple-600" },
                    { label: "Development", value: "15%", color: "from-blue-400 to-blue-600" },
                    { label: "Marketing", value: "10%", color: "from-pink-400 to-pink-600" },
                    { label: "Team", value: "5%", color: "from-orange-400 to-orange-600" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.label}</span>
                        <span className="font-bold">{item.value}</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                          style={{ 
                            width: item.value,
                            transform: scrollY > 1000 ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left',
                            transitionDelay: `${i * 100}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/10 to-purple-600/10 rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-400" />
                  Total Supply
                </h4>
                <p className="text-3xl font-bold">1,000,000,000 $MARTIN</p>
              </div>

              <div className="bg-gradient-to-r from-purple-600/10 to-green-500/10 rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-2">Tax Structure</h4>
                <p className="text-gray-400">0% Buy Tax | 0% Sell Tax</p>
                <p className="text-sm text-gray-500 mt-2">True community ownership with no hidden fees</p>
              </div>

              <div className="bg-gradient-to-r from-green-500/10 to-purple-600/10 rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-bold mb-2">Contract</h4>
                <p className="text-sm font-mono text-gray-400 break-all">MARTxxx...xxx</p>
                <button className="mt-3 text-green-400 text-sm hover:underline">View on Solscan →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-purple-600 to-transparent" />

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all">
                      <div className="flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'justify-end' : ''}">
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'active' ? 'bg-purple-600/20 text-purple-400' :
                          'bg-gray-800 text-gray-400'
                        }`}>
                          {item.status === 'completed' ? '✓ Completed' : item.status === 'active' ? '● In Progress' : 'Upcoming'}
                        </span>
                        <h3 className="text-xl font-bold">{item.phase}</h3>
                      </div>
                      <h4 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">
                        {item.title}
                      </h4>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {item.items.map((subitem, i) => (
                          <li key={i} className="text-gray-400">{subitem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-purple-600 border-4 border-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the <span className="bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent">MARTIN</span> Family
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Be part of the fastest-growing community in the Solana ecosystem
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Twitter className="w-6 h-6" />, label: "Twitter", handle: "@MartinOnSol" },
              { icon: <MessageCircle className="w-6 h-6" />, label: "Discord", handle: "Join Server" },
              { icon: <Send className="w-6 h-6" />, label: "Telegram", handle: "@MartinCommunity" }
            ].map((social, i) => (
              <button
                key={i}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-purple-600 p-0.5 mx-auto mb-4">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    {social.icon}
                  </div>
                </div>
                <h3 className="font-bold mb-1">{social.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-green-400 transition-colors">{social.handle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-sm">🦎</span>
              </div>
            </div>
            <span className="font-bold">MARTIN</span>
            <span className="text-gray-500">© 2025</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Docs</a>
            <a href="#" className="hover:text-green-400 transition-colors">Audit</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MartinCryptoSite;