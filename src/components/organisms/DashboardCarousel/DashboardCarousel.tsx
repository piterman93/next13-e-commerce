"use client";

import { Carousel } from "react-responsive-carousel";
import { CarouselItem } from "@/components/atoms/CarouselItem/CarouselItem";

export type CarouselItemType = {
	id: string;
	name: string;
	img: {
		src: string;
		alt: string;
	};
};

type DashboardCarouselProps = {
	items: CarouselItemType[];
};

export const DashboardCarousel = ({
	items,
}: DashboardCarouselProps) => {
	return (
		<div className="max-w-96">
			<Carousel
				showArrows={true}
				autoPlay={true}
				interval={3000}
				infiniteLoop={true}
				showIndicators={false}
				showStatus={false}
			>
				{items.map((item) => (
					<CarouselItem
						id={item.id}
						key={item.id}
						img={item.img}
						name={item.name}
					/>
				))}
			</Carousel>
		</div>
	);
};
