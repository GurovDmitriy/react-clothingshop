import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import { auth } from "../../firebase/firebaseConfig"
import "./styles.scss"
import { Link } from "react-router-dom"
import { ReactComponent as CartIcon } from "../../assets/images/cart.svg"
import { useEffect, useState } from "react"

function ContainerNavList() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleSignOut = async () => {
    await auth.signOut()
  }

  const handleClickCart = () => {
    console.log("cart")
  }

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    return function cleanup() {
      unsubscribeAuth()
    }
  })

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

  return (
    <div className="nav-list">
      <ButtonSimple to="/" tag={Link}>
        Shop
      </ButtonSimple>
      <ButtonSimple to="/contact" tag={Link}>
        Contact
      </ButtonSimple>
      {currentUser ? buttonSignOut : buttonSignIn}
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
