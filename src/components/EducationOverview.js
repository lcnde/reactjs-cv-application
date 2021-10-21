import React, { Component } from 'react';

class EducationOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <ul>
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
      </ul>
    )
  }
}

export default EducationOverview;
