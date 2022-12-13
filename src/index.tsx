import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import "./assets/styles/main.scss"
import LoadingBlock from "./components/LoadingBlock/LoadingBlock"
import ThemeProvider from "./providers/ThemeContext/ThemeContext"
import router from "./router"
import store from "./store/store"
// import reportWebVitals from "./reportWebVitals"

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingBlock loading={true} />}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
