import React, { useState } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram } from '@solana/web3.js';

const FlipCoin = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [result, setResult] = useState(null);
  const [betAmount, setBetAmount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCoin = async (choice) => {
    if (!publicKey) {
      alert("Please connect your wallet!");
      return;
    }

    setIsFlipping(true);
    const coinFlipResult = Math.random() > 0.5 ? 'heads' : 'tails';

    try {
      const lamports = betAmount * 1e9;

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey('Your_SolProgram_PublicKey'), // Replace with your program's public key
          lamports,
        })
      );

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, 'processed');

      const userWon = coinFlipResult === choice;

      if (userWon) {
        setResult(`You won! The coin landed on ${coinFlipResult}.`);
      } else {
        setResult(`You lost! The coin landed on ${coinFlipResult}.`);
      }
    } catch (error) {
      console.error('Transaction failed:', error);
      setResult('Transaction Failed');
    } finally {
      setIsFlipping(false);
    }
  };

  return (
    <div className="flip-coin">
      <h2>Place Your Bet</h2>
      <input
        type="number"
        value={betAmount}
        onChange={(e) => setBetAmount(e.target.value)}
        placeholder="Enter amount to bet (in SOL)"
        disabled={isFlipping}
      />
      <div className="buttons">
        <button onClick={() => flipCoin('heads')} disabled={isFlipping}>Flip Heads</button>
        <button onClick={() => flipCoin('tails')} disabled={isFlipping}>Flip Tails</button>
      </div>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default FlipCoin;
