import React from 'react';
import Question from "./question";
import { addResult } from "../actions/index";
import {connect} from 'react-redux';


class Quiz extends React.Component {


    questions = [
        {
            id: 1,
            content:"test1",
            answer: true
        },

        {
            id: 2,
            content:"test2",
            answer: true
        },

        {
            id: 3,
            content:"test3",
            answer: false
        },

        {
            id: 4,
            content:"test4",
            answer: false
        },

        {
            id: 5,
            content:"test5",
            answer: false
        },
        {
            id: 6,
            content:"test6",
            answer: true
        },

        {
            id: 7,
            content:"test7",
            answer: true
        },

        {
            id: 8,
            content:"test8",
            answer: false
        },

        {
            id: 9,
            content:"test9",
            answer: false
        },

        {
            id: 10,
            content:"test10",
            answer: false
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