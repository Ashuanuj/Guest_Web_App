import { camelizeKeys, decamelizeKeys } from 'humps';
import fetch from 'isomorphic-fetch';
import qs from 'qs';

export default function callApi(endpoint, body, method, queryData, isFile = false, outside = false) {
     const headers = new Headers();
     const accessToken = localStorage.getItem('accessToken');
     const passwordUpdatedAt = 1556194811//localStorage.getItem('passwordUpdatedAt');
     let bodyData = body;
     let queryParams = '';

     if (queryData) {
          queryParams = `?${qs.stringify(queryData, { encode: false, indices: false })}`;
     }

     if (!isFile) {
          headers.append('content-type', 'application/json');
          bodyData = JSON.stringify(decamelizeKeys(body));
     }

     if (accessToken) {
          headers.append('Authorization', accessToken);
          headers.append('passwordUpdatedAt', passwordUpdatedAt);
     }

     let URL = 'https://heliusbe.tech-active.com:70';

     URL = `${URL}/${endpoint}${queryParams}`;

     return fetch(URL, {
          headers,
          method: method || (body ? 'post' : 'get'),
          mode: 'cors',
          body: bodyData,
     }).then(response => response.json().then(json => ({ json, response })))
          .then(({ json, response }) => {
               const camelizedJson = camelizeKeys(json);

               if (!response.ok) {
                    if (json.logout !== undefined && json.logout.status !== undefined) {
                         try {
                              localStorage.removeItem('userId');
                              localStorage.removeItem('userName');
                              localStorage.removeItem('userImg');
                              localStorage.removeItem('userRoles');
                              localStorage.removeItem('userAppRoles');
                              localStorage.removeItem('accessToken');
                              localStorage.removeItem('voicelayerToken');
                              localStorage.removeItem('voicelayerId');
                              localStorage.removeItem('passwordUpdatedAt');
                              //  history.push(`/user`);
                              return true;
                         }
                         catch (error) {
                              return false;
                         }
                    }
                    return Promise.reject(camelizedJson);
               }

               return camelizedJson.data;
          });
}