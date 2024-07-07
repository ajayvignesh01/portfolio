import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
	title: "Ajay's Portfolio",
	description: "Built on using Nextjs 15 & Tailwind 4",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.variable}${GeistMono.variable}`}>{children}</body>
		</html>
	);
}
