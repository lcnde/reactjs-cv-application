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

  render() {

    const currentYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(70),
                          (val, index) => (index-69) + currentYear);

    return (
      <form>
        <div className="single-input long-input">
          <label htmlFor="school">University or School</label>
          <input type="text" id="school" name="school"></input>
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
        <button className="cancel-button send">Cancel</button>
        <button className="add-button send" type="submit" value="Submit">Add</button>
      </form>
    )
  }
}

export default Education;
