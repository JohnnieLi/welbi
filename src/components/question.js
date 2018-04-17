import React from 'react';


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
                    <button onClick={()=>this.handleClick(true)}>
                        True
                    </button>
                    <button onClick= {()=>this.handleClick(false)}>
                        False
                    </button>
                </div>
            </div>
        );
    }




}

export default Question;