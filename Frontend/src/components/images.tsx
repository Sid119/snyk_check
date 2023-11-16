import React from "react";

const Images = (props: {
    src: string;
    style: React.CSSProperties;
    alt: string;
    onClick?: () => void;
}) => {
    return <img {...props} />;
};

export default Images;
