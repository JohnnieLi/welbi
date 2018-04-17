import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Introduction from './components/introductionScreen';
import Quiz from './components/quizScreen';
import Result from './components/resultScreen';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to the Trivia Challenge</h1>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Introduction}/>
                        <Route path="/quiz" component={Quiz}/>
                        <Route path="/result" component={Result}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
