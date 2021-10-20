import React, { Component } from 'react';

class Education extends Component {
  constructor(props){
    super(props);

    this.state = {
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


  render() {
    const { education, education_list, work, work_list } = this.state; //deconstructor so you don't have to call this.state every time

    const currentYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(70),
                          (val, index) => (index-69) + currentYear);

    return (
      <div className="form">
        <div className="single-input long-input">
          <label htmlFor="school">University or School</label>
          <input 
            type="text" 
            id="school" 
            name="school"
            onChange={this.onChangeEducation}
            value={education.university} //this.state....
          ></input>
        </div>
        <div className="single-input">
          <label htmlFor="from-year">From year</label>
          <select id="from-year" name="from-year">
            {
              dropdownYears.map((year, index) => {
                return <option value={year}>{year}</option>
              })
            }
          </select>
        </div>
        <div className="single-input">
          <label htmlFor="to-year">From year</label>
          <select id="to-year" name="to-year">
            {
              dropdownYears.map((year, index) => {
                return <option value={year}>{year}</option>
              })
            }
          </select>
        </div>
        <div className="single-input long-input">
          <label htmlFor="degree">Qualification / Degree</label>
          <input type="text" id="degree" name="degree"></input>
        </div>
        <button type="button" className="cancel-button send" onClick={this.props.closeEducationForm}>Cancel</button> {/*use type="button" so the form does not submit when you press the button because it understands it is a common button and not a submit one*/}
        <button type="button" className="add-button send">Add</button>
      </div>
    )
  }
}

export default Education;
