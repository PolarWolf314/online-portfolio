import BadgeComponent from "./badge-component";

interface BadgesProps {
    badges: string[];
    className?: string;
}

const Badges = ({ badges, className }: BadgesProps) => {
    const renderBadges = () => {
        return badges.map((badge) => {
            return (
                <BadgeComponent
                    key={badge}
                    name={badge}
                    className={className}
                />
            );
        });
    };
    return (
        <div className={`${className ?? ""} flex flex-row flex-wrap gap-1.5`}>
            {renderBadges()}
        </div>
    );
};

export default Badges;
