import Link from "next/link";

import { formatPrice } from "@/utils/helpers";
import { type ProductItemBaseFragment } from "@/gql/graphql";

interface ProductListItemProps {
	product: ProductItemBaseFragment;
	className?: string;
}

export const ProductListItem = ({
	product: { images, categories, name, price, id },
	className,
}: ProductListItemProps) => {
	const img = images[0]?.url ?? "";
	const category = categories[0]?.name;

	return (
		<li className="list-none">
			<Link href={`/product/${id}`}>
				<div
					className={`border-1 mb-2 aspect-square h-72 min-h-72 overflow-hidden rounded-2xl border-slate-700 bg-slate-200 p-4 lg:h-60 lg:min-h-60 ${className}`}
				>
					<img
						className="h-full w-full rounded-2xl object-cover object-center transition-transform hover:scale-105"
						src={img}
						alt={""}
					/>
				</div>
				<div>
					<h4 className="font-semibold capitalize">{name}</h4>
					<p className="text-sm capitalize">{category}</p>
				</div>
				<h4 className="font-semibold capitalize">
					{formatPrice(price / 100)}
				</h4>
			</Link>
		</li>
	);
};
