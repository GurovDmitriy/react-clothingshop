import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./assets/styles/main.scss"
import LoadingBlock from "./components/LoadingBlock/LoadingBlock"
import StoreProvider from "./providers/StoreContext/StoreContext"
import ThemeProvider from "./providers/ThemeContext/ThemeContext"
import router from "./router"
// import reportWebVitals from "./reportWebVitals"

// eslint-disable-next-line no-prototype-builtins
// ts-ignore
// eslint-disable-next-line no-prototype-builtins
// if (
//   !new (class {
//     x: unknown
//   })().hasOwnProperty("x")
// )
//   throw new Error("Transpiler is not configured correctly")

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider>
        <Suspense fallback={<LoadingBlock loading={true} />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
