import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/Help.js';
import Navigation from "./components/Navigation";
import Help from "./components/Help";
import About from "./components/About";
import Video from "./components/Video";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Square(props) {

        const style = {
            color:'red',
            width:'150px',
            height:'150px',
            margin: '0',
            padding: '0'
        };

        return (
            <button style={style} className="square" onClick={props.onClick}>
                {props.value}
            </button>
        );
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : '0';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });

    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// curl --location --request GET 'https://public-api.tracker.gg/v2/apex/standard/search?platform=psn&query=Daltoosh' \
// --header 'TRN-Api-Key: 3d26b63b-49c6-4b0d-bc6b-1c31e24250de'

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Router>
                    <Navigation/>

                    <Switch>
                        <Route path="/video" component={Video}/>
                        <Route path="/help" component={Help}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </Router>

                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}