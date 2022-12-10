/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import BadgeUrl from "../../data/BadgeUrl";

// Thank you Josh Jeffers for this idea :D

interface BadgeComponentProps {
    name: string;
    className?: string;
}

const BadgeComponent = ({ name, className }: BadgeComponentProps) => {
    const url = BadgeUrl[name];

    return (
        <img
            src={url}
            alt={name}
            className={`${className ?? ""} h-5 2xl:h-6 rounded-lg`}
        />
    );
};

export default BadgeComponent;
