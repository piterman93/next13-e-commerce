import { ProductListItem } from "@/components/molecules/ProductListItem/ProductListItem";

export interface ProductItem {
	id: string;
	category: string;
	name: string;
	price: number;
	img: {
		alt: string;
		src: string;
	};
	description: string;
}

interface ProductsListProps {
	products: ProductItem[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<ul
			className="flex list-none flex-wrap justify-center gap-12"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
