/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function AdPlaceholder({ label, className = "" }: { label: string, className?: string }) {
  return (
    <div 
      className={`bg-[#E0E0DB] border border-dashed border-editorial-ink/30 flex flex-col items-center justify-center text-editorial-ink/50 p-8 min-h-[100px] overflow-hidden ${className}`}
      id="advertisement-zone"
    >
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] mb-2 opacity-50">Espaço Publicitário</span>
      <p className="text-[10px] italic font-sans">{label}</p>
    </div>
  );
}
