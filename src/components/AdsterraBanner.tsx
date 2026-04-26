/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

export default function AdsterraBanner({ className = "" }: { className?: string }) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const containerId = "container-84052997551b763945ef13768738f7b8";

  useEffect(() => {
    if (bannerRef.current) {
      bannerRef.current.innerHTML = '';
      const div = document.createElement('div');
      div.id = containerId;
      bannerRef.current.appendChild(div);

      const script = document.createElement('script');
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = `https://pl29264101.profitablecpmratenetwork.com/84052997551b763945ef13768738f7b8/invoke.js`;
      
      bannerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-[250px] my-8 ${className}`}>
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] mb-4 opacity-20 text-editorial-ink">Conteúdo Patrocinado</span>
      <div ref={bannerRef} className="w-full flex justify-center" />
    </div>
  );
}
