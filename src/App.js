import React, { Component } from 'react';
import './styles/App.scss';
import './styles/Education.scss';
import './styles/EducationOverview.scss'
import odinLogo from './assets/logo.png';
import addIcon from './assets/add-icon.png';
import Education from './components/Education.js';
import EducationOverview from './components/EducationOverview.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEducation: false,
      showWork: false,
      showAddButton: false,
      education: {
        university: '',
        from_year: '',
        to_year: '',
        degree: ''
      },
      education_list: [],
      work: {
        company: '',
        city: '',
        from_year: '',
        to_year: '',
        role: '',
        description: ''        
      },
      work_list: [],
    };
    this.addEducation = this.addEducation.bind(this);
    this.closeEducationForm = this.closeEducationForm.bind(this);
    this.onChangeEducation = this.onChangeEducation.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
  }

  addEducation() {
    this.setState({
      showEducation: true,
    })
    console.log(this.state.showEducation)
  }

  closeEducationForm = (e) => {
    e.preventDefault();
    this.setState({
      showEducation: false,
    })
    console.log(this.state.showEducation)
  }
  onChangeEducation = (e) => {
    this.setState({
      education: {
        university: e.target.value,
        from_year: e.target.value,
        to_year: e.target.value,
        degree: e.target.value,
      }
    });
  }
  onSubmitEducation = (e) => {
    e.preventDefault(); //prevents the default behavior which is to refresh the page
    this.setState({
      education_list: this.state.education_list.concat(this.state.education),
      education: {
        university: '',
        from_year: '',
        to_year: '',
        degree: ''
      },
    });
  }

  render() {
    const closedEducationForm = () => {
      return (
        <div className="input-mock" onClick={this.addEducation}>
          <img className="add-icon" src={addIcon} alt="Icon that displays a + sign" />
          <span>Add</span>
        </div>
      )
    }


    return (
      <div className="App">
        <div className="header">
          <img className="logo" src={odinLogo} alt="Logo of The Odin Project" />
          <h1 className="title">CV APPLICATION</h1>
        </div>
        <form>
          <div className="single-input">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname"></input>
          </div>
          <div className="single-input">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname"></input>
          </div>
          <div className="single-input long-input">
            <label htmlFor="addr1">Address Line 1</label>
            <input type="text" id="addr1" name="addr1"></input>
          </div>
          <div className="single-input long-input">
            <label htmlFor="addr2">Address Line 2</label>
            <input type="text" id="addr2" name="addr2"></input>
          </div>
          <div className="single-input">
            <label htmlFor="city">Town/City</label>
            <input type="text" id="city" name="city"></input>
          </div>
          <div className="single-input">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" name="postal-code"></input>
          </div>
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email"></input>
          </div>
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone"></input>
          </div>
          <div className="single-input long-input">
            <label htmlFor="occupation">Current occupation</label>
            <select id="occupation" name="cars">
              <option value="" disabled selected>Employed / Not employed</option>
              <option value="employed">Employed</option>
              <option value="not-employed">Not Employed</option>
            </select>
          </div>
          <div className="single-input long-input">
            <span>Education (optional)</span>
            {this.state.showEducation ? 
              <Education  closeEducationForm = {this.closeEducationForm}
                          onChangeEducation = {this.onChangeEducation}
                          onSubmitEducation = {this.onSubmitEducation}
                          education = {this.state.education}
              /> :
              closedEducationForm()
            }
            {/* Education imports the component and using this makes the function usable by the child component */}
            <EducationOverview education_list = {this.state.education_list}
            />
          </div>
          <div className="single-input long-input">
            <span>Work Experience</span>
            <div className="input-mock">
              <img className="add-icon" src={addIcon} alt="Icon that displays a + sign" />
              <span>Add</span>
            </div>
          </div>
          <button className="long-input send" type="submit" value="Submit">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
