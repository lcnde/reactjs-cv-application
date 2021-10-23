import React, { Component } from 'react';

class WorkOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return(
      <div className="education-container">
        <h2>Work Experience</h2>
        {
          this.props.work_list.map((e) => {
            return(
              <div className="work-card">
                <div className="work-card-left">
                  <div>{e.company}</div>
                  <div>{e.city}</div>
                  <div>{e.from_year}-{e.to_year}</div>
                </div>
                <div className="work-card-right">
                  <div>{e.role}</div>
                  <div>{e.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WorkOverview;
