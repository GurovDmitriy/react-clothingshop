import { ProviderAuth } from "@/entities/Sign"
import "@/shared/assets/styles/globals.scss"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "React - Clothing Shop",
  description: "Clothing Shop - Real World Clone for React and Next.js 2024",
}

export default function LayoutRoot(props: IPropsChildrenNode) {
  return (
    <html lang="en">
      <body>
        <ProviderAuth>{props.children}</ProviderAuth>
      </body>
    </html>
  )
}
