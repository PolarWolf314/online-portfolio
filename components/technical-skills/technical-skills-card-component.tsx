const TechnicalSkillsCardComponent = ({
    categoryName,
    items,
}: {
    categoryName: string;
    items: any;
}) => {
    return (
        <div
            /* Front End */ className="flex flex-col gap-2.5 items-center px-1.5 py-2.5 bg-gradient-to-br from-fuchsia-100 to-blue-100 rounded-md drop-shadow-lg"
        >
            <h3 className="self-start font-semibold">{categoryName}</h3>
            {items}
        </div>
    );
};

export default TechnicalSkillsCardComponent;
