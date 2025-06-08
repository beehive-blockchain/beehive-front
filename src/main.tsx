import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from '@/router/routes';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { walletConnect } from '@wagmi/connectors';
import { mainnet } from 'wagmi/chains';
import ConnectWalletButton from '@/hooks/connect-wallet-button.hook'; // <-- Use your custom button

// --- wagmi config ---
const config = createConfig({
  chains: [mainnet],
  connectors: [
    walletConnect({
      projectId: '5ae42acae664859f649bc5ce1e4ae6ca', // Replace with your WalletConnect project ID
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

// --- App wrapper ---
function App() {
  return (
    <WagmiProvider config={config}>
      <ConnectWalletButton />
      <AppRouter />
    </WagmiProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

