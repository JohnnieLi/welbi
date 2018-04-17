import React from 'react';
import '../App.css';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    componentWillUnmount() {
    }

    handleClick(answer) {
        this.props.toggleAnswer(this.props.question, answer);
    }

    render() {
        return (
            <div>
                <p>#{this.props.question.id}  Category : {this.props.question.category}</p>
                <p>{this.props.question.content}</p>
                <div>
                    <button className="btn" onClick={()=>this.handleClick(true)}>
                        True
                    </button>
                    <button className="btn" onClick= {()=>this.handleClick(false)}>
                        False
                    </button>
                </div>
            </div>
        );
    }




}

export default Question;