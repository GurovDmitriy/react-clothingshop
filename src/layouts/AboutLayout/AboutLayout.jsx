import { Link, Outlet } from "react-router-dom"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import "./style.scss"

function AboutLayout() {
  return (
    <div className="about-layout">
      <ButtonDefault className="about-layout__button" tag={Link} to="/">
        Go Home
      </ButtonDefault>
      <div className="about-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout
