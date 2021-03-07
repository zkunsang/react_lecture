import PropTypes from 'prop-types';

// propTypes는 훌륭한 문서가 된다.
User.propTypes = {
    male: PropTypes.bool.isRequired,
    age: function (props, propName, componentName) {
        const value = props[propName];
        if (value < 10 || value > 20) {
            return new Error(`${propName} ${componentName}`)
        }
    },
    type: PropTypes.oneOf(['gold', 'silver', 'bronze']),

    onChangeName: PropTypes.func,
    onChangeTitle: PropTypes.func.isRequired
};

export default function User({ type, age, male, onChangeName, onChangeTitle }) {
    function onClick1() {
        const msg = `type: ${type} , age : ${age ? age : '알 수 없음'}`;
        log(msg, { color: type === 'gold' ? 'red' : 'black' });
    }

    function onClick2(name, title) {
        if (onChangeName) {
            onChangeName(name);
        }
    }

    onChangeTitle(title);
    male ? goMalePage() : goFemalePage();
}