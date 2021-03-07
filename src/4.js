const myMiddleware = store => next => action => next(action);
// 세번 감싸진 이유는
// store와 next를 사용하기 위해