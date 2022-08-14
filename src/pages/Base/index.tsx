import { Spin, Toast } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import baseService from '@/apis/base';

export default () => {
  const [[loading, setLoading], [msg, setMsg]] = [
    useState(true),
    useState('initing'),
  ];
  useEffect(() => {
    (async () => {
      try {
        const ret = await baseService.getBase();
        if (ret.error) {
          throw new Error(ret.message);
        }
        setMsg(ret.data.message);
      } catch (e) {
        Toast.error((e as Error).message || '获取基础信息失败');
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div className="h-full">
      <Spin wrapperClassName="w-full h-full" spinning={loading}>
        {msg}
      </Spin>
    </div>
  );
};
