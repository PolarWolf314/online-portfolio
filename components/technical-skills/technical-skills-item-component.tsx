import Image from "next/image";

const TechnicalSkillsItemComponent = ({
    logo,
    name,
}: {
    logo: any;
    name: string;
}) => {
    return (
        <div className="flex flex-row items-center gap-3 w-full px-2.5 py-1 bg-gradient-to-br from-fuchsia-50 to-blue-50 border rounded-xl drop-shadow">
            <span>
                <Image src={logo} alt={name} width={30} />
            </span>
            <span>{name}</span>
        </div>
    );
};

export default TechnicalSkillsItemComponent;
