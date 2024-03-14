import { notFound } from "next/navigation";

import { ProductsList } from "@/components/organisms/ProductsList/ProductsList";
import {
	type CategoryName,
	getProductsListByCategory,
} from "@/api/ProductsListByCategory";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";

export const generateStaticParams = async ({
	params,
}: {
	params: {
		category: string;
	};
}) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else return [{ pageNumber: "2" }];
};

export default async function CategoryProductPage({
	params,
}: {
	params: {
		category: string;
		pageNumber: string;
	};
}) {
	const category = await getProductsListByCategory(
		params.category as CategoryName,
	);

	if (!category[0]?.products) return notFound();

	return (
		<div className="flex flex-col">
			<PageTitle text={category[0].slug} />
			<ProductsList products={category[0]?.products} />
		</div>
	);
}
