export const addResult = result => ({
        type: 'ADD_RESULT',
        payload: {
            content: result.content,
            answer: result.answer,
            isCorrect: result.isCorrect
        }
});

export const clearResult = () => ({
    type: 'CLEAR_RESULTS',
});

