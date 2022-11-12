import classNames from "classnames"
import PropTypes from "prop-types"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"
import LogoBox from "../../components/LogoBox/LogoBox"
import NavListContainer from "../NavListContainer/NavListContainer"
import "./style.scss"

function HeaderNavContainer({ className }) {
  const classesNav = classNames("header-nav-container", className)

  return (
    <div className={classesNav}>
      <LogoBox className="header-nav-container__logo-box" to="/">
        <Logo />
      </LogoBox>
      <NavListContainer className="header-nav-container__nav-list" />
    </div>
  )
}

HeaderNavContainer.propTypes = {
  className: PropTypes.string,
}

export default HeaderNavContainer
