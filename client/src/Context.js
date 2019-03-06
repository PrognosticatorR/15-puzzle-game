import React, { Component } from "react";
import { shift } from "./utils/utilities";
import { getInfo, createUser, loginUser, postResults } from "./utils/ApiCalls";
import { Redirect } from "react-router-dom";
import { findObj } from "./utils/utilities";
import history from "./utils/history";
const PlayerContext = React.createContext();
const Provider = PlayerContext.Provider;
const Consumer = PlayerContext.Consumer;

class StateProvider extends Component {
  state = {
    games: [],
    playername: "",
    playerInfo: {},
    player: {},
    results: {},
    id: "",
    time: 0,
    start: 0,
    errors: {},
    puzzle: [2, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false],
    successPuzzle: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, false],
    shuffles: 58,
    shuffleCount: 0,
    isAuthenticated: false,
    shifted: false,
    isOn: true,
    isWon: false,
    gameOver: false
  };

  componentDidMount() {
    getInfo().then(res => {
      let data = res.data;
      this.setState({ playerInfo: data });
    });
  }

  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  };

  stopTimer = () => {
    this.setState({ isOn: false, time: this.state.time });
    clearInterval(this.timer);
  };

  success = () => {
    const { puzzle, successPuzzle, isWon, shuffleCount, time } = this.state;
    if (JSON.stringify(puzzle) !== JSON.stringify(successPuzzle)) {
      return isWon;
    } else {
      this.stopTimer();
      this.setState({ isWon: true, time: this.state.time, isOn: false });
      postResults(`/api${history.location.pathname}`, shuffleCount, time);
    }
  };

  failure = () => {
    this.stopTimer();
    this.setState({ isWon: false, gameOver: true, isOn: false });
  };

  handleTileClick = index => {
    const { puzzle, shuffleCount, shuffles, shifted, isOn } = this.state;
    if (shuffles > 0 && isOn) {
      shift(index, puzzle, shifted);
      this.setState({
        puzzle: puzzle,
        shuffleCount: shuffleCount + 1,
        shuffles: shuffles - 1
      });
      this.success();
    } else {
      this.failure();
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleResetClick = player => {
    const { puzzle, id } = this.state;
    if (player) {
      this.setState({
        isAuthenticated: true,
        shuffles: 58,
        time: 0,
        puzzle: puzzle
      });
      return <Redirect to={`/game/${id}`} />;
    }
    return <Redirect to="/" />;
  };

  handleLoginClick = e => {
    e.preventDefault();
    let playerName = this.state.playername;
    let gameArr = this.state.playerInfo;
    let userObj = findObj(gameArr, playerName);
    if (playerName.length > 3) {
      if (userObj) {
        loginUser(userObj).then(() => {
          this.setState({
            player: userObj,
            id: userObj._id,
            isAuthenticated: true
          });
          history.push(`/game/${userObj._id}`);
        });
      } else {
        createUser(this.state).then(
          getInfo()
            .then(res => {
              let data = res.data;
              this.setState({
                playerInfo: data,
                isAuthenticated: true
              });
            })
            .then(() => {
              gameArr = this.state.playerInfo;
              userObj = findObj(gameArr, playerName);
              if (userObj) {
                history.push(`/game/${userObj._id}`);
              }
            })
        );
      }
    }
    this.nameValidation(playerName);
  };

  nameValidation = playerName => {
    let errors = {};
    let inputIsValid = true;
    if (playerName.length === 0) {
      inputIsValid = false;
      errors["playername"] = "Cannot be empty !";
    } else if (playerName.length <= 2 && playerName !== 0) {
      inputIsValid = false;
      errors["playername"] = "Cannot be less then 3 charecters !";
    }
    this.setState({ errors: errors });
    return inputIsValid;
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          startTimer: this.startTimer,
          stopTimer: this.stopTimer,
          handleTileClick: this.handleTileClick,
          handleChange: this.handleChange,
          handleLoginClick: this.handleLoginClick,
          handleResetClick: this.handleResetClick
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
export { StateProvider, Consumer };
