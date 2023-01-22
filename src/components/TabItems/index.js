import './index.css'

const TabItems = props => {
  const {tabDetails, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-container">
      <button type="button" onClick={onClickTabItem} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
