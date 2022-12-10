import Image from "next/image";

const TechnicalSkillsItemComponent = ({
    logo,
    name,
}: {
    logo: any;
    name: string;
}) => {
    return (
        <div className="flex flex-row items-center gap-3 w-full px-2.5 py-1 bg-gradient-to-br from-fuchsia-50 to-blue-50 border rounded-xl drop-shadow h-10 lg:h-14 2xl:h-16">
            <span>
                <Image src={logo} alt={name} className="w-[30px] lg:w-10 2xl:w-12"/>
            </span>
            <span className="lg:text-lg 2xl:text-xl">{name}</span>
        </div>
    );
};

export default TechnicalSkillsItemComponent;
