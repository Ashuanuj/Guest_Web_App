import callApi from '../utility/call-api';
export const login = ap => callApi('authentication/login', ap, 'post', undefined);

export const getGuestServices = () => callApi('api/guestWebApp/services', undefined, 'get')
export const requestCreate = ap => callApi('api/guestWebApp/cart', ap, 'post');
export const loadGuestRequests = ap => callApi('api/guestWebApp/actions', ap, 'post', undefined);