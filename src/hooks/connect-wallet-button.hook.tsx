import { Button } from '@/components/ui/button';
import { Wallet } from 'lucide-react';
import { useConnect, useAccount } from 'wagmi';

export default function ConnectWalletButton() {
	const { connect, connectors, isPending } = useConnect();
	const { address, isConnected } = useAccount();

	// Find the WalletConnect connector
	const wcConnector = connectors.find((c) => c.id === 'walletConnect');

	return (
		<Button
			variant="bleu"
			onClick={() => wcConnector && connect({ connector: wcConnector })}
			disabled={isPending}
		>
			{isConnected
				? `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`
				: isPending
				? 'Connecting...'
				: 'Connect'}
			<Wallet size={16} />
		</Button>
	);
}
