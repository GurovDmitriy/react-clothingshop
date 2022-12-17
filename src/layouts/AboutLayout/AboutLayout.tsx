import classNames from "classnames"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault"
import { ThemeContext } from "../../providers/ThemeContext/ThemeContext"
import "./style.scss"

const AboutLayout = observer(function AboutLayout() {
  const theme = useContext(ThemeContext)
  const aboutLayoutClass = classNames("about-layout", theme.themeValue)

  return (
    <div
      className={aboutLayoutClass}
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        background: theme[theme.themeValue].background,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        color: theme[theme.themeValue].color,
      }}
    >
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
})

export default AboutLayout
