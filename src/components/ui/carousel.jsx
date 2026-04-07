import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const CarouselContext = React.createContext(null);

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Carousel({ orientation = 'horizontal', opts, setApi, className, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === 'horizontal' ? 'x' : 'y',
  });

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

  React.useEffect(() => {
    if (!setApi) return;
    setApi(api || null);
  }, [api, setApi]);

  return (
    <CarouselContext.Provider value={{ carouselRef, api, orientation, scrollPrev, scrollNext }}>
      <section className={cx('shadcn-carousel', className)} role="region" aria-roledescription="carousel" {...props}>
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, ...props }) {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) return null;

  return (
    <div ref={ctx.carouselRef} className="shadcn-carousel-viewport">
      <div className={cx('shadcn-carousel-track', className)} {...props} />
    </div>
  );
}

export function CarouselItem({ className, ...props }) {
  return <article className={cx('shadcn-carousel-item', className)} role="group" aria-roledescription="slide" {...props} />;
}

export function CarouselPrevious({ className, onClick, children, ...props }) {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) return null;

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        ctx.scrollPrev();
        onClick?.(e);
      }}
      {...props}
    >
      {children ?? 'Prev'}
    </button>
  );
}

export function CarouselNext({ className, onClick, children, ...props }) {
  const ctx = React.useContext(CarouselContext);
  if (!ctx) return null;

  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        ctx.scrollNext();
        onClick?.(e);
      }}
      {...props}
    >
      {children ?? 'Next'}
    </button>
  );
}
