import type { Metadata } from "next";
import { PersonalPage } from "@/components/vascurra/inner/PersonalPage";
import { personal } from "@/content/personal";

export const metadata: Metadata = { title: personal.metadata.title, description: personal.metadata.description };

export default function PersonalRoute() { return <PersonalPage />; }
