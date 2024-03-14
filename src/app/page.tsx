import { getProductsList } from "@/api/ProductsList";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import {
	type CarouselItemType,
	DashboardCarousel,
} from "@/components/organisms/DashboardCarousel/DashboardCarousel";

export default async function Home() {
	const products = await getProductsList();

	const items: CarouselItemType[] = products.map(
		({ id, name, images }) => ({
			id,
			name,
			img: { src: images[0]?.url ?? "", alt: "" },
		}),
	);

	return (
		<div className="flex flex-col">
			<PageTitle text="Check our products" />
			<DashboardCarousel items={items} />
		</div>
	);
}
