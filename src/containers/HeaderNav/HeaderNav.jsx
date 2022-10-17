import "./styles.scss"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"
import LogoBox from "../../components/LogoBox/LogoBox"
import NavList from "../NavList/NavList"

const logoBoxProps = {
  logo: <Logo />,
  to: "/",
}

function HeaderNav() {
  return (
    <div className="header-nav">
      <LogoBox dataItem={logoBoxProps} />
      <NavList />
    </div>
  )
}

export default HeaderNav
