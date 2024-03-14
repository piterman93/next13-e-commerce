import { ProductListItem } from "@/components/molecules/ProductListItem/ProductListItem";
import { type ProductItemBaseFragment } from "@/gql/graphql";

interface ProductsListProps {
	products: ProductItemBaseFragment[];
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
