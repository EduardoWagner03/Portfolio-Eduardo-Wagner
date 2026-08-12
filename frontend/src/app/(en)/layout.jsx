import BaseLayout, { baseMetadata, baseViewport } from "../BaseLayout";

export const metadata = baseMetadata;
export const viewport = baseViewport;

export default function EnLayout({ children }) {
  return <BaseLayout locale="en">{children}</BaseLayout>;
}
