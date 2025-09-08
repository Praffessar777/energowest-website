import { toast } from "sonner@2.0.3";
import { resolvePdfUrl } from "./pdfUrls";

export function downloadDocument(title: string, fileName: string) {
  const url = resolvePdfUrl(fileName);
  const extension = fileName.split(".").pop() || "pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.replace(/[^a-zA-Z0-9а-яА-Я\s]/g, "")}.${extension}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  toast.success("Завантаження розпочато", {
    description: `Документ "${title}" завантажується на ваш пристрій.`,
    duration: 3000,
  });
}
