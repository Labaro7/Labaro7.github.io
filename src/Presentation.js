import './Presentation.css';
import portrait from "./adrian.jpeg"

function Presentation() {
  return (
    <div className="Presentation">
      <img src={portrait} alt="adrian" className="portrait" />
        <h2>Hello! I'm</h2>
        <h1 className="name">Adrián Lábaro Herrera Trillo</h1>
        <h2 className="details">Graduate in Telematic Engineering by the University of Málaga, Spain</h2>
    </div>
  );
}

export default Presentation;
