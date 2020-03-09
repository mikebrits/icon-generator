import * as React from 'react';
import { CSSProperties } from 'react';

interface IconDefinition {
    name: string;
    viewBox: number[];
    paths: string[];
}

interface SVGIconProps {
    icon: IconDefinition;
    style?: CSSProperties;
    fill?: string;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    className?: string;
}

const sizeMap = {
    xs: 6 / 24,
    s: 12 / 24,
    m: 16 / 24,
    l: 24 / 24,
    xl: 32 / 24,
};

export const SVGIcon = ({
    icon,
    style = {},
    fill = '#000',
    size = 'l',
    className = '',
}: SVGIconProps) => (
    <svg
        role="img"
        width={icon.viewBox[0]}
        style={{
            ...style,
            transform: `scale(${sizeMap[size]})`,
            backgroundColor: 'transparent',
        }}
        height={icon.viewBox[1]}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${icon.viewBox[0]} ${icon.viewBox[1]}`}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-labelledby={`${icon.name}-title`}
    >
        <title id={`${icon.name}-title`}>{icon.name}</title>
        {icon.paths.map((path: string, index: number) => {
            return <path key={index} fillRule="evenodd" clipRule="evenodd" fill={fill} d={path} />;
        })}
    </svg>
);

export default SVGIcon;
