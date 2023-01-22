import './index.css'

const ImageItems = props => {
  const {imageItem, onClickThumbnail} = props
  const {id, thumbnailUrl, category} = imageItem

  const onClickImageItem = () => {
    onClickThumbnail(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImageItem} className="image-btn">
        <img className="thumb-nail-images" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ImageItems
