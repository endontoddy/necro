import React, { Component } from 'react';
import "./App.css"
import InlineEditable from "react-inline-editable-field";


class App extends Component {
  render() {
    return (
      <Roster />
    );
  }
}

class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gangName : "The Iron Lords",
      house : "Goliath",
      rating : 0,
      reputation : 1,
      turfSize : 1,
      territories : [
        "Tool Shop"
      ],
      stash : [
        "Lasgun"
      ],
      credits : "0",
      fighters : [
        {
          name : "Jeleena",
          type : "Leader",
          cost : 240,
          experience : 0,
          advances : 0,
          inRecovery : false,
          capturedBy : null
        }
      ]
    };
  }

  render() {

    const territories = this.state.territories.map( (territory) => <tr><td colspan="3">{territory}</td></tr> );
    const stash = this.state.stash.map( (item) => <tr><td colspan="3">{item}</td></tr> );
    const fighters = this.state.fighters.map( (fighter) =>
    <tr>
      <td>{fighter.name}</td>
      <td>{fighter.type}</td>
      <td>{fighter.cost}</td>
      <td>{fighter.experience}</td>
      <td>{fighter.advances}</td>
      <td>{fighter.inRecovery ? "Yes" : "No "}</td>
      <td>{fighter.capturedBy || "-" }</td>
    </tr>
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <table className="table">
              <tbody>
                <tr><th colspan="3">Gang Name</th></tr>
                <tr><td colspan="3"> <TextEdit parent={this} element="gangName"  /> </td></tr>

                <tr><th colspan="3">House</th></tr>
                <tr><td colspan="3">{this.state.house}</td></tr>

                <tr>
                  <th>Gang Rating</th>
                  <th>Reputation</th>
                  <th>Turf Size</th>
                </tr>
                <tr>
                  <td>{this.state.rating}</td>
                  <td>{this.state.reputation}</td>
                  <td>{this.state.turfSize}</td>
                </tr>

                <tr><th colspan="3">Special Territories</th></tr>
                {territories}

                <tr><th colspan="3">Stash</th></tr>
                {stash}
                <tr><td colspan="3"><TextEdit parent={this} element="credits"  /> credit(s)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="col-sm-10">
            <table className="table">
              <tbody>
                <tr>
                  <th>Fighter Name</th>
                  <th>Type</th>
                  <th>Cost</th>
                  <th>XP</th>
                  <th>ADV</th>
                  <th>REC</th>
                  <th>Captured By</th>
                </tr>
                {fighters}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function TextEdit(props) {
  return (
    <InlineEditable
      content={props.parent.state[props.element]}
      onBlur={(val, isChanged) => { if(isChanged) {props.parent.setState({ [props.element]: val})}}}
      className={props.element + "Edit"}
    />
  );
}

export default App;
