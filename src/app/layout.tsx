import { IPropsChildrenNode } from "@/lib/types/definitions"
import "../assets/styles/globals.scss"
import { ProviderAuth } from "@/domain/Sign/providers/ProviderAuth"

export default function LayoutRoot(props: IPropsChildrenNode) {
  return (
    <html lang="en">
      <body>
        <ProviderAuth>{props.children}</ProviderAuth>
      </body>
    </html>
  )
}
