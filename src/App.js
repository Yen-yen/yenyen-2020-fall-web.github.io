import React from 'react';
import logo from './logo.svg';
import './App.css';
// import './styles.css';

// function App() {
//   return (
//     <h1>hello,world!</h1>
//   );
// }


class ScoreCard extends React.Component {
  render() {
    let tbodyNode = this.props.scoreCard.records.map(e => <tr>{e.map(g => <td>{g}</td>)}</tr>);
    return (
      <table>
        <caption>{this.props.scoreCard.name}'s Score</caption>
        <thead>
          <tr>
            {this.props.columnIndex.map(e => <th>{e}</th>)}
          </tr>
          <tbody>
            {tbodyNode}
          </tbody>
        </thead>
      </table >);
  }
}
export default ScoreCard;
