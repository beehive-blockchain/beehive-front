import { motion } from 'motion/react';
import { fadeInUp } from '@/utils/animations';

export default function PageWhitePaper() {
	return (
		<div className="pageMargin">
			<motion.div
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 1.1 }}
				className="mt-6"
			>
				<h1 className="heading-1 title-gradient pb-4 text-center">
					White Paper
				</h1>

				<h2 className="heading-2 mb-8 mt-8">1. Introduction</h2>
				<p className="paragraph mb-6">
					Beehive is a decentralized platform designed to revolutionize the way
					communities fund, govern, and grow projects. By leveraging blockchain
					technology, Beehive ensures transparency, security, and inclusivity
					for all participants.
				</p>

				<h3 className="heading-3 mb-4">1.1 Purpose</h3>
				<p className="paragraph mb-6">
					The purpose of this white paper is to outline the vision,
					architecture, and tokenomics of the Beehive platform, providing a
					comprehensive overview for potential users, investors, and
					contributors.
				</p>

				<h3 className="heading-3 mb-4">1.2 Vision</h3>
				<p className="paragraph mb-6">
					Beehive aims to empower communities by providing tools for collective
					decision-making, transparent funding, and sustainable growth.
				</p>

				<h2 className="heading-2 mb-8 mt-12">2. Platform Overview</h2>
				<p className="paragraph mb-6">
					The Beehive platform consists of a suite of smart contracts, a
					user-friendly interface, and a native token (BEE) that facilitates
					governance and utility within the ecosystem.
				</p>

				<h3 className="heading-3 mb-4">2.1 Core Features</h3>
				<ul className="list-disc pl-8 mb-6text-paragraph">
					<li>Decentralized governance</li>
					<li>Transparent fundraising</li>
					<li>Community-driven project selection</li>
					<li>Reward mechanisms for contributors</li>
				</ul>

				<h3 className="heading-3 mb-4">2.2 Architecture</h3>
				<p className="paragraph mb-6">
					The platform is built on a modular architecture, allowing for
					scalability and integration with other blockchain solutions. Smart
					contracts handle all critical operations, ensuring trustless
					interactions.
				</p>

				<h2 className="heading-2 mb-8 mt-12">3. Tokenomics</h2>
				<p className="paragraph mb-6">
					The BEE token is central to the Beehive ecosystem, serving as both a
					utility and governance token.
				</p>

				<h3 className="heading-3 mb-4">3.1 Token Distribution</h3>
				<ul className="list-disc pl-8 mb-6text-paragraph">
					<li>Community: 50%</li>
					<li>Team: 20%</li>
					<li>Advisors: 10%</li>
					<li>Treasury: 10%</li>
					<li>Early Investors: 10%</li>
				</ul>

				<h3 className="heading-3 mb-4">3.2 Utility</h3>
				<p className="paragraph mb-6">
					BEE tokens are used for voting, staking, and accessing premium
					features within the platform.
				</p>

				<h2 className="heading-2 mb-8 mt-12">4. Governance</h2>
				<p className="paragraph mb-6">
					Beehive employs a decentralized governance model, allowing token
					holders to propose and vote on key decisions.
				</p>

				<h3 className="heading-3 mb-4">4.1 Proposal System</h3>
				<p className="paragraph mb-6">
					Any token holder can submit proposals. Proposals are subject to
					community review and voting.
				</p>

				<h3 className="heading-3 mb-4">4.2 Voting Mechanism</h3>
				<p className="paragraph mb-6">
					Voting power is proportional to the number of BEE tokens held. The
					system ensures fair and transparent outcomes.
				</p>

				<h2 className="heading-2 mb-8 mt-12">5. Roadmap</h2>
				<p className="paragraph mb-6">
					The Beehive roadmap includes platform development, community building,
					and strategic partnerships. Key milestones are regularly updated on
					the official website.
				</p>

				<h2 className="heading-2 mb-8 mt-12">6. Conclusion</h2>
				<p className="paragraph mb-6">
					Beehive is committed to building a transparent, inclusive, and
					sustainable platform for the future of decentralized communities. Join
					us as we shape the next era of collective innovation.
				</p>
			</motion.div>
		</div>
	);
}
