/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

interface AdsterraDisplayProps {
  type: '320x50' | '300x250';
  className?: string;
}

const CONFIGS = {
  '320x50': {
    key: '717acbb763375b1c21a8a45a593e3893',
    height: 50,
    width: 320,
  },
  '300x250': {
    key: '37590ca6c344b3acfaaeeb841c7cb691',
    height: 250,
    width: 300,
  }
};

export default function AdsterraDisplay({ type, className = "" }: AdsterraDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const config = CONFIGS[type];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      
      const scriptConf = document.createElement('script');
      scriptConf.innerHTML = `
        atOptions = {
          'key' : '${config.key}',
          'format' : 'iframe',
          'height' : ${config.height},
          'width' : ${config.width},
          'params' : {}
        };
      `;
      
      const scriptExternal = document.createElement('script');
      scriptExternal.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;
      
      containerRef.current.appendChild(scriptConf);
      containerRef.current.appendChild(scriptExternal);
    }
  }, [type]);

  return (
    <div className={`flex flex-col items-center my-4 ${className}`}>
      <span className="text-[8px] font-bold uppercase tracking-[0.2em] mb-1 opacity-20 text-editorial-ink">Publicidade</span>
      <div ref={containerRef} className="overflow-hidden" />
    </div>
  );
}
