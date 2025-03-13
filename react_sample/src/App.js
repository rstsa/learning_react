import logo from './logo.svg';
import './App.css';

function App() {

  let oncli_event=()=>{
    console.log("CLICK IS TRIGGERE working main")
  }

  let return_the_text =()=>{
    return "Hello from returnfwefhwe"
  }

  let a =return_the_text()

  return (
    <div className="App" onClick={oncli_event}>
      {a}
    </div>
  );
}

export default App;
