const TechnicalSkillsCardComponent = ({
    categoryName,
    items,
    className,
}: {
    categoryName: string;
    items: any;
    className?: string;
}) => {
    return (
        <div
            className={`${
                className ? className : ""
            } flex flex-col gap-2.5 items-center px-1.5 py-2.5 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg h-full w-full md:basis-almost-1/2`}
        >
            <h3 className="self-start font-medium lg:text-xl 2xl:text-3xl">
                {categoryName}
            </h3>
            {items}
        </div>
    );
};

export default TechnicalSkillsCardComponent;
