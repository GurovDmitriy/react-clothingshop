import classNames from "classnames"
import PropTypes from "prop-types"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"
import LogoBox from "../../components/LogoBox/LogoBox"
import NavListContainer from "../NavListContainer/NavListContainer"
import "./styles.scss"

function HeaderNavContainer({ className }) {
  const classesNav = classNames("header-nav", className)

  return (
    <div className={classesNav}>
      <LogoBox className="header-nav__logo-box" to="/">
        <Logo />
      </LogoBox>
      <NavListContainer className="header-nav__nav-list" />
    </div>
  )
}

HeaderNavContainer.propTypes = {
  className: PropTypes.string,
}

export default HeaderNavContainer