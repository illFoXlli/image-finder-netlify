import { Component } from 'react';

export class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Hallo</h1>
      </div>
    );
  }
}

// Забирать данны из LS
// componentDidMount() {
//   if (JSON.parse(localStorage.getItem('fox'))) {
//     this.setState({ contacts: JSON.parse(localStorage.getItem('fox')) });
//   }
// }
// Запись в LS
// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     console.log('Что то обновилось типа контакт');
//     localStorage.setItem('fox', JSON.stringify(this.state.contacts));
//   }
// }
