import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const currentYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(70),
                          (val, index) => (index-69) + currentYear);

    return(
      <div className="sub-form">
        <div className="single-input">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            onChange = {this.props.handleChangeCompany}
            value={this.props.work.company}
            required
          ></input>
        </div>
        <div className="single-input">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange = {this.props.handleChangeCity}
            value={this.props.work.city}
            required
          ></input>
        </div>
        <div className="single-input">
          <label htmlFor="work-from-year">From year</label>
          <select id="to-year" 
                  name="to-year"
                  onChange = {this.props.handleChangeWoFromYear}
                  value={this.props.work.from_year}
          >
            <option value="" disabled selected hidden>Select year</option>
            {
              dropdownYears.map((year, index) => {
                return <option value={year}>{year}</option>
              })
            }
          </select>
        </div>
        <div className="single-input">
          <label htmlFor="work-to-year">To year</label>
          <select id="to-year" 
                  name="to-year"
                  onChange = {this.props.handleChangeWoToYear}
                  value={this.props.work.to_year}
          >
            <option value="" disabled selected hidden>Select year</option>
            {
              dropdownYears.map((year, index) => {
                return <option value={year}>{year}</option>
              })
            }
          </select>
        </div>
        <div className="single-input long-input">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            onChange = {this.props.handleChangeRole}
            value={this.props.work.role}
            required
          ></input>
        </div>
        <div className="single-input long-input">
          <label htmlFor="short-desc">Short description of responsibilities</label>
          <textarea
            type="text"
            id="short-desc"
            name="short-desc"
            onChange = {this.props.handleChangeDescription}
            value={this.props.work.description}
            required
          ></textarea>
        </div>
        <button type="button" 
                className="cancel-button send" 
                onClick={this.props.closeWorkForm}>
          Cancel
        </button> {/*use type="button" so the form does not submit when you press the button because it understands it is a common button and not a submit one*/}
        <button type="button" 
                className="add-button send"
                onClick={this.props.onSubmitWork}>                
          Add
        </button>
      </div>
    )
  }
}

export default Work;
