import { Header } from "./_components/header";
import { MainContent } from "./_components/main";

export default function Home() {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4 font-spaceGrotesk">
			<div className="lg:flex lg:justify-between lg:gap-4 font-spaceGrotesk">
				<Header />
				<MainContent />
			</div>
		</div>
	);
}
