import BaseLayout, { baseMetadata, baseViewport } from "../BaseLayout";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function PtLayout({ children }) {
  return <BaseLayout locale="pt-BR">{children}</BaseLayout>;
}
