import { request } from '@/utils/request';
import config from '@/config';
import { GetUserResp } from '@/typings/base';

class Service {
  async getBase() {
    const res = await request<null, GetUserResp>({
      method: 'get',
      url: `${config.HOST}/api/base`,
    });
    return res.data;
  }
}

export default new Service();
