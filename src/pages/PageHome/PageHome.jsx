import AppMenu from "../../components/AppMenu/AppMenu"
import { menu } from "./data"

function PageHome() {
  return (
    <div className="page-home">
      <AppMenu dataItem={menu} />
    </div>
  )
}

export default PageHome
