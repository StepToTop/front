import { Space, Typography, Spin } from '@douyinfe/semi-ui';
import { useEffect, useState } from 'react';
import Card from './components/card';
import config from '@/config';
import { WSCurrencyData } from '@/typings/base';

const { Title } = Typography;

export default () => {
  const [wcd, setWcd] = useState<WSCurrencyData>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const ws = new WebSocket(`${config.WSHOST}/ws/v1`);
    ws.onopen = () => {
      ws.send('message');
    };
    ws.onmessage = ({ data }) => {
      const curData = JSON.parse(data);
      for (const key in curData) {
        curData[key] = JSON.parse(curData[key]);
      }
      setLoading(false);
      setWcd(curData);
    };
  }, []);

  return (
    <div
      style={{
        padding: '32px',
      }}
    >
      <Space className="w-full ml-auto mr-auto" vertical={true} align="start">
        <Title heading={4}>CryptoCurrency Realtime Price</Title>
        <Spin spinning={loading} wrapperClassName="w-full">
          <Space className="w-full mt-4 flex-wrap" spacing={16}>
            {wcd &&
              Object.keys(wcd).map((key: any) => (
                <Card key={key} data={wcd[key as keyof WSCurrencyData]} />
              ))}
          </Space>
        </Spin>
      </Space>
    </div>
  );
};
