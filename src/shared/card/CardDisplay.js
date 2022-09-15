import './CardDisplay.css';

const Card = (props) => {

  const cssClass = 'card1 ' + props.className;

  let shouldShowCount = 'false';

  if (props.shouldShowCount) {
    shouldShowCount = 'true';
  }

  return (
    <div className={ cssClass }>
      <div className="count">
        { shouldShowCount }
      </div>
      { props.children }
    </div>
  )
}

export default Card;