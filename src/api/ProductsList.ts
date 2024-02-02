import { type ProductItem } from "@/components/organisms/ProductsList/ProductsList";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

const parseProductResponseItemToProductItem = (
	product: ProductResponseItem,
): ProductItem => {
	return {
		category: product.category,
		id: product.id,
		img: {
			alt: product.title,
			src: product.image,
		},
		name: product.title,
		price: product.price,
		description: product.description,
	};
};

export const getProductsList = async () => {
	const data = (await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	).then((res) => res.json())) as ProductResponseItem[];

	const products = data.map(parseProductResponseItemToProductItem);

	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const data = (await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	).then((res) => res.json())) as ProductResponseItem;

	const product = parseProductResponseItemToProductItem(data);

	return product;
};
