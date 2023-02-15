import { combineReducers } from 'redux';
import { REQUEST_STATE } from '~/app-configs';
import {
    EDIT_DOCUMENT_BOOK,
    EDIT_DOCUMENT_BOOK_FAIL,
    EDIT_DOCUMENT_BOOK_SUCCESS,
    RESET_EDIT_DOCUMENT_BOOK,
    SEARCH_USER_BY_KEYWORD,
} from '~/containers/app/screens/Feature/redux/action';

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
    editAccount: (state = defaultState, action) => {
        switch (action.type) {
            case EDIT_DOCUMENT_BOOK().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.REQUEST,
                };
            }
            case EDIT_DOCUMENT_BOOK_SUCCESS().type: {
                const { data } = action.payload;
                return {
                    ...state,
                    data: data,
                    state: REQUEST_STATE.SUCCESS,
                };
            }
            case EDIT_DOCUMENT_BOOK_FAIL().type: {
                return {
                    ...state,
                    state: REQUEST_STATE.ERROR,
                };
            }
            case RESET_EDIT_DOCUMENT_BOOK().type: {
                return {
                    ...defaultState,
                };
            }

            default:
                return state;
        }
    },
});
