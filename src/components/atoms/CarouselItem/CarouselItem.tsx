import Link from "next/link";

import { type CarouselItemType } from "@/components/organisms/DashboardCarousel/DashboardCarousel";

export const CarouselItem = ({ name, img, id }: CarouselItemType) => {
	return (
		<Link
			href={`/product/${id}`}
			className="flex cursor-pointer flex-col items-center gap-2"
			onClick={() => console.log(id)}
		>
			<img src={img.src} alt={img.alt} className="h-96 min-h-96" />
			<p className="">{name}</p>
		</Link>
	);
};
