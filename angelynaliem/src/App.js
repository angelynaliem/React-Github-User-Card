import React from 'react';
import Angelyn from './components/Angelyn';
import Followers from './components/Followers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData : [],
      githubFollowersData : [],

  }

  };

  componentDidMount() {
    fetch("https://api.github.com/users/angelynaliem")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      console.log("al: App.js: App: CDM: fetch result: ", json);
      if(json.status !== "error") {
        this.setState({ githubData: json});
        console.log(json)
      }
    })
    .catch((err) => console.error("failure to fetch data ", err.message));

    fetch("https://api.github.com/users/ericcapiz")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      this.setState({ githubFollowersData: json});
    })
    .catch((err) => console.error("failure to fetch data ", err.message));
  }

  render() {
    return (
      <div>
        <h1>Hello, I'm {this.state.githubData.name}.</h1>
        <Angelyn angelyn={this.state.githubData} />
        <div>
        <h2>My Followers</h2>
        <Followers followers={this.state.githubFollowersData} />
        </div>
      </div>
    )

  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
