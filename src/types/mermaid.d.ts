declare module 'mermaid' {
  export interface RenderResult {
    svg: string;
    bindFunctions?: (element: Element) => void;
  }

  export interface MermaidConfig {
    startOnLoad?: boolean;
    theme?: 'default' | 'dark' | 'forest' | 'neutral';
    securityLevel?: 'strict' | 'loose' | 'antiscript' | 'sandbox';
    flowchart?: {
      useMaxWidth?: boolean;
      htmlLabels?: boolean;
      curve?: string;
    };
    themeVariables?: Record<string, string>;
  }

  export function initialize(config: MermaidConfig): void;
  export function render(id: string, text: string): Promise<RenderResult>;
  export function contentLoaded(): void;

  const mermaid: {
    initialize: typeof initialize;
    render: typeof render;
    contentLoaded: typeof contentLoaded;
  };

  export default mermaid;
}
