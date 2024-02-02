"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
}: {
	href: Route;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li
			className={clsx(
				`rounded-2xl px-3 py-1 hover:bg-slate-300 ${isActive && "border-2 border-slate-400 bg-slate-300"}`,
			)}
		>
			<Link href={href}>{children}</Link>
		</li>
	);
};
