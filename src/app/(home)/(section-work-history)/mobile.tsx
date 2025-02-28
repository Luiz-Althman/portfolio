'use client';

import { Box } from './components/box';
import { BoxWorksArray } from '@/mock/section-work-history';

import 'keen-slider/keen-slider.min.css';

import { useKeenSlider } from 'keen-slider/react';

export function Mobile() {
    const [sliderRef] = useKeenSlider({
        mode: 'snap',
        loop: true,
        slides: {
            perView: 1.1,
            spacing: 10,
        },
    });

    return (
        <div className="md:block hidden keen-slider" ref={sliderRef}>
            {BoxWorksArray.map((item) => (
                <div key={item.id} className="keen-slider__slide">
                    <Box
                        isActive={item.isActive}
                        description={item.description}
                        period={item.period}
                        title={item.title}
                        subtitle={item.subtitle}
                        time={item.time}
                    />
                </div>
            ))}
        </div>
    );
}
