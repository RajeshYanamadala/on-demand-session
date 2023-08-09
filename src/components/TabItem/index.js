import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    changeTabItem(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onClickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
