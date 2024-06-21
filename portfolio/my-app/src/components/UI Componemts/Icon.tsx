import type { ReactElement } from "react";
// import type { IconProps } from "./icon.type";
import Image, { ImageProps } from "next/image";

export type IconProps = ImageProps & {
    src: string;
    alt: string;
    size?: number;
  };

export function Icon({ src, alt, size = 22, ...props }: IconProps): ReactElement {
  return <Image src={src} alt={alt} height={size} width={size} {...props} />;
}

