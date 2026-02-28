import { Button } from '@/components/ui/button';

export default function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-white">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_60%)]" />

			<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2">
				<div className="text-center lg:text-left">
					<span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
						March 20–21 • 48 Hours
					</span>

					<h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
						Build Bold.
						<br />
						<span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
							Ignite Ideas.
						</span>
					</h1>

					<p className="mx-auto mt-6 max-w-xl md:text-lg text-muted-foreground lg:mx-0 text-justify">
						MAPPS Ignite ’26 is where developers, designers, and innovators come together to create
						impactful solutions, compete for exciting prizes, and turn ideas into reality.
					</p>

					<div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
						<Button asChild size="lg" className="bg-orange-500 px-8 text-white hover:bg-orange-600">
							<a href="/register">Register Now</a>
						</Button>

						<Button asChild size="lg" variant="outline">
							<a href="/events">Explore Events</a>
						</Button>
					</div>
				</div>

				<div className="relative hidden lg:block">
					<div className="absolute -inset-4 -z-10 rounded-3xl bg-linear-to-r from-orange-200 to-amber-100 blur-2xl" />
					<img
						src="/fire-lap.png"
						alt="Hackathon"
						className="w-full rounded-3xl border shadow-sm"
					/>
				</div>
			</div>
		</section>
	);
}
