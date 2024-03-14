import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/services/ApiService/ApiSerice";

export type CategoryName = "t-shirts" | "accessories" | "hoodies";

export const getProductsListByCategory = async (
	slug: CategoryName,
) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetByCategorySlugDocument,
		{},
	);

	return graphqlResponse.categories.data.filter(
		(category) => category.slug === slug,
	);
};
