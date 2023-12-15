import { IPropsChildrenNode } from "@/lib/types/definitions"
import "../assets/styles/globals.scss"

export default function LayoutRoot(props: IPropsChildrenNode) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}
