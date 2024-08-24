import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import FlipCoin from './components/FlipCoin';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Solana Coinflip Game</h1>
        <WalletMultiButton />
      </header>
      <main>
        <FlipCoin />
      </main>
    </div>
  );
}

export default App;
