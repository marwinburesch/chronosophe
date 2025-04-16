"use client";

import * as m from "motion/react-m"
import { domAnimation, LazyMotion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <LazyMotion features={domAnimation}><m.span>{display}</m.span></LazyMotion>;
}

export default AnimatedNumber;