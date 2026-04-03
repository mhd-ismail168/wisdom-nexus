import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "Study Abroad Programs | Wisdom Nexus",
  description: "Unlock global opportunities with our expert international admission handling and visa support.",
};

export default function Page() {
  return <ClientPage />;
}
