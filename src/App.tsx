import rocket from "./assets/rocket.png";
import "./App.css";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="container">
      <div className="left">
        <Signup />
      </div>
      <div className="right">
        <img className="img-rocket" src={rocket} alt="rocket" />
      </div>
    </div>
  );
}

export default App;
