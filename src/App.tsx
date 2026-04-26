/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import AdSenseBanner from './components/AdSenseBanner';
import Footer from './components/Footer';
import { MOCK_POSTS } from './data/posts';
import { PAGES_CONTENT } from './data/pages';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Zap, Radio, ChevronLeft, Calendar, User as UserIcon, Share2 } from 'lucide-react';
import CodeBlock from './components/CodeBlock';
import { Post } from './types';

export default function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [selectedPage, setSelectedPage] = useState<'about' | 'privacy' | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // ... rest of state/effects ...

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let currentCode: string[] = [];
    let isInCodeBlock = false;

    lines.forEach((line, i) => {
      if (line.startsWith('```')) {
        if (isInCodeBlock) {
          elements.push(<CodeBlock key={`code-${i}`} code={currentCode.join('\n')} />);
          currentCode = [];
          isInCodeBlock = false;
        } else {
          isInCodeBlock = true;
        }
        return;
      }

      if (isInCodeBlock) {
        currentCode.push(line);
        return;
      }

      // Headers
      if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-2xl font-serif text-editorial-ink mt-12 mb-6">{line.replace('### ', '')}</h3>);
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-3xl font-serif text-editorial-ink mt-16 mb-8 uppercase tracking-tighter">{line.replace('## ', '')}</h2>);
        return;
      }

      // YouTube Embed
      const ytMatch = line.match(/https?:\/\/(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
      if (ytMatch) {
        elements.push(
          <iframe 
            key={i}
            className="w-full aspect-video my-8"
            src={`https://www.youtube.com/embed/${ytMatch[2]}`}
            allowFullScreen
          />
        );
        return;
      }

      if (!line.trim()) {
        return;
      }

      // Bold and Links
      let processedLine: (string | React.ReactNode)[] = [line];

      // Bold - **text**
      processedLine = processedLine.flatMap(part => {
        if (typeof part !== 'string') return part;
        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return subParts.map((sub, si) => {
          const match = sub.match(/\*\*(.*?)\*\*/);
          return match ? <strong key={`bold-${i}-${si}`} className="font-bold text-editorial-ink">{match[1]}</strong> : sub;
        });
      });

      // Links - [Title](URL)
      processedLine = processedLine.flatMap(part => {
        if (typeof part !== 'string') return part;
        const subParts = part.split(/(\[.*?\]\(.*?\))/g);
        return subParts.map((sub, si) => {
          const match = sub.match(/\[(.*?)\]\((.*?)\)/);
          return match ? <a key={`link-${i}-${si}`} href={match[2]} target="_blank" className="text-editorial-accent font-bold hover:underline">{match[1]}</a> : sub;
        });
      });

      elements.push(<p key={i}>{processedLine}</p>);
    });

    return elements;
  };

  // ... (inside return statement, find the content rendering part)
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('post');
    if (postId) {
      const post = MOCK_POSTS.find(p => p.id === postId);
      if (post) setSelectedPost(post);
    }
  }, []);

  useEffect(() => {
    document.title = selectedPost ? `${selectedPost.title} | Droid_Core` : 'Droid_Core | Notícias Gaming';
  }, [selectedPost]);

  const handleShare = async (post: Post) => {
    const shareUrl = `${window.location.origin}/?post=${post.id}`;
    if (navigator.share) {
      try { await navigator.share({ title: post.title, text: post.excerpt, url: shareUrl }); } 
      catch (err) { console.log('Erro ao compartilhar:', err); }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copiado!');
    }
  };

  const filteredPosts = MOCK_POSTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const featuredPost = filteredPosts.find(p => p.isFeatured) || filteredPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== featuredPost?.id);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setSelectedPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (path: 'home' | 'about' | 'privacy') => {
    setSelectedPost(null);
    setSelectedPage(path === 'home' ? null : path as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-editorial-bg font-sans selection:bg-editorial-accent selection:text-white transition-colors duration-300">
      <Navbar 
        onSearch={setSearchQuery} 
        isDark={isDark} 
        toggleDark={() => setIsDark(!isDark)}
        onNavigate={navigateTo}
      />
      
      <main className="pt-16">
        <div className="flex justify-center bg-editorial-bg py-2 transition-colors">
          <AdSenseBanner />
        </div>
        <AnimatePresence mode="wait">
          {selectedPage ? (
            <motion.div
              key="page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
              <button 
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2 text-[10px] font-bold text-editorial-ink/40 hover:text-editorial-ink transition-colors mb-16 uppercase tracking-[0.2em]"
              >
                <ChevronLeft size={14} /> Retornar
              </button>

              <h1 className="text-5xl md:text-7xl font-serif text-editorial-ink leading-[0.95] mb-12 tracking-tighter uppercase">
                {PAGES_CONTENT[selectedPage].title}
              </h1>

              <div className="max-w-2xl mx-auto font-sans text-editorial-ink/90 leading-loose space-y-8 text-lg whitespace-pre-line border-t border-editorial-line pt-12">
                {renderContent(PAGES_CONTENT[selectedPage].content)}
              </div>
            </motion.div>
          ) : !selectedPost ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {featuredPost && (
                <div onClick={() => handlePostClick(featuredPost)} className="cursor-pointer">
                  <Hero post={featuredPost} />
                </div>
              )}

              {/* Breaking News Bar */}
              <div className="bg-editorial-ink text-white py-4 overflow-hidden border-b border-editorial-line">
                <div className="editorial-container flex items-center justify-between">
                  <div className="flex items-center gap-10">
                    <div className="flex items-center gap-3 text-editorial-accent font-black uppercase text-[9px] tracking-[0.3em]">
                      <Radio size={12} className="animate-pulse" />
                      <span>LIVE DISPATCH</span>
                    </div>
                    <div className="h-4 w-px bg-white/10" />
                    <div className="flex gap-10 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {['Yuzu Archive', 'Qualcomm Benchmarks', 'Vulkan Support List'].map(item => (
                        <span key={item} className="hover:text-editorial-accent cursor-pointer transition-colors">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block text-[9px] font-black uppercase tracking-[0.4em] opacity-20 italic">
                    Editorial Intelligence Unit
                  </div>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="editorial-container py-32">
                <div className="flex flex-col lg:flex-row gap-20">
                  
                  {/* News Feed */}
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-20">
                      <div className="w-16 h-[1px] bg-editorial-ink/20" />
                      <h2 className="text-3xl md:text-5xl font-serif text-editorial-ink uppercase tracking-tighter">
                        {searchQuery ? `Resultados: ${searchQuery}` : 'Últimas do Front'}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                      {regularPosts.map((post, idx) => (
                        <div key={post.id} onClick={() => handlePostClick(post)}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <PostCard post={post} />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-20 px-4">
                      <AdSenseBanner />
                    </div>
                  </div>

                  {/* Sidebar */}
                  <aside className="w-full lg:w-96 space-y-16 lg:border-l lg:border-editorial-line lg:pl-12 transition-colors">
                    <div className="p-4 flex justify-center bg-editorial-bg border border-editorial-line transition-colors">
                      <AdSenseBanner />
                    </div>

                    <div className="px-4">
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-editorial-ink/40 mb-10 flex items-center gap-3">
                        <TrendingUp size={14} className="text-editorial-accent" />
                        Mais Lidas da Semana
                      </h4>
                      <div className="space-y-10">
                        {regularPosts.slice(0, 4).map((post, i) => (
                          <div key={post.id} onClick={() => handlePostClick(post)} className="group cursor-pointer">
                            <span className="text-[10px] font-bold uppercase text-editorial-accent tracking-tighter mb-2 block">
                              0{i + 1} — {post.category}
                            </span>
                            <h5 className="text-lg font-serif text-editorial-ink group-hover:italic transition-all leading-tight">
                              {post.title}
                            </h5>
                          </div>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="post"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-[10px] font-bold text-editorial-ink/40 hover:text-editorial-ink transition-colors mb-16 uppercase tracking-[0.2em]"
              >
                <ChevronLeft size={14} /> Retornar à Edição Principal
              </button>

              <div className="flex justify-end mb-8">
                <button onClick={() => handleShare(selectedPost)} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-editorial-accent transition-colors">
                  <Share2 size={16} /> Compartilhar
                </button>
              </div>

              <span className="inline-block text-[10px] font-bold text-editorial-accent uppercase tracking-[0.3em] mb-8">
                {selectedPost.category} — Especial Intelligence
              </span>
              
              <h1 className="text-5xl md:text-7xl font-serif text-editorial-ink leading-[0.95] mb-12 tracking-tighter">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-8 mb-16 py-8 border-y border-editorial-line transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-editorial-ink rounded-full flex items-center justify-center text-editorial-bg font-serif italic text-xl transition-colors">
                    {selectedPost.author[0]}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-editorial-ink uppercase tracking-widest">{selectedPost.author}</p>
                    <p className="text-[10px] text-editorial-ink/40 uppercase font-medium">Correspondente Editorial</p>
                  </div>
                </div>
                <div className="h-10 w-px bg-editorial-line transition-colors" />
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-bold text-editorial-ink/40 uppercase tracking-widest">Publicado em</p>
                  <p className="text-[11px] font-bold text-editorial-ink uppercase tracking-widest">{selectedPost.date}</p>
                </div>
              </div>

              <div className="bg-editorial-line border border-editorial-line mb-16 overflow-hidden transition-colors">
                <img 
                  src={selectedPost.imageUrl} 
                  alt={selectedPost.title}
                  className="w-full aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="max-w-2xl mx-auto">
                <div className="text-2xl text-editorial-ink leading-relaxed mb-12 font-serif italic opacity-80 border-l-2 border-editorial-accent pl-8 transition-colors">
                  {selectedPost.excerpt}
                </div>
                <div className="font-sans text-editorial-ink/90 leading-loose space-y-10 text-lg whitespace-pre-line transition-colors">
                  {renderContent(selectedPost.content)}
                  <AdSenseBanner className="my-16" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
