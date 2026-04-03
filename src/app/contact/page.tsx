import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "Contact Us | Wisdom Nexus",
  description: "Get in touch with Elite Admission Architects for strategic academic counseling.",
};

export default function Page() {
  return <ClientPage />;
}
