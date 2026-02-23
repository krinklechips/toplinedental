import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from "react";
import { engagementSteps } from "../data/siteContent";

type ProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

const processIcons = ["C", "S", "I", "A"];

export function ProcessSection({
  eyebrow = "Process",
  title = "A streamlined path from selection to ongoing support.",
  subtitle = "We guide clinics through planning, specification, installation, and aftercare.",
  className = "section-block process-carousel-section"
}: ProcessSectionProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const dragActiveRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [snapPoints, setSnapPoints] = useState<number[]>([]);
  const [activeSnapIndex, setActiveSnapIndex] = useState(0);

  const getSnapPoints = () => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return [];
    }

    const cards = Array.from(carousel.children) as HTMLElement[];
    if (!cards.length) {
      return [0];
    }

    const maxScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const rawPoints = cards.map((card) => Math.min(card.offsetLeft, maxScroll));
    const uniquePoints: number[] = [];

    rawPoints.forEach((point) => {
      const exists = uniquePoints.some((savedPoint) => Math.abs(savedPoint - point) < 2);
      if (!exists) {
        uniquePoints.push(point);
      }
    });

    return uniquePoints.length ? uniquePoints : [0];
  };

  const updateActiveSnapIndex = (points?: number[]) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const usablePoints = points ?? (snapPoints.length ? snapPoints : getSnapPoints());
    if (!usablePoints.length) {
      setActiveSnapIndex(0);
      return;
    }

    const currentScroll = carousel.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    usablePoints.forEach((point, index) => {
      const distance = Math.abs(point - currentScroll);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveSnapIndex(nearestIndex);
  };

  const refreshSnapPoints = () => {
    const points = getSnapPoints();
    setSnapPoints(points);
    updateActiveSnapIndex(points);
  };

  const queueActiveSnapUpdate = () => {
    if (rafRef.current !== null) {
      return;
    }

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      updateActiveSnapIndex();
    });
  };

  const scrollOnePage = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const points = snapPoints.length ? snapPoints : getSnapPoints();
    if (!points.length) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(points.length - 1, activeSnapIndex + direction));
    carousel.scrollTo({
      left: points[nextIndex],
      behavior: "smooth"
    });
  };

  const scrollToPage = (index: number) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const points = snapPoints.length ? snapPoints : getSnapPoints();
    const targetPoint = points[index];
    if (targetPoint === undefined) {
      return;
    }

    carousel.scrollTo({
      left: targetPoint,
      behavior: "smooth"
    });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      carousel.scrollLeft += event.deltaY;
      queueActiveSnapUpdate();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    dragActiveRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = carousel.scrollLeft;
    carousel.classList.add("is-dragging");
    carousel.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragActiveRef.current) {
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) {
      return;
    }

    const delta = event.clientX - dragStartXRef.current;
    carousel.scrollLeft = dragStartScrollRef.current - delta;
    queueActiveSnapUpdate();
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    dragActiveRef.current = false;
    if (!carousel) {
      return;
    }
    carousel.classList.remove("is-dragging");
    if (carousel.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }
  };

  useEffect(() => {
    refreshSnapPoints();

    const onResize = () => refreshSnapPoints();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section className={className}>
      <div className="section-inner process-carousel-inner">
        <div className="process-carousel-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            <p className="section-subtitle">{subtitle}</p>
          </div>
          <div className="process-carousel-nav" aria-label="Process step controls">
            <button
              type="button"
              className="process-carousel-arrow"
              aria-label="Scroll process steps left"
              onClick={() => scrollOnePage(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="process-carousel-arrow"
              aria-label="Scroll process steps right"
              onClick={() => scrollOnePage(1)}
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="process-carousel"
          onScroll={queueActiveSnapUpdate}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        >
          {engagementSteps.map((step, index) => (
            <article key={step.title} className="process-carousel-card">
              <span className="process-carousel-icon">{processIcons[index]}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>

        <div className="process-carousel-dots" aria-label="Process step progress">
          {snapPoints.map((_, index) => (
            <button
              key={`process-page-${index + 1}`}
              type="button"
              className={`process-carousel-dot${activeSnapIndex === index ? " active" : ""}`}
              aria-label={`Go to process page ${index + 1}`}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Process() {
  return <ProcessSection />;
}
