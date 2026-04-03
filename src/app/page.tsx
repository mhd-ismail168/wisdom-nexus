import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "Wisdom Nexus | Elite Admission Architects",
  description: "Strategic academic counsel for families seeking admissions to top universities.",
};

export default function Page() {
  return <ClientPage />;
}
