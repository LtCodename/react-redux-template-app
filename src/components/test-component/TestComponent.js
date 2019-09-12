import React from 'react';
import reducers from '../../redux/reducers';
import { connect } from 'react-redux'
import './TestComponent.css';

class TestComponent extends React.Component {

  constructor(props) {
    super(props);

    this.teamInputValueChange = this.teamInputValueChange.bind(this);
    this.driverInputValueChange = this.driverInputValueChange.bind(this);
    this.onAddTeamAction = this.onAddTeamAction.bind(this);
    this.onAddDriverAction = this.onAddDriverAction.bind(this);

    this.state = {
      teamInputValue: "",
      driverInputValue: ""
    };
  }

  onAddTeamAction(){
    this.props.addTeamAction(this.state.teamInputValue);
    this.setState({
      teamInputValue: ""
    })
  }

  onAddDriverAction(){
    this.props.addDriverAction(this.state.driverInputValue);
    this.setState({
      driverInputValue: ""
    })
  }

  teamInputValueChange(event) {
    this.setState({
      teamInputValue: event.target.value
    })
  }

  driverInputValueChange(event) {
    this.setState({
      driverInputValue: event.target.value
    })
  }

  render() {
    const addNewTeam = (
      <div>
        <p>Add Team</p>
        <input className="form-control" type="text" placeholder="New Team" value={this.state.teamInputValue} onChange={this.teamInputValueChange}></input>
        <button className="btn" onClick={this.onAddTeamAction}>Add Team</button>
      </div>
    );

    const addNewDriver = (
      <div>
        <p>Add Driver</p>
        <input className="form-control" type="text" placeholder="New Driver" value={this.state.driverInputValue} onChange={this.driverInputValueChange}></input>
        <button className="btn" onClick={this.onAddDriverAction}>Add Driver</button>
      </div>
    );

    return (
      <div>
        <p>Teams List</p>
        <p className="highlited">{this.props.teams}</p>
        <p>Drivers List</p>
        <p className="highlited">{this.props.drivers}</p>
        {addNewTeam}
        {addNewDriver}
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return {
    addTeamAction: (team) => {
      dispatch({ type: reducers.actions.ADD_TEAM, team: team });
    },
    addDriverAction: (driver) => {
      dispatch({ type: reducers.actions.ADD_DRIVER, driver: driver });
    }
  }
};

const stateToProps = (state = {}) => {
  return {
    teams: state.teams,
    drivers: state.drivers
  }
};

const ConnectedTestComponent = connect(stateToProps, dispatchToProps)(TestComponent);

export default ConnectedTestComponent;
