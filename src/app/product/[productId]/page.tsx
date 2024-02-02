import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/ProductsList";
import { SuggestedProductsList } from "@/components/organisms/SuggestedProductsList/SuggestedProductsList";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { ProductListItem } from "@/components/molecules/ProductListItem/ProductListItem";

//NOTE: strony produktów będą generowane statycznie
// export const generateStaticParams = async () => {
// 	const products = await getProductsList();

// 	return products.map((product) => ({
// 		productId: product.id,
// 	}));
// };

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - sklep internetowy`,
		description: product.description,
	};
};

export default async function ProductPage({
	params,
}: {
	params: {
		productId: string;
	};
	searchParams: {
		[key: string]: string;
	};
}) {
	const product = await getProductById(params.productId);

	return (
		<>
			<div className="flex flex-col items-center ">
				<PageTitle text={product.name} />
				<ProductListItem
					product={product}
					className=" lg:h-96 lg:min-h-96"
				/>
				<div className="mt-16">
					<Suspense fallback={"Suggested products loading..."}>
						<SuggestedProductsList />
					</Suspense>
				</div>
			</div>
		</>
	);
}
