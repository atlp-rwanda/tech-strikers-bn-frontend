import React from "react";
import "./style/style.css";
import axios from "axios";

class Approval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  //   componentDidMount() {
  //     fetch('http://jsonplaceholder.typicode.com/todos')
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ todos: data })
  //       console.log(this.state.todos)
  //     })
  //     .catch(console.log)
  //   }

  async componentDidMount() {
    try {
      const url = "https://nba-players.herokuapp.com/players-stats";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ players: data });
    } catch (e) {
      console.log("error");
    }
  }
  renderTableHeader() {
    let header = Object.keys(this.state.players[0]);
    console.log(header);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.players.map((player, index) => {
      const { name, team_name, team_acronym, minutes_per_game } = player;

      return (
        <tr key={name}>
          <td>{team_name}</td>
          <td>{name}</td>
          <td>{team_acronym}</td>
          <td>{minutes_per_game}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 id="title">Trial table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Approval;
