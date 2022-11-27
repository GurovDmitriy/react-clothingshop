import classNames from "classnames"
import { FaReact } from "react-icons/fa"
import "./style.scss"

LoadingBlock.defaultProps = {
  loading: false,
}

type LoadingBlockProps = {
  className?: string
  loading?: boolean
} & typeof LoadingBlock.defaultProps

function LoadingBlock(props: LoadingBlockProps) {
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

export default LoadingBlock
