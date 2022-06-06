export const SUBMIT_USER = 'SUBMIT_USER';

// The function, user, is an 'action creator'
// The return value is an 'action'
export function submitUser(input) {
    return {
        type: SUBMIT_USER,
        payload: {
            user: input
        }
    }
}