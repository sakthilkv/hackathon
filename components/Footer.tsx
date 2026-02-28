'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-background text-foreground border-t">
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid md:grid-cols-4 gap-10">
					<div>
						<h3 className="text-xl font-semibold mb-4">Sairam Institutions</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Empowering students through innovation, excellence, and industry collaboration.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">M-Apps Club</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							A student-driven technical community focused on building real-world applications and
							hosting impactful events.
						</p>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li>
								<Link href="#" className="hover:text-primary transition">
									Home
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition">
									Events
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition">
									Sponsors
								</Link>
							</li>
							<li>
								<Link href="#" className="hover:text-primary transition">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
						<div className="flex gap-4">
							<Link href="#" className="p-2 rounded-xl bg-muted hover:bg-muted/70 transition">
								<Facebook size={18} />
							</Link>
							<Link href="#" className="p-2 rounded-xl bg-muted hover:bg-muted/70 transition">
								<Instagram size={18} />
							</Link>
							<Link href="#" className="p-2 rounded-xl bg-muted hover:bg-muted/70 transition">
								<Linkedin size={18} />
							</Link>
							<Link href="#" className="p-2 rounded-xl bg-muted hover:bg-muted/70 transition">
								<Mail size={18} />
							</Link>
						</div>
					</div>
				</div>

				<div className="border-t mt-12 pt-6 text-center text-sm text-muted-foreground">
					© {new Date().getFullYear()} Sairam Institutions | M-Apps Club. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
