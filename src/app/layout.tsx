import { ProviderAuth } from "@/domain/Sign/providers/ProviderAuth"
import "@/domain/_assets/styles/globals.scss"
import { IPropsChildrenNode } from "@/lib/types/definitions"

export default function LayoutRoot(props: IPropsChildrenNode) {
  return (
    <html lang="en">
      <body>
        <ProviderAuth>{props.children}</ProviderAuth>
      </body>
    </html>
  )
}
