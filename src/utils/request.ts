import Axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { Toast } from '@douyinfe/semi-ui';

interface ReturnSuccessResponse<T> {
  error: 0;
  data: T;
}

interface ReturnErrorResponse {
  error: 1;
  message: string;
}

type ReturnResponse<T> = ReturnSuccessResponse<T> | ReturnErrorResponse;

const axios = Axios.create({
  timeout: 7000,
  responseType: 'json',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

const showMessageWithStatus = (status: number | string): void => {
  let message = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 403:
      message = '请求错误(403)';
      break;
    case 404:
      message = '路径不存在(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '目标服务错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
  }
  Toast.destroyAll();
  Toast.error(message);
};

axios.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      showMessageWithStatus(response.status);
    }
    return response;
  },
  error => {
    const { response } = error;
    if (response) {
      showMessageWithStatus(response.status);
      return Promise.reject(response);
    } else {
      Toast.error('服务连接异常，请稍后重试！');
      return Promise.reject(error);
    }
  },
);

export const request: <Req, Res>(
  req: AxiosRequestConfig<Req>,
) => AxiosPromise<ReturnResponse<Res>> = req => axios(req);
