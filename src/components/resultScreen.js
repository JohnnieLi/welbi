import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import store from '../store/index';


class Result extends React.Component {

    results;
    score = 0;

    constructor(props) {
        super(props);
        this.results = store.getState().results;
        console.log(this.results);
    }



    componentWillUnmount() {
    }

    render() {
        let self = this;
        return (
            <div>
                <ul>
                    {
                        this.results.map(function(value, index){
                            let sign = '';
                        if(value.isCorrect){
                            self.score ++;
                            sign = '[+]';
                        }else{
                            sign = '[-]';
                        }
                        return <li key={ index }> {sign} {value.answer+''} : {value.content}</li>;
                    })}
                </ul>
                <span>With "+" meaning correct and "-" meaning incorrect.</span>

                <div>
                    <p> Your score was {this.score}/10</p>
                </div>
                <div>
                    <button>
                        <Link to="/">Take Quiz again</Link>
                    </button>
                </div>
            </div>
        );
    }




}

export default connect()(Result)
