import { TOKEN_KEY } from '~/app-configs';
import { REQUEST_STATE } from '~/app-configs';
import { POST } from '~/app-data/fetch';
import { GET } from '~/app-data/fetch';
// const BASE_URL = 'http://localhost:8080/StudentMgr'

// Sinh Vien
// const API_STUDENT_LIST = '/api/student/list'
// const API_STUDENT_ADD = '/api/student/add'
// const API_STUDENT_UPDATE = '/api/student/update'
// const API_STUDENT_DELETE = '/api/student/delete'

export const apiLogin = async (params) => {
    try {
        const response = await POST('/auth/institution/login', params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};

export const apiProfile = async () => {
    try {
        const response = await GET(
            '/institution',
            {
                token: localStorage.getItem(TOKEN_KEY),
            },
            { isFullPath: false },
        );
        return {
            state: REQUEST_STATE.SUCCESS,
            data: response,
        };
    } catch (error) {
        console.log('error', error);
        return {
            error: error,
            state: REQUEST_STATE.ERROR,
            data: {},
        };
    }
};
