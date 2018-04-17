import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import {connect} from 'react-redux';
import { clearResult } from "../actions/index";


class Introduction extends React.Component {


    constructor(props) {
        super(props);
        //clear the exist store results
        this.props.dispatch(clearResult());
    }


    componentWillUnmount() {
    }

    render() {
        return <div className="App">
                    <p className="App-intro">
                        You will be presented with 10 True or False Questions. Can you score 100%?
                    </p>
                    <button className="btn">
                        <Link to="/quiz">Start Quiz</Link>
                    </button>
               </div>
    }

}

export default connect()(Introduction)
