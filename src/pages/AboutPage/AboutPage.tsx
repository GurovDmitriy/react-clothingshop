import { BsGithub } from "react-icons/bs"
import "./style.scss"

function AboutPage() {
  return (
    <div className="about-page">
      <span className="about-page__content">Learn React - Clothing Shop</span>
      <div className="about-page__link">
        <a href="https://github.com/GurovDmitriy">
          <BsGithub />
          <span>Gurov Dmitriy</span>
        </a>
      </div>
    </div>
  )
}

export default AboutPage
