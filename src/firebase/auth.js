import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig"

async function createUserFB({ email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (err) {
    console.log(`Oops! ${err.code} ${err.message}`)
  }
}

export default {
  createUserFB,
}
