import React from 'react';
import Question from "./question";
import { addResult } from "../actions/index";
import {connect} from 'react-redux';


class Quiz extends React.Component {


    questions = [
        {
            id: 1,
            category:'Math',
            content:"1+2=3",
            answer: true
        },

        {
            id: 2,
            category:'Math',
            content:"6 + 66 = 666",
            answer: false
        },

        {
            id: 3,
            category:'Math',
            content:"88 / 0 = 0",
            answer: false
        },

        {
            id: 4,
            category:'Math',
            content:"30% of x is equal to 0.3x",
            answer: true
        },

        {
            id: 5,
            category:'Math',
            content:"\"x is at most equal to 9\" is written mathematically as x < 9.",
            answer: false
        },
        {
            id: 6,
            category:'Math',
            content:"The set of ordered pairs {(6,4),(2,-5),(-2,4),(6,-4)} is a function.",
            answer: false
        },

        {
            id: 7,
            category:'Math',
            content:"The additive inverse of -10 is 10.",
            answer: true
        },

        {
            id: 8,
            category:'JavaScript',
            content:"What is the value of !!function(){}",
            answer: true
        },

        {
            id: 9,
            category:'JavaScript',
            content:"As [] is true, []==true should also be true. right?",
            answer: false
        },

        {
            id: 10,
            category:'JavaScript',
            content:"the value of 4+3+2+\"1\" will be 91",
            answer: true
        }
    ];




    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            selectedQuestion: this.questions[0]
        };
    }


    componentDidMount() {
      console.log("quiz page");
    }

    componentWillUnmount() {

    }


    toggleAnswer(question, answer) {
        let index = this.questions.indexOf(question);
        if(index >= 0 ){
            let result = {};
            result.content = question.content;
            result.answer = answer;
            result.isCorrect = (question.answer === answer);
            this.props.dispatch(addResult(result));

            if(index === this.questions.length - 1){
                this.props.history.push('./result');
            }else{
                this.setState(
                    {
                        selectedQuestion: this.questions[index+1]
                    }
                );
            }
        }

    }

    render() {
        return <div>
                    <div>
                        <Question
                            question = {this.state.selectedQuestion}
                            toggleAnswer = {(question, answer) => this.toggleAnswer(question, answer)}
                        />
                    </div>
                </div>;
    }
}

export default connect()(Quiz)

// export default Quiz;