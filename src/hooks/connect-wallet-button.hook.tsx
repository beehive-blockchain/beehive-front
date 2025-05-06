import { useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

export default function ConnectWalletButton() {
	const [walletAddress, setWalletAddress] = useState<string | null>(null);

	const connectWallet = async () => {
		try {
			if (!window.ethereum) {
				alert('MetaMask not detected');
				return;
			}

			// Create an adapter for ethers v6 BrowserProvider
			const ethereumProvider = window.ethereum as EthereumProvider;
			// Create an adapter that matches the Eip1193Provider interface
			const provider = new ethers.BrowserProvider({
				request: async (request) => {
					return await ethereumProvider.request(request.method, request.params);
				},
			});
			await provider.send('eth_requestAccounts', []);
			const signer = await provider.getSigner();
			const address = await signer.getAddress();
			setWalletAddress(address);
			console.log('Connected wallet:', address);
		} catch (error) {
			console.error('Wallet connection error:', error);
		}
	};

	return (
		<Button variant="bleu" onClick={connectWallet}>
			{walletAddress ? 'Connected' : 'Connect'}
			<Wallet size={16} />
		</Button>
	);
}
