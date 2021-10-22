import React, { Component } from 'react';

class EducationOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div>
        <h1>hi</h1>
        {
          this.props.education_list.map((e) => {
            return (
              <div className="education-card">
                <li>{e.university}</li>
                <li>{e.from_year}</li>
                <li>{e.to_year}</li>
                <li>{e.degree}</li>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default EducationOverview;
