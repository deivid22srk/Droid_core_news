/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  key?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-8">
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          title="Copiar código"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-[#1a1a1a] text-gray-300 p-6 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed border border-editorial-line transition-colors">
        <code>{code}</code>
      </pre>
    </div>
  );
}
