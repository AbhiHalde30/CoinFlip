# CoinFlip Game on Solana

A React-based coinflip game integrated with the Solana blockchain. Users can connect their Solana wallet, place bets, and flip a virtual coin to potentially double their tokens.

## Features

- **Connect Wallet:** Connect with your Solana wallet.
- **Place Bets:** Bet Solana tokens and choose heads or tails.
- **Coinflip Mechanism:** Flip a virtual coin and win double if your choice is correct.
- **Responsive Design:** Optimized for all devices.

## Technologies Used

- **Frontend:** React.js
- **Blockchain:** Solana
- **Wallet Integration:** @solana/wallet-adapter
- **Deployment:** Vercel

## Prerequisites

- [Node.js](https://nodejs.org/) (for running and building the project)
- [npm](https://www.npmjs.com/) (Node package manager)
- A Solana wallet (e.g., Phantom Wallet) with some tokens for testing

## Installation

To set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/AbhiHalde30/CoinFlip.git
   cd coinflip-solana

2. **Install Dependencies:**

   npm install

3. **Set Up Environment Variables:**

   Create a .env file in the root directory and add your Solana network configuration if required.

4. **Run the Project Locally:**

   npm start

   Navigate to http://localhost:3000 to view the application.

## Usage

1. **Connect Wallet:**

   - Click on "Connect Wallet" and choose your Solana wallet.

2. **Place a Bet:**

   - Enter the amount of tokens you want to risk.
   - Select either heads or tails.
   
3. **Flip the Coin:**

   -Click "Flip Coin" to make your bet. The result will display whether you win or lose.

## Deployment

   The project is deployed on **Vercel**. You can access the live version at:

   **https://coin-flip-eta.vercel.app/**

## Troubleshooting

   - **Wallet Connection Issues:** Ensure the Solana wallet extension is properly installed and configured.
   - **Network Issues:** Verify you are connected to the Solana devnet/testnet and your environment variables are correctly set

## Contributing

   **To contribute to this project:**

   - Fork the repository.
   - Create a new branch for your changes.
   - Make your changes and commit them.
   - Push your changes to your fork.
   - Create a pull request to the main repository.

## Acknowledgments

   - **React** for the frontend framework.
   - **Solana** for the blockchain platform.
   - **Vercel** for deployment.

This `README.md` is formatted to be clear and easy to navigate, providing essential information about your project. Adjust any specific details as needed!
