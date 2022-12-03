import classNames from "classnames"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"
import LogoBox from "../../components/LogoBox/LogoBox"
import NavListContainer from "../NavListContainer/NavListContainer"
import "./style.scss"

function HeaderNavContainer(props: HeaderNavContainerProps) {
  const { className } = props

  const headerNavClass = classNames("header-nav-container", className)

  return (
    <div className={headerNavClass}>
      <LogoBox className="header-nav-container__logo-box" to="/">
        <Logo />
      </LogoBox>
      <NavListContainer className="header-nav-container__nav-list" />
    </div>
  )
}

type HeaderNavContainerProps = {
  className?: string
}

export default HeaderNavContainer
