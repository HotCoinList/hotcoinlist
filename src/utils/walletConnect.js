/* eslint-disable require-atomic-updates */
import WalletConnectProvider from '@walletconnect/web3-provider';
import store from '../store';

let globalProvider;

export const connectWallet = async () => {
  if (globalProvider) {
    await globalProvider.disconnect();
    globalProvider = null;
  }
  const provider = new WalletConnectProvider({
    rpc: {
      56: 'https://bsc-dataseed.binance.org',
    },
    chainId: 56,
    qrcodeModalOptions: {
      mobileLinks: ['metamask', 'trust', 'imtoken', 'tokenpocket'],
    },
  });
  provider.on('accountsChanged', (accounts) => {
    if (!accounts.length) {
      return;
    }
    store.commit('wallet/setAddress', accounts[0]);
  });
  provider.on('disconnect', () => {
    store.commit('wallet/disconnect');
  });
  globalProvider = provider;
  try {
    await provider.enable();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to enable web3 provider.', err);
  }
};

export const disconnectWallet = async () => {
  if (!globalProvider) {
    return;
  }
  await globalProvider.disconnect();
  globalProvider = null;
};
