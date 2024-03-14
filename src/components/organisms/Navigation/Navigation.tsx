import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/components/atoms/ActiveLink/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="border-slate-40 sticky top-0 z-10 flex h-16 items-center justify-between bg-slate-200 px-24 ">
			<ul className="flex gap-8">
				<ActiveLink href="/">Homepage</ActiveLink>
				<ActiveLink href="/products">All</ActiveLink>
				<ActiveLink href="/products/t-shirts">T-shirts</ActiveLink>
				<ActiveLink href="/products/hoodies">Hoodies</ActiveLink>
				<ActiveLink href="/products/accessories">
					Accessories
				</ActiveLink>
			</ul>
			<div className="flex gap-2">
				<ShoppingCart />
				<span>(0)</span>
			</div>
		</nav>
	);
};
