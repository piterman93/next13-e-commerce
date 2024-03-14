import {
	ProductGetByIdDocument,
	type ProductItemBaseFragment,
} from "@/gql/graphql";
import { executeGraphql } from "@/services/ApiService/ApiSerice";

export const getProductsById = async (
	id: ProductItemBaseFragment["id"],
): Promise<ProductItemBaseFragment | undefined | null> => {
	const graphqlResponse = await executeGraphql(
		ProductGetByIdDocument,
		{
			id,
		},
	);

	return graphqlResponse.product;
};
