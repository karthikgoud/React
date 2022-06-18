import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Play from "./components/functional";
import Plays from "./components/class";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Tony Stark" heroName="Ironman">
        <p>this ia chilsded props</p>
      </Greet>
      <Greet name="Peter Parker" heroName="SpiderMan" />
      <Greet name="Dominic" heroName="DOM" /> */}
      <Welcome name="Tony Stark" heroName="Ironman" />
      <Welcome name="Peter Parker" heroName="SpiderMan" />
      <Welcome name="Dominic" heroName="DOM" />
      <Play>
        <button>fucntin submit</button>
      </Play>
      <Plays>
        <button>submit</button>
      </Plays>
    </div>
  );
}

export default App;
