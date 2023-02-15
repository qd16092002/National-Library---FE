export function SEARCH_USER_BY_KEYWORD(payload) {
    return {
        type: 'SEARCH_USER_BY_KEYWORD',
        payload,
    };
}
export function EDIT_DOCUMENT_BOOK(payload) {
    return {
        type: 'EDIT_DOCUMENT_BOOK',
        payload,
    };
}
export function RESET_EDIT_DOCUMENT_BOOK(payload) {
    return {
        type: 'RESET_EDIT_DOCUMENT_BOOK',
        payload,
    };
}
export function EDIT_DOCUMENT_BOOK_SUCCESS(payload) {
    return {
        type: 'EDIT_DOCUMENT_BOOK_SUCCESS',
        payload,
    };
}
export function EDIT_DOCUMENT_BOOK_FAIL(payload) {
    return {
        type: 'EDIT_DOCUMENT_BOOK_FAIL',
        payload,
    };
}
