import FeaturedEvents from '@/components/FeaturedEvents';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Sponsors from '@/components/SponsersSection';
import StatsSection from '@/components/StatsSection';

export default function Page() {
	return (
		<>
			<NavBar />
			<Hero />
			<StatsSection />
			<Sponsors />
			<FeaturedEvents />
			<Footer />
		</>
	);
}
