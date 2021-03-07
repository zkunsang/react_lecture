MyComponent.propTypes = {

}

// 컴포넌트에 이름을 작성하자
// 이름을 작성하지 않으면 디버깅이 힘들 수 있다.

// 명명된 형태가 좋다 {prop1, prop2}와 같이
export default function MyComponent({ prop1, prop2 }) {

}

// 변수명은 대문자
// 이런 데이터는 외부에 놓는다
// 컴포넌트 안에 생성하면 컴포넌트가 돌아갈때마다 생성됨
const COLUMNES = [
    { id: 1 },
    { id: 1 },
    { id: 1 }
];
