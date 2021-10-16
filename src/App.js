import './styles/App.scss';
import odinLogo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={odinLogo} alt="Logo of The Odin Project" />
        <h1 className="title">CV APPLICATION</h1>
      </div>
      <form>
        <div className="single-input">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="fname"></input>
        </div>
        <div className="single-input">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lname"></input>
        </div>
        <div className="single-input long-input">
          <label for="addr1">Address Line 1</label>
          <input type="text" id="addr1" name="addr1"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
