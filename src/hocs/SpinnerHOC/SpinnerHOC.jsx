import classNames from "classnames"
import PropTypes from "prop-types"
import { FaReact } from "react-icons/fa"
import "./style.scss"

const SpinnerHOC =
  (WrappedComponent) =>
  ({ loading, className, ...props }) => {
    const spinnerClass = classNames("spinner-hoc", className, {
      "spinner-hoc--visible": loading,
    })

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
        component = <WrappedComponent {...props} />
      }

      return component
    }

    return renderComponent()
  }

SpinnerHOC.defaultProps = {
  loading: false,
}

SpinnerHOC.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  WrappedComponent: PropTypes.element,
}

export default SpinnerHOC
