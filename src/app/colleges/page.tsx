import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "Top Colleges & Universities | Wisdom Nexus",
  description: "Explore top colleges and universities across India and abroad with Wisdom Nexus.",
};

export default function Page() {
  return <ClientPage />;
}
