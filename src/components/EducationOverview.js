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
            return <li>{e.university}</li>
          })
        }
      </ul>
    )
  }
}

export default EducationOverview;
