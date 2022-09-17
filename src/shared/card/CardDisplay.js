import './CardDisplay.css';

const Card = (props) => {

  const cssClass = 'card1 ' + props.className;
  // eslint-disable-next-line no-unused-vars
  const shouldShowCount = props.shouldShowCount;

  return (
    <div className={ cssClass }>
      { shouldShowCount ? 
        <div className="count">
          { ((props.index) ?? 0) + 1}
        </div> 
      :
        <div></div>
      }
      { props.children }
    </div>
  );
};

export default Card;