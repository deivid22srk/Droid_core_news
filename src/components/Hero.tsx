/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Post } from '../types';
import { motion } from 'motion/react';

export default function Hero({ post }: { post: Post }) {
  return (
    <section className="relative w-full bg-editorial-bg border-b border-editorial-line" id="hero-section">
      <div className="editorial-container pt-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-12 text-center lg:text-left"
        >
          <span className="inline-block text-[10px] font-bold text-editorial-accent uppercase tracking-[0.3em] mb-8 bg-editorial-accent/5 px-3 py-1 rounded-full">
            Destaque — {post.category}
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-editorial-ink leading-[0.9] mb-10 tracking-tighter">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl text-editorial-ink/60 mb-16 max-w-3xl leading-relaxed font-sans font-medium">
            {post.excerpt}
          </p>
          
          <div className="aspect-[21/9] bg-editorial-line/30 overflow-hidden mb-16 rounded-sm shadow-2xl shadow-editorial-ink/5">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 py-10 border-t border-editorial-line">
            <div className="flex items-center gap-6 text-editorial-ink/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="text-editorial-ink">Por {post.author}</span>
              <div className="w-1 h-1 bg-editorial-line rounded-full" />
              <span>{post.readTime} de leitura</span>
            </div>
            <button className="md:ml-auto text-[11px] font-black uppercase tracking-[0.2em] text-editorial-ink group flex items-center gap-2 transition-all" id="read-hero-btn">
              <span className="border-b-2 border-editorial-accent pb-1 group-hover:text-editorial-accent transition-colors">Ler Matéria Completa</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
