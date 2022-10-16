import "./styles.scss"
import { ReactComponent as Logo } from "../../assets/images/crown.svg"
import LogoBox from "../../components/LogoBox/LogoBox"
import NavList from "../../components/NavList/NavList"
import dataNav from "./data"

const logoBoxProps = {
  logo: <Logo />,
  to: "/",
}

function HeaderNav() {
  return (
    <div className="header-nav">
      <LogoBox dataItem={logoBoxProps} />
      <NavList dataItem={dataNav} />
    </div>
  )
}

export default HeaderNav
