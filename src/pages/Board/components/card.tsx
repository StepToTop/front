import { Card, Space, Typography } from '@douyinfe/semi-ui';
import { CurrencyData } from '@/typings/base';

const { Meta } = Card;
const { Title, Text } = Typography;

export default ({ data }: { data: CurrencyData }) => {
  return (
    <Card
      style={{
        flexBasis: '30%',
      }}
    >
      <Meta title={<Title heading={4}>{data.name}</Title>} />
      <Text type="warning" strong>
        ${data.priceUsd}
      </Text>
      <Space className="w-full justify-between">
        <Space
          vertical={true}
          style={{
            width: '45%',
            overflow: 'hidden',
          }}
          align="start"
        >
          <Text type="tertiary">volumn:</Text>
          <Text type="tertiary">{data.volumeUsd24Hr}</Text>
        </Space>
        <Space
          vertical={true}
          style={{
            width: '45%',
            overflow: 'hidden',
          }}
          align="start"
        >
          <Text type="tertiary">change:</Text>
          <Text
            type={data.changePercent24Hr.startsWith('-') ? 'danger' : 'success'}
          >
            {data.changePercent24Hr}
          </Text>
        </Space>
      </Space>
    </Card>
  );
};
