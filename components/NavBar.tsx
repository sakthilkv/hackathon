import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
	{ title: 'Home', href: '/' },
	{ title: 'Events', href: '/events' },
	{ title: 'About Us', href: '/about-us' },
	{ title: 'Sponsors', href: '/#sponsors' },
	{ title: 'FAQ', href: '/#faq' },
];

export default function NavbarSection() {
	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-6">
				<a
					href="/"
					className="inline-flex items-center gap-2 text-2xl font-extrabold tracking-tight"
				>
					<span className="text-amber-600 ">MAPPS Ignite ’26</span>
				</a>

				<div className="hidden flex-1 justify-center gap-2 lg:flex">
					{navItems.map((item) => (
						<Button key={item.title} asChild variant="ghost">
							<a href={item.href}>{item.title}</a>
						</Button>
					))}
				</div>

				<div className="hidden items-center gap-3 lg:flex">
					<Button asChild variant="outline">
						<a href="/events">View Events</a>
					</Button>
					<Button
						asChild
						className="bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg transition-all"
					>
						<a href="/register">Register Now</a>
					</Button>
				</div>

				<Sheet>
					<SheetTrigger asChild className="ml-auto lg:hidden">
						<Button variant="outline" size="icon" aria-label="Open Menu">
							<Menu />
						</Button>
					</SheetTrigger>

					<SheetContent side="right" className="flex w-[90%] max-w-sm flex-col px-6 py-6">
						<SheetTitle>
							<a
								href="/"
								className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent"
							>
								MAPPS Ignite ’26
							</a>
						</SheetTitle>

						<nav className="my-8 flex flex-1 flex-col gap-2">
							{navItems.map((item) => (
								<Button
									key={item.title}
									asChild
									variant="ghost"
									className="justify-start text-base"
								>
									<a href={item.href}>{item.title}</a>
								</Button>
							))}
						</nav>

						<div className="mt-auto grid gap-3">
							<Button asChild variant="outline">
								<a href="/events">View Events</a>
							</Button>
							<Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
								<a href="/register">Register Now</a>
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}
