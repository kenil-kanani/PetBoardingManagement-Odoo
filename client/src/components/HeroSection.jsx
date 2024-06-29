import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel"
import { Card } from "../components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Separator } from '../components/ui/separator';
import dog from "../../public/png1.png"
import png2 from "../../public/br_logo.png"

// Dummy Link component to replace Next.js Link
const Link = ({ href, children, ...props }) => (
	<a href={href} {...props}>
		{children}
	</a>
);

const Header = () => (
	<header className="px-4 lg:px-6 h-14 flex items-center">
		<Link href="#" className="flex items-center justify-center">
			<PawPrintIcon className="h-6 w-6" />
			<span className="sr-only">Paw Care</span>
		</Link>
		<nav className="ml-auto flex gap-4 sm:gap-6">
			<Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
			>
				Features
			</Link>
			<Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
			>
				Pricing
			</Link>
			<Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
			>
				About
			</Link>
			<Link
				href="#"
				className="text-sm font-medium hover:underline underline-offset-4"
			>
				Contact
			</Link>
		</nav>
	</header>
);

const Hero = () => (
	<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
		<div className="container px-4 md:px-6">
			<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
				<img
					src={dog}
					alt="Hero"
					className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
				/>
				<div className="flex flex-col justify-center space-y-4">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Exceptional Pet Care, Anytime
						</h1>
						<p className="max-w-[600px] text-muted-foreground md:text-xl">
							Our pet care service provides personalized
							attention, live video streaming, and virtual vet
							consultations to keep your furry friends happy and
							healthy.
						</p>
					</div>
					<div className="flex flex-col gap-2 min-[400px]:flex-row">
						<Link
							href="#"
							className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						>
							Book Now
						</Link>
						<Link
							href="#"
							className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
);

const FeaturesSection = () => (
	<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
		<div className="container px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
						Key Features
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						Tailored Pet Care Solutions
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Our pet care service offers a range of features to
						ensure your furry friends receive the best possible
						care, anytime.
					</p>
				</div>
			</div>
			<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
				<div className="flex flex-col justify-center space-y-4">
					<ul className="grid gap-6">
						<li>
							<div className="grid gap-1">
								<h3 className="text-xl font-bold">
									Live Video Streaming
								</h3>
								<p className="text-muted-foreground">
									Check in on your pets anytime with our live
									video streaming feature.
								</p>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="text-xl font-bold">
									Personalized Care Plans
								</h3>
								<p className="text-muted-foreground">
									Our team of experts will create a customized
									care plan for your pet's unique needs.
								</p>
							</div>
						</li>
						<li>
							<div className="grid gap-1">
								<h3 className="text-xl font-bold">
									Virtual Vet Consultations
								</h3>
								<p className="text-muted-foreground">
									Connect with our veterinary team for virtual
									consultations and advice.
								</p>
							</div>
						</li>
					</ul>
				</div>
				<img
					src={png2}
					alt="Features"
					className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
				/>
			</div>
		</div>
	</section>
);

const TestimonialsSection = () => (
	<section className="w-full py-12 md:py-24 lg:py-32">
		<div className="container px-4 md:px-6">
			<div className="flex flex-col items-center justify-center space-y-4 text-center">
				<div className="space-y-2">
					<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
						Testimonials
					</div>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
						What Our Customers Say
					</h2>
					<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Hear from our satisfied customers about their experience
						with our pet care service.
					</p>
				</div>
			</div>
			<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
				<Carousel opts={{ align: "start" }} className="w-full">
					<CarouselContent>
						<CarouselItem>
							<Card className="p-6">
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="text-lg font-semibold">
											John Doe
										</h4>
										<p className="text-sm text-muted-foreground">
											Satisfied Customer
										</p>
									</div>
								</div>
								<Separator className="my-4" />
								<p className="text-muted-foreground">
									"The live video streaming feature is a
									game-changer! I can check in on my pets
									anytime, and the personalized care plan has
									made a huge difference."
								</p>
							</Card>
						</CarouselItem>
						<CarouselItem>
							<Card className="p-6">
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="text-lg font-semibold">
											Jane Smith
										</h4>
										<p className="text-sm text-muted-foreground">
											Satisfied Customer
										</p>
									</div>
								</div>
								<Separator className="my-4" />
								<p className="text-muted-foreground">
									"The virtual vet consultations have been a
									lifesaver. I can get expert advice without
									having to leave my home."
								</p>
							</Card>
						</CarouselItem>
						<CarouselItem>
							<Card className="p-6">
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback>JD</AvatarFallback>
									</Avatar>
									<div>
										<h4 className="text-lg font-semibold">
											Michael Johnson
										</h4>
										<p className="text-sm text-muted-foreground">
											Satisfied Customer
										</p>
									</div>
								</div>
								<Separator className="my-4" />
								<p className="text-muted-foreground">
									"The team at Paw Care is truly exceptional.
									They've provided outstanding service and
									care for my pets."
								</p>
							</Card>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	</section>
);

const Footer = () => (
	<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
		<div className="flex items-center gap-2">
			<PawPrintIcon className="h-6 w-6" />
			<span className="text-sm font-medium">Paw Care</span>
		</div>
		<p className="text-xs text-muted-foreground ml-auto">
			&copy; 2024 Paw Care. All rights reserved.
		</p>
		<nav className="sm:ml-auto flex gap-4 sm:gap-6">
			<Link
				href="#"
				className="text-xs hover:underline underline-offset-4"
			>
				Contact
			</Link>
			<Link
				href="#"
				className="text-xs hover:underline underline-offset-4"
			>
				Privacy
			</Link>
			<Link
				href="#"
				className="text-xs hover:underline underline-offset-4"
			>
				Terms
			</Link>
		</nav>
	</footer>
);

const PawPrintIcon = (props) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<circle cx="11" cy="4" r="2" />
		<circle cx="18" cy="8" r="2" />
		<circle cx="20" cy="16" r="2" />
		<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
	</svg>
);

const HeroSection = () => (
	<div className="flex flex-col min-h-[100dvh]">
		<Header />
		<main className="flex-1">
			<Hero />
			<FeaturesSection />
			<TestimonialsSection />
		</main>
		<Footer />
	</div>
);

export default HeroSection;
