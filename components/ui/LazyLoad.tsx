"use client";

import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
}

export default function LazyLoad({
  children,
  placeholder = null,
  rootMargin = "100px",
}: LazyLoadProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      setShouldRender(true);
    }
  }, [inView]);

  return <div ref={ref}>{shouldRender ? children : placeholder}</div>;
}
