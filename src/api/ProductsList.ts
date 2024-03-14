import {
	type ProductItemBaseFragment,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/services/ApiService/ApiSerice";

export const getProductsList = async (): Promise<
	ProductItemBaseFragment[]
> => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{},
	);

	return graphqlResponse.products.data;
};
