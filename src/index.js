import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

const network = WalletAdapterNetwork.Devnet;
const wallets = [new PhantomWalletAdapter()];

const AppWrapper = () => (
    <ConnectionProvider endpoint={clusterApiUrl(network)}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <App />
            </WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWrapper />);
