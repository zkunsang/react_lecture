const pringLog = store => next => action => {
    console.log(`prev state = ${JSON.stringify(store.getState())}`);
    const result = next(action);
    console.log(`next state = ${JSON.stringify(store.getState())}`);
    return result;
}

// next에서 리듀서가 실행이됨