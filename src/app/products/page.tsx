import { getProductsList } from "@/api/ProductsList";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { ProductsList } from "@/components/organisms/ProductsList/ProductsList";

export default async function ProductsPage() {
	const products = await getProductsList();

	return (
		<div className="flex flex-col">
			<PageTitle text="Our products" />
			<ProductsList products={products} />
		</div>
	);
}
