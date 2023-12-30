import "../../styles/componentsStyles/_numberDisplay.scss";

const NumberDisplay = ({value}: {value: number}) => {
  return <div id="display">{value}</div>;
  
}

export default NumberDisplay;