import { Metadata } from "next";
import ClientPage from "./page-client";

export const metadata: Metadata = {
  title: "DMIT Assessment | Wisdom Nexus",
  description: "Discover your intrinsic abilities with our scientific DMIT assessments.",
};

export default function Page() {
  return <ClientPage />;
}
