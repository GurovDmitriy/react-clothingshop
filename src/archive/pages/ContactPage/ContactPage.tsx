import { BsGithub } from "react-icons/bs"
import "./style.scss"

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-page__link">
        <a href="https://github.com/GurovDmitriy">
          <BsGithub />
          <span>Gurov Dmitriy</span>
        </a>
      </div>
    </div>
  )
}

export default ContactPage
