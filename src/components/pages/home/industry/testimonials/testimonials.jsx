'use client';

import clsx from 'clsx';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PropTypes from 'prop-types';
import { useRef, useState, useEffect, useMemo } from 'react';

import supergoodLogo from 'images/pages/home/industry/1.svg';
import koyebLogo from 'images/pages/home/industry/2.svg';
import topoLogo from 'images/pages/home/industry/3.svg';
import retoolLogo from 'images/pages/home/industry/4.svg';
import number5 from 'images/pages/home/industry/5.svg';

import Testimonial from './testimonial';

const TESTIMONIALS = [
  {
    quote: `Nous commençons par collecter et analyser les données pour fournir des insights stratégiques`,
    name: 'Analyse de données',
    position: 'Collecte et Analyse de données',
    logo: { src: supergoodLogo, width: 124, height: 32, alt: 'Supergood.ai' },
  },
  {
    quote: `Nous développons des solutions logicielles sur mesure, adaptées à vos objectifs`,
    name: 'Conception des solutions',
    position: 'Conception des solutions',
    logo: { src: koyebLogo, width: 70, height: 20, alt: 'Koyeb' },
  },
  {
    quote: `Nous pilotons la mise en œuvre complète de votre projet, tout en respectant les délais et budgets `,
    name: 'Gestion de projet',
    position: 'Gestion de projet',
    logo: { src: topoLogo, width: 109, height: 32, alt: 'Topo.io' },
  },
  {
    quote: `Nous garantissons la sécurité et la comformité de vos systèmes avec les normes en vigueur.`,
    name: 'Sécurité et comformité',
    position: 'Sécurité et comformité',
    logo: { src: retoolLogo, width: 70, height: 32, alt: 'Retool' },
  },
  {
    quote: `Nous assurons un suivi constant pour optimiser les performances et anticiper vos besoins futurs.`,
    name: 'Suivi et Optimisation',
    position: 'Suivi et Optimisation',
    logo: { src: number5, width: 112, height: 32, alt: 'Retool' },
  },
];

const clamp = (min, value, max) => Math.min(Math.max(min, value), max);

const Testimonials = ({ activeIndex, setActiveIndex, windowWidth, isMobile }) => {
  const containerRef = useRef(null);
  const testimonialsRef = useRef([]);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (isMobile) {
      const container = containerRef.current;
      if (!container) return;

      setScrollLeft(container.scrollLeft);
      setScrollWidth(container.scrollWidth);

      const onScroll = () => {
        setScrollLeft(container.scrollLeft);
        setScrollWidth(container.scrollWidth);
      };

      container.addEventListener('scroll', onScroll);
      // eslint-disable-next-line consistent-return
      return () => container.removeEventListener('scroll', onScroll);
    }
    gsap.registerPlugin(ScrollTrigger);

    testimonialsRef.current.forEach((testimonial, index) => {
      ScrollTrigger.create({
        trigger: testimonial,
        start: '-=200 center', // Adjust based on when you want the trigger to start
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [isMobile, setActiveIndex]);

  const thumbStyle = useMemo(() => {
    const width = 1 / TESTIMONIALS.length;
    const left = (scrollLeft / (scrollWidth - windowWidth)) * (1 - width);
    return {
      width: `${width * 100}%`,
      left: `${clamp(0, left, 1 - width) * 100}%`,
    };
  }, [scrollLeft, scrollWidth, windowWidth]);

  return (
    <div className="mt-[157px] xl:mt-[88px] lg:mt-[63px] sm:mt-[38px] sm:w-full">
      <div
        className={clsx(
          'flex flex-col gap-[216px] xl:gap-[160px] lg:gap-[142px]',
          'sm:no-scrollbars sm:snap-x sm:snap-mandatory sm:flex-row sm:gap-3 sm:overflow-x-auto'
        )}
        ref={containerRef}
      >
        <div className="hidden shrink-0 sm:block sm:w-[calc((100%-min(100%-32px,448px)-24px)/2)] sm:snap-center" />
        {TESTIMONIALS.map((testimonial, index) => (
          <Testimonial
            {...testimonial}
            isActive={activeIndex === index || isMobile}
            key={index}
            ref={(el) => {
              testimonialsRef.current[index] = el;
            }}
          />
        ))}
        <div className="hidden shrink-0 sm:block sm:w-[calc((100%-min(100%-32px,448px)-24px)/2)] sm:snap-center" />
      </div>
      <div
        className="relative mx-auto mt-8 hidden h-px w-[192px] bg-[#343538] sm:block"
        aria-hidden
      >
        <div className="absolute top-0 h-px bg-green-45" style={thumbStyle} />
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default Testimonials;
