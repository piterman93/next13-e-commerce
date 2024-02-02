import { ProductsList } from "@/components/organisms/ProductsList/ProductsList";
import { getProductsList } from "@/api/ProductsList";

const sleep = (ms: number) =>
	new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	const products = await getProductsList();
	await sleep(2000);

	return <ProductsList products={products.slice(-4)} />;
};
