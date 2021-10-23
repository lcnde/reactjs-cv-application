import React, { Component } from 'react';
import './styles/App.scss';
import './styles/Education.scss';
import './styles/EducationOverview.scss';
import './styles/Work.scss';
import './styles/WorkOverview.scss';
import odinLogo from './assets/logo.png';
import addIcon from './assets/add-icon.png';
import Education from './components/Education.js';
import EducationOverview from './components/EducationOverview.js';
import Work from './components/Work.js';
import WorkOverview from './components/WorkOverview.js';

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
    this.addWork = this.addWork.bind(this);

    this.closeEducationForm = this.closeEducationForm.bind(this);
    this.closeWorkForm = this.closeWorkForm.bind(this);

    this.handleChangeUniversity = this.handleChangeUniversity.bind(this);
    this.handleChangeEdFromYear = this.handleChangeEdFromYear.bind(this);
    this.handleChangeEdToYear = this.handleChangeEdToYear.bind(this);
    this.handleChangeDegree = this.handleChangeDegree.bind(this);

    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeWoFromYear = this.handleChangeWoFromYear.bind(this);
    this.handleChangeWoToYear = this.handleChangeWoToYear.bind(this);
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);

    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.onSubmitWork = this.onSubmitWork.bind(this);

    this.displayEducationIfTrue = this.displayEducationIfTrue.bind(this);
    this.displayWorkIfTrue = this.displayWorkIfTrue.bind(this);
  }

  addEducation() {
    this.setState({
      showEducation: true,
    })
    console.log(this.state.showEducation)
    console.log(this.state.education.university)
  }
  addWork() {
    this.setState({
      showWork: true,
    })
    console.log(this.state.showWork)
    console.log(this.state.work.company)
  }

  displayEducationIfTrue() {
    if (this.state.education_list.length !== 0) {
      return <EducationOverview education_list = {this.state.education_list} />
    }
  }
  displayWorkIfTrue() {
    if (this.state.work_list.length !== 0) {
      return <WorkOverview work_list = {this.state.work_list} />
    }
  }

  closeEducationForm = (e) => {
    e.preventDefault();
    this.setState({
      showEducation: false,
    })
    console.log(this.state.showEducation)
  }
  closeWorkForm = (e) => {
    e.preventDefault();
    this.setState({
      showWork: false,
    })
    console.log(this.state.showWork)
  }

  handleChangeUniversity = (e) => {
    this.setState(prevState => {
      let education = Object.assign({}, prevState.education);
      education.university = e.target.value;
      return { education };
    })
  }
  handleChangeEdFromYear = (e) => {
    this.setState(prevState => {
      let education = Object.assign({}, prevState.education);
      education.from_year = e.target.value;
      return { education };
    })
  }
  handleChangeEdToYear = (e) => {
    this.setState(prevState => {
      let education = Object.assign({}, prevState.education);
      education.to_year = e.target.value;
      return { education };
    })
  }
  handleChangeDegree = (e) => {
    this.setState(prevState => {
      let education = Object.assign({}, prevState.education);
      education.degree = e.target.value;
      return { education };
    })
  }

  handleChangeCompany = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.company = e.target.value;
      return { work }
    })
  }
  handleChangeCity = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.city = e.target.value;
      return { work }
    })
  }
  handleChangeWoFromYear = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.from_year = e.target.value;
      return { work }
    })
  }
  handleChangeWoToYear = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.to_year = e.target.value;
      return { work }
    })
  }
  handleChangeRole = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.role = e.target.value;
      return { work }
    })
  }
  handleChangeDescription = (e) => {
    this.setState(prevState => {
      let work = Object.assign({}, prevState.work);
      work.description = e.target.value;
      return { work }
    })
  }

  onSubmitEducation = (e) => {
    e.preventDefault(); //prevents the default behavior which is to refresh the page
    if (this.state.education.university === '' ||
        this.state.education.from_year === '' ||
        this.state.education.to_year === '' ||
        this.state.education.degree === '') {
      alert("Can't leave fields empty");
    } else {
      this.setState({
        education_list: this.state.education_list.concat(this.state.education),
        education: {
          university: '',
          from_year: '',
          to_year: '',
          degree: ''
        },
      });
      this.closeEducationForm(e);
    }
  }
  onSubmitWork = (e) => {
    e.preventDefault();
    if (this.state.work.company === '' ||
        this.state.work.city === '' ||
        this.state.work.from_year === '' ||
        this.state.work.to_year === '' ||
        this.state.work.role === '' ||
        this.state.work.description === '') {
          alert("Can't leave fields empty");
    } else {
      this.setState({
        work_list: this.state.work_list.concat(this.state.work),
        work: {
          company: '',
          city: '',
          from_year: '',
          to_year: '',
          role: '',
          description: ''  
        }
      })
      this.closeWorkForm(e);
    }
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
    const closedWorkForm = () => {
      return (
        <div className="input-mock" onClick={this.addWork}>
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
              <option value="" disabled selected hidden>Employed / Not employed</option>
              <option value="employed">Employed</option>
              <option value="not-employed">Not Employed</option>
            </select>
          </div>
          <div className="single-input long-input">
            <span>Education (optional)</span>
            {this.state.showEducation ? 
              <Education  closeEducationForm = {this.closeEducationForm}
                          handleChangeUniversity = {this.handleChangeUniversity}
                          handleChangeEdFromYear = {this.handleChangeEdFromYear}
                          handleChangeEdToYear = {this.handleChangeEdToYear}
                          handleChangeDegree = {this.handleChangeDegree}
                          onSubmitEducation = {this.onSubmitEducation}
                          education = {this.state.education}
              /> :
              closedEducationForm()
            }
            {/* Education imports the component and using this makes the function usable by the child component */}
            {this.displayEducationIfTrue()}
            {/*
            <div className="education-container">
              <h2>Degree</h2> 
              <div className="education-card">
                <div>Universita degli studi di salerno</div>
                <div className="years-container">
                  <div>From year: 2020</div>
                  <div>To year: 2021</div>
                </div>
                <div>Economai e management e informatica degree</div>
              </div>
            </div>
                */}
          </div>
          <div className="single-input long-input">
            <span>Work Experience</span>
            {
            this.state.showWork ?
            <Work closeWorkForm = {this.closeWorkForm}
                  onSubmitWork = {this.onSubmitWork}
                  handleChangeCompany = {this.handleChangeCompany}
                  handleChangeCity = {this.handleChangeCity}
                  handleChangeWoFromYear = {this.handleChangeWoFromYear}
                  handleChangeWoToYear = {this.handleChangeWoToYear}
                  handleChangeRole = {this.handleChangeRole}
                  handleChangeDescription = {this.handleChangeDescription}
                  work = {this.state.work}
            /> :
            closedWorkForm() 
            }
            {this.displayWorkIfTrue()}
            {/*
            <div className="education-container">
              <h2>Work Experience</h2>
              <div className="work-card">
                <div className="work-card-left">
                  <div>Microsoft</div>
                  <div>Nevada, US</div>
                  <div>1980-2030</div>
                </div>
                <div className="work-card-right">
                  <div>Junior Senior Developer</div>
                  <div className="resp">My responsibility was to make sure that windows updates were forced on users wether they wanted it or not</div>
                </div>
              </div>
            </div>
            */}
          </div>
          <button className="long-input send" type="submit" value="Submit">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
