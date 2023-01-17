import {getToken} from '../lib/token/token';

export const config = {
  headers: {'x-token': getToken()}
};

export const enum HttpErrorMessage {
  ON_LOGIN_REJECTED = 'Авторизация не удалась'
}
