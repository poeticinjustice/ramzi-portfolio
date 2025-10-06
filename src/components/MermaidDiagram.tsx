'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
  id?: string;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ chart, id }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [isDark, setIsDark] = useState(() => {
    // Initialize with correct theme on first render to avoid flash
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    // Check for dark mode
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Watch for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!chart) return;

      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'basis',
        },
        themeVariables: {
          primaryColor: isDark ? '#4a90e2' : '#2563eb',
          primaryTextColor: isDark ? '#fff' : '#000',
          primaryBorderColor: isDark ? '#4a90e2' : '#2563eb',
          lineColor: isDark ? '#64748b' : '#94a3b8',
          secondaryColor: isDark ? '#1e293b' : '#f1f5f9',
          tertiaryColor: isDark ? '#334155' : '#e2e8f0',
        },
      });

      try {
        const uniqueId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const result = await mermaid.render(uniqueId, chart);
        setSvg(result.svg);
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
      }
    };

    renderDiagram();
  }, [chart, id, isDark]);

  return (
    <div
      ref={mermaidRef}
      className='mermaid-container flex justify-center'
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
