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
	const pathnameArray = pathname.split("/");
	const parsedPathname =
		pathnameArray.length > 2
			? `/${pathnameArray.slice(1, -1).join("/")}`
			: pathname;

	const isActive = parsedPathname === href;

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
