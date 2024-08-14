import './index.css'

const EventItem = ({eventObj, onClickEventItem}) => {
  const {imageUrl, name, location, id} = eventObj
  return (
    <li
      className="event-item-li-container"
      onClick={() => onClickEventItem(id)}
    >
      <button type="button">
        <img src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
