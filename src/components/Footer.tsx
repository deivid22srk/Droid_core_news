/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-editorial-bg border-t-2 border-editorial-ink transition-colors duration-300" id="footer">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="p-8 border-r border-editorial-line bg-editorial-bg">
          <span className="text-[11px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em] mb-4 block">01. Arquivo</span>
          <h4 className="text-2xl font-serif text-editorial-ink leading-tight">Os Melhores de 2024</h4>
        </div>
        <div className="p-8 border-r border-editorial-line">
          <span className="text-[11px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em] mb-4 block">02. Hardware</span>
          <h4 className="text-2xl font-serif text-editorial-ink leading-tight">Snapdragon Gen 4</h4>
        </div>
        <div className="p-8">
          <span className="text-[11px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em] mb-4 block">03. Emuladores</span>
          <h4 className="text-2xl font-serif text-editorial-ink leading-tight">Progresso Winlator</h4>
        </div>
      </div>
      
      <div className="editorial-container py-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-editorial-line bg-editorial-bg">
        <div className="text-4xl font-black tracking-tighter text-editorial-ink uppercase font-sans">
          Droid_Core
        </div>
        <p className="text-[10px] font-bold text-editorial-ink/40 uppercase tracking-[0.2em]">
          © 2026 DroidGaming News. Todos os direitos reservados.
        </p>
        <div className="flex gap-8">
          {['Twitter', 'Instagram', 'Github'].map(s => (
            <a key={s} href="#" className="text-[10px] font-bold uppercase tracking-widest text-editorial-ink hover:text-editorial-accent">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
