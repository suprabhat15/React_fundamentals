import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Kumar", age: 22 },
      { name: "Suprabhat", age: 21 },
      { name: "Sakshat", age: 20 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    //  console.log("Was Clicked!");
    //DON'T DO THIS: this.state.persons[0].name = "Suprabhat Kumar";
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Suprabhat", age: 21 },
        { name: "Sakshat", age: 21 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Suprabhat Kumar", age: 22 },
        { name: event.target.value, age: 21 },
        { name: "Sakshat", age: 21 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app.</h1>
        <p>This is really working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Sakshi")}
              changed={this.nameChangedHandler}
            >
              I like Cricket.
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "This is Sakshat.");
  }
}

export default App;
