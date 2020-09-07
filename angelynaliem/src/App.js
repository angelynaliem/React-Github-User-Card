import React from 'react';
import Angelyn from './components/Angelyn';
import Followers from './components/Followers';
import Followers2 from './components/Followers2';
import Followers3 from './components/Followers3';
import './App.css';

// const followersArray = [
//   "https://api.github.com/users/ericcapiz",
//   "https://api.github.com/users/kwmorlock",
//   "https://api.github.com/users/KVlearn",
//   "https://api.github.com/users/robledokari",
//   "https://api.github.com/users/MarcGallegos",
//   "https://api.github.com/users/ch46gc",
// ]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubData : [],
      githubFollowersData : [],
      githubFollowersData2 : [],
      githubFollowersData3 : [],

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

    // followersArray.forEach(follower => { 
    fetch("https://api.github.com/users/ericcapiz")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      this.setState({ githubFollowersData: json });
    })
    .catch((err) => console.error("failure to fetch data ", err.message));
  

  fetch("https://api.github.com/users/kwmorlock")
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    this.setState({ githubFollowersData2: json });
  })
  .catch((err) => console.error("failure to fetch data ", err.message));


fetch("https://api.github.com/users/KVlearn")
.then((res) => res.json())
.then((json) => {
  console.log(json);
  this.setState({ githubFollowersData3: json });
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
        <Followers2 followers2={this.state.githubFollowersData2} />
        <Followers3 followers3={this.state.githubFollowersData3} />
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
