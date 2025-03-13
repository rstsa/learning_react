import logo from "./logo.svg";
import "./App.css";
import * as RB from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let oncli_event = () => {
    console.log("CLICK IS TRIGGERE working main");
  };

  let return_the_text = () => {
    return "Hello from returnfwefhwe";
  };

  let a = return_the_text();

  return (
    <div className="App" onClick={oncli_event}>
      <div>
        <RB.Button variant="success"> HELLO</RB.Button>
        <RB.Card style={{ width: '18rem' }}>
      <RB.Card.Img variant="top" src="holder.js/100px180" />
      <RB.Card.Body>
        <RB.Card.Title>Card Title</RB.Card.Title>
        <RB.Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </RB.Card.Text>
        <RB.Button variant="primary">Go somewhere</RB.Button>
      </RB.Card.Body>
    </RB.Card>
      </div>
      <div> {a}</div>
    </div>
  );
}

export default App;
