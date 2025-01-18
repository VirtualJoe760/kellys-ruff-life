"use client";

import Link from "next/link";
import Image from "next/image";
import siteConfig from "@/app/constants/siteConfig";

export default function Logo() {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-3xl text-heading cursor-pointer">{siteConfig.brandName}</h1>
          <Image 
            src="/paw.png" 
            alt="Paw logo"
            className="text-heading"
            width={48} 
            height={48} 
          />
        </Link>
      </div>
    </div>
  );
}
