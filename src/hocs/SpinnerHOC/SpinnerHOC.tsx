import classNames from "classnames"
import React from "react"
import { FaReact } from "react-icons/fa"
import "./style.scss"

function SpinnerHOC(WrappedComponent: React.ElementType) {
  return function (props: SpinnerHOCProps) {
    const { loading, className, ...otherProps } = props

    const spinnerClass = classNames("spinner-hoc", className, {
      "spinner-hoc--visible": loading,
    })

    const Component = renderComponent()

    function renderComponent() {
      let component = null

      if (loading) {
        component = (
          <div className={spinnerClass}>
            <div className="spinner-hoc__overlay"></div>
            <div className="spinner-hoc__icon-box">
              <FaReact />
            </div>
          </div>
        )
      } else {
        component = <WrappedComponent {...otherProps} />
      }

      return component
    }

    return Component
  }
}

SpinnerHOC.defaultProps = {
  loading: false,
}

type SpinnerHOCProps = {
  className: string
  loading: boolean
}

export default SpinnerHOC
