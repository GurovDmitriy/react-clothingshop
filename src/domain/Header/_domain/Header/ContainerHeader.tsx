import { UIHeader } from "@/domain/Header/_domain/Header/components/UIHeader/UIHeader"

interface IProps {
  open: boolean
  onClick(): void
}

export function ContainerHeader(props: IProps) {
  return <UIHeader onClick={props.onClick} open={props.open} />
}
