import "./styles.scss"
import LogoBox from "../../components/LogoBox/LogoBox"
import ContainerNavList from "../ContainerNavList/ContainerNavList"
import PropTypes from "prop-types"
import classNames from "classnames"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"

function ContainerHeaderNav({ className }) {
  const classesNav = classNames("header-nav", className)

  return (
    <div className={classesNav}>
      <LogoBox className="header-nav__logo-box" to="/">
        <Logo />
      </LogoBox>
      <ContainerNavList className="header-nav__nav-list" />
    </div>
  )
}

ContainerHeaderNav.propTypes = {
  className: PropTypes.string,
}

export default ContainerHeaderNav
