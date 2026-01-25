"use client";

import Image from "next/image";
import { useState } from "react";

export default function SafeImage({
  src,
  alt,
  fallback = "/images/t1ramisu.webp",
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      //   fill
      //   priority
      onError={() => setImgSrc(fallback)}
    />
  );
}
