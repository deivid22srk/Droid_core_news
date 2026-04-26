/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Search, X, Sun, Moon, Menu, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Navbar({ onSearch, isDark, toggleDark, onNavigate }: { 
  onSearch: (query: string) => void, 
  isDark: boolean, 
  toggleDark: () => void,
  onNavigate: (path: 'home' | 'about' | 'privacy') => void
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
    setIsSearchOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-editorial-bg/80 backdrop-blur-md border-b border-editorial-line transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="p-2 hover:bg-editorial-line/50 rounded-full transition-all text-editorial-ink"
              >
                <Menu size={20} />
              </button>
              <div className="flex items-center gap-2 cursor-pointer group" id="logo" onClick={() => window.location.href = '/'}>
                <span className="text-2xl font-black tracking-tighter text-editorial-ink uppercase font-sans transition-transform group-hover:scale-105">
                  Droid_Core
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={toggleDark} 
                className="p-2 hover:bg-editorial-line/50 rounded-full transition-all text-editorial-ink"
                title={isDark ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-editorial-line/50 rounded-full transition-all text-editorial-ink">
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Lateral (Drawer) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-80 max-w-[80%] bg-editorial-bg h-full shadow-2xl border-r border-editorial-line p-8 flex flex-col transition-colors duration-300">
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-black tracking-tighter text-editorial-ink uppercase">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-editorial-ink hover:bg-editorial-line/50 rounded-full transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-8">
              <div className="p-6 bg-editorial-accent/5 rounded-xl border border-editorial-accent/10">
                <div className="flex items-center gap-3 text-editorial-accent mb-4">
                  <AlertTriangle size={20} />
                  <h3 className="font-bold uppercase tracking-widest text-[11px]">Aviso de Conteúdo</h3>
                </div>
                <p className="text-xs text-editorial-ink/70 leading-relaxed font-medium">
                  As notícias publicadas neste portal podem ter sido geradas ou auxiliadas por **Inteligência Artificial (IA)**. 
                </p>
                <p className="text-xs text-editorial-ink/70 mt-4 leading-relaxed font-medium">
                  Recomendamos que o usuário revise o conteúdo e verifique fontes oficiais para garantir a precisão total dos dados técnicos.
                </p>
              </div>

              <div className="space-y-4 pt-8">
                <h4 className="text-[10px] font-bold text-editorial-ink/30 uppercase tracking-[0.2em] px-2">Navegação</h4>
                <button 
                  onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-lg font-serif text-editorial-ink hover:italic hover:pl-6 transition-all border-b border-editorial-line/30"
                >
                  Home
                </button>
                <button 
                  onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-lg font-serif text-editorial-ink hover:italic hover:pl-6 transition-all border-b border-editorial-line/30"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => { onNavigate('privacy'); setIsMenuOpen(false); }}
                  className="w-full text-left px-4 py-3 text-lg font-serif text-editorial-ink hover:italic hover:pl-6 transition-all border-b border-editorial-line/30"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>

            <div className="pt-8 border-t border-editorial-line">
              <div className="flex items-center gap-2 text-editorial-ink/40">
                <ShieldCheck size={14} />
                <span className="text-[9px] font-bold uppercase tracking-widest">Compromisso com a Verdade</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 z-40 bg-editorial-bg pt-32 px-8 flex flex-col items-center transition-colors duration-300">
          <div className="w-full max-w-2xl flex items-center border-b-2 border-editorial-ink pb-4">
            <input 
              type="text" 
              placeholder="DIGITE SUA BUSCA..." 
              className="flex-1 text-4xl font-serif outline-none bg-transparent text-editorial-ink placeholder:text-editorial-ink/20"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
            />
            <button onClick={handleSearch} className="ml-4 p-2 bg-editorial-ink text-editorial-bg font-bold text-sm uppercase transition-colors">Buscar</button>
          </div>
        </div>
      )}
    </>
  );
}
