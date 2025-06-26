"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"

export function RuralRewardCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-sm md:max-w-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Image
                            src={`/rural-reward/rural-reward-hero-${index + 1}.png`}
                            alt="Right Element"
                            // layout="responsive"
                            width={1000}
                            height={1000}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    )
}
