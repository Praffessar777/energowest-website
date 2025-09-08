const modules = import.meta.glob('../public/*.pdf', {
  query: '?url',
  import: 'default',
  eager: true,
});

export const pdfUrlByFileName: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split('/').pop()!, url as string])
);
