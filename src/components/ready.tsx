import { Button } from './ui/button';

export default function ReadyToStart() {
	return (
		<>
			<section className="flex flex-col justify-center items-center font-display bg-blanc-bleu dark:bg-black p-8">
				{/* TODO : Add animations and other background for black and white mode */}

				<h2 className="heading-2 text-center whitespace-pre">
					Ready To Start Your
					<span className="block text-bleu dark:text-white whitespace-pre">
						{' '}
						Crypto Journey ?
					</span>
				</h2>
				<p className="paragraph mt-4 text-center">
					Join thousands of investors who have already discovered the potential
					of Beehive. Get started today with as little as $10.
				</p>
				<div className="flex gap-6 mt-6 flex-col md:flex-row justify-center">
					<Button variant="bleu" className="rounded-full text-white">
						Start Investing
					</Button>
					<Button variant="secondary" className="rounded-full">
						More informations
					</Button>
				</div>
				<div className="mt-6 gap-6 flex flex-col md:flex-row justify-center md:justify-start">
					<div className="flex flex-col items-center">
						<h4 className="font-bold">Start Investing</h4>
						<p>Assets Under Management</p>
					</div>
					<div className="flex flex-col items-center">
						<h4 className="font-bold ">Start Investing</h4>
						<p>Average Annual Return</p>
					</div>
				</div>
			</section>
		</>
	);
}
//Problème avec  taille bouton et petit texte, donc à revoir
