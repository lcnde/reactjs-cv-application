import React, { Component } from 'react';

class EducationOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div className="education-container">
        <h2>Degree</h2>
        {
          this.props.education_list.map((e) => {
            return (
              <div className="education-card">
                <div>{e.university}</div>
                <div className="years-container">
                  <div>From year: {e.from_year}</div>
                  <div>To year: {e.to_year}</div>
                </div>
                <div>{e.degree} degree</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default EducationOverview;
