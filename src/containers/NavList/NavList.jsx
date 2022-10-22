import ButtonSimple from "../../components/ButtonSimple/ButtonSimple"
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon"
import { dataNav, dataCartButton } from "./data"
import { auth } from "../../firebase/firebaseConfig"
import "./styles.scss"

function NavList() {
  const handleSignOut = async () => {
    await auth.signOut()
  }

  const handleClickCart = () => {
    console.log("cart")
  }

  const listItems = getListsItems(dataNav, handleSignOut)

  return (
    <div className="nav-list">
      {listItems}
      <ButtonIcon
        dataItem={dataCartButton}
        handleClick={() => handleClickCart()}
      />
    </div>
  )
}

function getListsItems(dataNav, handleSignOut) {
  const isExistCurrentUser = auth && auth.currentUser

  return dataNav.map((el) => {
    if (isExistCurrentUser && el.value === "signIn") {
      return null
    }

    if (!isExistCurrentUser && el.value === "signOut") {
      return null
    }

    if (isExistCurrentUser && el.value === "signOut") {
      return (
        <ButtonSimple key={el.id} dataItem={el} handleClick={handleSignOut} />
      )
    }

    return <ButtonSimple key={el.id} dataItem={el} />
  })
}

export default NavList
