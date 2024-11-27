import DefaultLayout from "@/widgets/Layout/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with AI Girlfriend",
  description: "Chat with AI Girlfriend",
};

export default function Layout({children,}: { children: React.ReactNode }) {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}
