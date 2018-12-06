import React, { Component } from 'react';


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],

    }

    this.reportsRef = this.props.firebase.database().ref('reports');
  }

  componentDidMount() {
    this.reportsRef.on('child_added', snapshot => {
        const report = snapshot.val();
        report.key = snapshot.key;
        this.setState({ reports: this.state.text.concat(report) });
      });
    }

  formatTime(time) {
    const date = time ? new Date(time) : new Date()
    const year = date.getFullYear();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const min = ('0' + date.getMinutes()).slice(-2);
    const sec = date.getSeconds();
    const timestamp = month + ' ' + day + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return timestamp;
    }

  createNewReport(e) {
    this.reportsRef.push({
        name: this.state.newReport
    });
    e.preventDefault();
    this.setState({ newReport: ''})
    }

  handleSubmit(e) {
    this.setState({newReport: e.target.value})
    }

  render() {
    return(
      <div>
        <h2>Report Data goes here</h2>
        <form class="left clearfix"  onSubmit={ (e) => this.createNewReport(e) } >

          <input type="text" value={this.state.newReport}
          placeholder="New Report" onChange={ (e) => this.handleSubmit(e)} />
          <input type="submit" value="Submit"  />
        </form>
          <p>{this.formatTime()}</p>
      </div>
    )
  }
}

export default Report;
