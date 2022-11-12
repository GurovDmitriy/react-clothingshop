import { Link, Outlet } from "react-router-dom"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import "./style.scss"

function AboutLayout() {
  return (
    <div className="about-layout">
      <ButtonSimple tag={Link} to="/">
        Home
      </ButtonSimple>
      <div className="about-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout
