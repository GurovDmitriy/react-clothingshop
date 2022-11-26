import classNames from "classnames"
import PropTypes from "prop-types"
import { FaReact } from "react-icons/fa"
import "./style.scss"

function LoadingBlock(props) {
  const { className, loading } = props

  const loadingBlockClass = classNames("loading-block", className, {
    "loading-block--visible": loading,
  })

  return (
    <div className={loadingBlockClass}>
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
