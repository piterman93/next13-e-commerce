import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Navigation } from "@/components/organisms/Navigation/Navigation";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Products App",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<div className="relative grid min-h-screen grid-rows-layout bg-slate-100">
					<Navigation />
					<section className="mx-auto p-4 sm:p-8 xl:p-16">
						{children}
					</section>
					<footer className="border-slate-40 flex items-center justify-center border-t-2 py-3">
						@ Copyright 2024
					</footer>
				</div>
			</body>
		</html>
	);
}
