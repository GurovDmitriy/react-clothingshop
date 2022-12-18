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
      <p>Branch</p>
      <ul>
        <li>main - MobX</li>
        <li>example_redux - Redux</li>
        <li>dev - development</li>
      </ul>
      <p>Example features</p>
      <ul>
        <li>TypeScript</li>
        <li>MobX</li>
        <li>Redux (Toolkit, Thunk, Saga)</li>
        <li>Firebase</li>
      </ul>
    </div>
  )
}

export default AboutPage
