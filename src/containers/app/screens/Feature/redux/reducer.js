import { combineReducers } from 'redux';
import { SEARCH_USER_BY_KEYWORD } from './action';

const defaultState = {
    state: null,
    data: null,
};

export default combineReducers({
    list: (state = defaultState, action) => {
        switch (action.type) {
            case SEARCH_USER_BY_KEYWORD().type: {
                let filterData = state.data.filter((filterUser) => {
                    console.log('name: ', filterUser);
                    return (
                        filterUser.name.toLocaleLowerCase().includes(action.payload?.keyword.toLocaleLowerCase()) ||
                        filterUser.email.toLocaleLowerCase().includes(action.payload?.keyword.toLocaleLowerCase())
                    );
                });
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                    filterData: filterData,
                };
            }
            default:
                return state;
        }
    },
});
