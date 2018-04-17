const results = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RESULT':
            return [
                ...state,
                {
                    content: action.payload.content,
                    answer: action.payload.answer,
                    isCorrect: action.payload.isCorrect
                }
            ];
        case 'CLEAR_RESULTS':
            state = []
            return state;
        default:
            return state
    }
};

export default results