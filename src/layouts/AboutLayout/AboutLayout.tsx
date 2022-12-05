import { Link, Outlet } from "react-router-dom"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import "./style.scss"

function AboutLayout() {
  return (
    <div className="about-layout">
      <Link to="/">
        <ButtonDefault className="about-layout__button" as="button">
          Go Home
        </ButtonDefault>
      </Link>
      <div className="about-layout__content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default AboutLayout
