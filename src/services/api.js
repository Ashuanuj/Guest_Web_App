import callApi from '../utility/call-api';
export const login = ap => callApi('authentication/login', ap, 'post', undefined);

export const getGuestServices = () => callApi('api/guestWebApp/services', undefined, 'get')