import './styles/App.scss';
import odinLogo from './assets/logo.png';
import addIcon from './assets/add-icon.png';

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
        <div className="single-input long-input">
          <label for="addr2">Address Line 2</label>
          <input type="text" id="addr2" name="addr2"></input>
        </div>
        <div className="single-input">
          <label for="city">Town/City</label>
          <input type="text" id="city" name="city"></input>
        </div>
        <div className="single-input">
          <label for="postal-code">Postal Code</label>
          <input type="text" id="postal-code" name="postal-code"></input>
        </div>
        <div className="single-input">
          <label for="email">Email</label>
          <input type="text" id="email" name="email"></input>
        </div>
        <div className="single-input">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone"></input>
        </div>
        <div className="single-input long-input">
          <label for="occupation">Current occupation</label>
          <select id="occupation" name="cars">
            <option value="" disabled selected>Employed / Not employed</option>
            <option value="employed">Employed</option>
            <option value="not-employed">Not Employed</option>
          </select>
        </div>
        <div className="single-input long-input">
          <span>Education (optional)</span>
          <div className="input-mock">
            <img className="add-icon" src={addIcon} alt="Icon that displays a + sign" />
            <span>Add</span>
          </div>
        </div>
        <div className="single-input long-input">
          <span>Work Experience</span>
          <div className="input-mock">
            <img className="add-icon" src={addIcon} alt="Icon that displays a + sign" />
            <span>Add</span>
          </div>
        </div>
        <button className="long-input" id="send" type="submit" value="Submit">Send</button>
      </form>
    </div>
  );
}

export default App;
