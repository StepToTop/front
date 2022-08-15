export interface GetUserResp {
  message: string;
}

export enum Currency {
  Bitcoin = 'bitcoin',
  Ether = 'ethereum',
  Litecoin = 'litecoin',
  Monero = 'monero',
  Ripple = 'xrp',
  Dogecoin = 'dogecoin',
  Dash = 'dash',
}

export interface CurrencyData {
  timestamp: string;
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export interface WSCurrencyData {
  bitcoin: CurrencyData;
  ethereum: CurrencyData;
  litecoin: CurrencyData;
  monero: CurrencyData;
  xrp: CurrencyData;
  dogecoin: CurrencyData;
  dash: CurrencyData;
}
