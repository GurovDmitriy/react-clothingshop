import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const config = {
  apiKey: "AIzaSyB9QF4ZIujBJWBklte_23byGraaDGBYvd4",
  authDomain: "clothing-shop-7ebef.firebaseapp.com",
  projectId: "clothing-shop-7ebef",
  storageBucket: "clothing-shop-7ebef.appspot.com",
  messagingSenderId: "371034450736",
  appId: "1:371034450736:web:6905d73016303931faf6f5",
}

const app = initializeApp(config)
const db = getFirestore(app)

const auth = getAuth(app)

export { auth, db }
