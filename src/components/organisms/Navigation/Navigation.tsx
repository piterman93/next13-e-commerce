import { ActiveLink } from "@/components/atoms/ActiveLink/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="border-slate-40 sticky top-0 z-10 flex h-24 items-center justify-between bg-slate-200 px-8">
			<div>LOGO PLACEHOLDER</div>
			<ul className="flex gap-8">
				<ActiveLink href="/">Homepage</ActiveLink>
				<ActiveLink href="/products">Products</ActiveLink>
			</ul>
			<div>CART PLACEHOLDER</div>
		</nav>
	);
};
