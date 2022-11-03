import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import api from "../../api"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import fetchStateTypes from "../../store/statusAction"
import {
  selectUser,
  selectUserStatusFetch,
} from "../../store/user/userSelector"
import "./styles.scss"

function ContainerNavList() {
  const userStatusFetch = useSelector(selectUserStatusFetch)
  const user = useSelector(selectUser)

  const handleSignOut = async () => {
    await api.auth.signOut()
  }

  const handleClickCart = () => {
    console.log("cart")
  }

  const buttonSignOut = (
    <ButtonSimple type="button" handleClick={handleSignOut}>
      Sign out
    </ButtonSimple>
  )

  const buttonSignIn = (
    <ButtonSimple to="/sign" tag={Link}>
      Sign in
    </ButtonSimple>
  )

  const buttonLoading = <ButtonSimple type="button">Loading...</ButtonSimple>

  return (
    <div className="nav-list">
      <ButtonSimple to="/" tag={Link}>
        Shop
      </ButtonSimple>
      <ButtonSimple to="/contact" tag={Link}>
        Contact
      </ButtonSimple>
      {userStatusFetch === fetchStateTypes.pending
        ? buttonLoading
        : user
        ? buttonSignOut
        : buttonSignIn}
      <ButtonIcon
        isHiddenLabel={true}
        to="/"
        tag={Link}
        className="nav-list__button-icon"
        icon={CartIcon}
        handleClick={() => handleClickCart()}
      >
        Cart
      </ButtonIcon>
    </div>
  )
}

export default ContainerNavList
