type PageTitleProps = {
	text: string;
};

export const PageTitle = ({ text }: PageTitleProps) => {
	return (
		<>
			<h1 className="text-center text-3xl font-bold">{text}</h1>
			<span className="mx-auto mb-12 mt-4 h-1 w-44 bg-blue-500" />
		</>
	);
};
