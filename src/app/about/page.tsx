import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "About Us | Wisdom Nexus",
  description: "Learn more about Wisdom Nexus and our mission to guide students to global success.",
};

export default function Page() {
  return <ClientPage />;
}
