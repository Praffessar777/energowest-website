const pdfUrlByFileName: Record<string, string> = {
  // Add known filename to URL mappings here.
};

export function resolvePdfUrl(fileName: string): string {
  return (
    pdfUrlByFileName[fileName] ??
    new URL(
      fileName,
      new URL(import.meta.env.BASE_URL, window.location.origin)
    ).href
  );
}
