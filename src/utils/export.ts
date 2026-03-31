import { waitForFonts } from './fontLoader';

export type ExportFormat = 'png' | 'pdf';

interface ExportOptions {
  format: ExportFormat;
  filename?: string;
  scale?: number;
}

/** Capture a DOM element as a canvas using html2canvas */
async function captureElement(el: HTMLElement, scale = 2): Promise<HTMLCanvasElement> {
  await waitForFonts();

  // Dynamically import html2canvas to avoid SSR issues
  const { default: html2canvas } = await import('html2canvas');

  return html2canvas(el, {
    scale,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
    // Ensure full width is captured
    width: el.scrollWidth,
    height: el.scrollHeight,
    windowWidth: el.scrollWidth,
    windowHeight: el.scrollHeight,
  });
}

/** Export a DOM element as PNG and trigger a download */
export async function exportAsPng(el: HTMLElement, filename = 'brand-typography', scale = 2): Promise<void> {
  const canvas = await captureElement(el, scale);
  const dataUrl = canvas.toDataURL('image/png');
  triggerDownload(dataUrl, `${filename}.png`);
}

/** Export a DOM element as PDF and trigger a download */
export async function exportAsPdf(el: HTMLElement, filename = 'brand-typography', scale = 2): Promise<void> {
  const canvas = await captureElement(el, scale);
  const imgData = canvas.toDataURL('image/png');

  const { jsPDF } = await import('jspdf');

  // Use A4 landscape or portrait depending on aspect ratio
  const canvasWidth = canvas.width / scale;
  const canvasHeight = canvas.height / scale;
  const isLandscape = canvasWidth > canvasHeight;

  const pdf = new jsPDF({
    orientation: isLandscape ? 'landscape' : 'portrait',
    unit: 'px',
    format: [canvasWidth, canvasHeight],
    hotfixes: ['px_scaling'],
  });

  pdf.addImage(imgData, 'PNG', 0, 0, canvasWidth, canvasHeight);
  pdf.save(`${filename}.pdf`);
}

/** Generic export dispatcher */
export async function exportElement(
  el: HTMLElement,
  { format, filename = 'brand-typography', scale = 2 }: ExportOptions
): Promise<void> {
  if (format === 'png') {
    await exportAsPng(el, filename, scale);
  } else {
    await exportAsPdf(el, filename, scale);
  }
}

/** Trigger a file download from a data URL */
function triggerDownload(dataUrl: string, filename: string): void {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
}

/** Save app session state as a JSON file */
export function saveSessionToFile(state: object, filename = 'fontcompare-session'): void {
  const json = JSON.stringify(state, (_key, value) => {
    // Convert Set to Array for JSON serialization
    if (value instanceof Set) return [...value];
    return value;
  }, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  triggerDownload(url, `${filename}.json`);
  URL.revokeObjectURL(url);
}

/** Load a session JSON file and return parsed data */
export function loadSessionFromFile(): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return reject(new Error('No file selected'));
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          resolve(data);
        } catch {
          reject(new Error('Invalid JSON file'));
        }
      };
      reader.readAsText(file);
    };
    input.click();
  });
}
