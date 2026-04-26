/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Post } from '../types';
import { motion } from 'motion/react';

export default function PostCard({ post }: { post: Post }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group cursor-pointer border-b border-editorial-line/60 pb-16 overflow-hidden transition-all duration-500"
      id={`post-card-${post.id}`}
    >
      <div className="flex flex-col gap-8">
        <div className="aspect-[16/10] overflow-hidden bg-editorial-line/20 rounded-sm">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="flex flex-col gap-4 px-1">
          <div className="text-[10px] font-bold text-editorial-ink/30 uppercase tracking-[0.2em] flex items-center gap-3">
            <span>{post.date}</span>
            <div className="w-1 h-1 bg-editorial-accent/40 rounded-full" />
            <span className="text-editorial-accent">{post.category}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-serif text-editorial-ink leading-[1.1] tracking-tight group-hover:text-editorial-accent transition-colors duration-300">
            {post.title}
          </h3>
          
          <p className="text-base text-editorial-ink/50 leading-relaxed line-clamp-2 font-sans font-medium">
            {post.excerpt}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
