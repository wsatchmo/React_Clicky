import "./App.css"

import React, {Component} from 'react';
import {Navbar, Card, Jumbotron, CardImg} from 'react-bootstrap';
import {CardBody, CardTitle} from 'reactstrap';
import characters from "./characters.json";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isGuessCorrect: true,
      characters: characters,
      score: 0,
      maxScore: 16,
      topScore: 0,
      message: "Choose your fighter - defeat all challengers!"
    };
  }

  /*Game Logic*/

  // Click handler
  handleSaveClick = id => {
    console.log("CLICKED: ", this.state.characters);
    console.log("Id: ", parseInt(id.currentTarget.id.trim()));
    //Get that id
    let currentId = parseInt(id.currentTarget.id.trim());
    // Character's state
    const tyle = this.state.characters;
    // Match clicked id to characters
    const tileClicked = tyle.filter(tile => tile.id === currentId);
    //WHY THE F$%^ IS THIS NOT FILTERING RIGHT?@?!!>
    
    console.log("Is tile clicked?: ", tileClicked);

    // If tile isn't clicked, it is now
    if (!tileClicked[0].clicked) {
      tileClicked[0].clicked = true;
      this.handleCorrectClick();

      // Randomize characters
      this.randomizeCharacters(tyle);

      this.setState({ tyle });
    } else {
      this.handleIncorrectClick();
    }
  };

  // Randomize function
  randomizeCharacters = randomize => {
    randomize.sort((a, b) => {
      return 0.5 - Math.random();
    });
  };

  // Handles correct guess
  handleCorrectClick = () => {
    this.setState({ isGuessCorrect: true });
    if (this.state.score + 1 > this.state.topScore) {
      this.setState({ topScore: this.state.topScore + 1 });
    }
    if (this.state.score + 1 >= this.state.maxScore) {
      this.setState({
        score: this.state.score + 1,
        message: "A new champion! HADOUKEN!",
        messageClass: "correct"
      });
      this.resetGame();
    } else {
      this.setState({
        score: this.state.score + 1,
        message: "Another enemy defeated...",
        messageClass: "correct"
      });
    }
  };

  // Handles incorrect guesses
  handleIncorrectClick = () => {
    this.setState({
      message: "Never stood a chance.",
      isGuessCorrect: false
    });
    this.resetGame();
  };

  // Reset
  resetGame = () => {
    const tyle = this.state.characters;
    for (let i = 0; i < tyle.length; i++) {
      tyle[i].clicked = false;
    }
    this.setState({ score: 0 });
  };

  // Render to the page
  render() {
    const { message, score, characters, topScore } = this.state;
    return (
      <div className="fluid-container">
        <Navbar>
          <h3 className="score-right">Score: {score}</h3>
          <h3 className="score-left">High Score: {topScore}</h3>
        </Navbar>
        <Jumbotron className="text-center row jumbo" id="jumbo-style"> 
          <h2 className="text-center main-text">{message}</h2>
        </Jumbotron>

        <div className="justify-content-center flex-wrap row">
          {characters.map(({ id, name, image }) => (
            <Card className="card-whole"
              name={name}
              onClick={this.handleSaveClick}
              id={id}
              key={id}
            >
              <CardImg width="100%" id={id} src={image} alt="Card image cap"/>
              <CardBody id={id}>
                <CardTitle className="text-center card-names"><strong className="fighter">{name}</strong></CardTitle>
              </CardBody> 
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;