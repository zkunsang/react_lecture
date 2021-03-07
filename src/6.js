// 리듀서 코드 작성시 유의사항
// selectedPeople을 find를 통한 오브젝트 객체를 저장했는데
// 그것보다는 action.id를 저장하는게 괜찮다.
// EditPeople_name을 해서 해당 객체의 이름이 바뀌게 되면
// 불변 객체로서 새로운 녀석이 생걸테지만
// selectedPeople에는 이전 값을 가지고 있어서 원하는 결과가 안나올수 있다.
function reducer(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case SET_SELECTED_PEOPLE:
                draft.selectedPeople = draft.peopleList.find(
                    item => item.id === action.id
                )
                break;
            case EDIT_PEOPLE_NAME:
                const people = draft.peopleList.find(item => item.id === action.id);
                people.name = action.name;
                break;
        }
    })
}