import React, { Component } from 'react';

class Education extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    const currentYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(70),
                          (val, index) => (index-69) + currentYear);

    return (
      <div className="sub-form">
        <div className="single-input long-input">
          <label htmlFor="school">University or School</label>
          <input 
            type="text" 
            id="school" 
            name="school"
            onChange={this.props.onChangeEducation}
            value={this.props.education.university} //this.state....
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
        <button type="button" 
                className="cancel-button send" 
                onClick={this.props.closeEducationForm}>
          Cancel
        </button> {/*use type="button" so the form does not submit when you press the button because it understands it is a common button and not a submit one*/}
        <button type="button" 
                className="add-button send"
                onClick={this.props.onSubmitEducation}>                
          Add
        </button>
      </div>
    )
  }
}

export default Education;
