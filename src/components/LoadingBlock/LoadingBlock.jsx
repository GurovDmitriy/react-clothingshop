import classNames from "classnames"
import PropTypes from "prop-types"
import { FaReact } from "react-icons/fa"
import "./style.scss"

function LoadingBlock({ className, loading }) {
  const loadingBlockClasses = classNames("loading-block", className, {
    "loading-block--visible": loading,
  })

  return (
    <div className={loadingBlockClasses}>
      <div className="loading-block__overlay"></div>
      <div className="loading-block__icon-box">
        <FaReact />
      </div>
    </div>
  )
}

LoadingBlock.defaultProps = {
  loading: false,
}

LoadingBlock.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
}

export default LoadingBlock
