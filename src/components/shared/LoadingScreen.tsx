import { useEffect, useState } from 'react';
import clsx from 'clsx';
import './LoadingScreen.css';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0 -> 400ms: "M" appears
    // 400ms -> 900ms: "AHARAJA" stagger
    // 900ms -> 1500ms: ligne dorée
    // 1500ms -> 2000ms: fade out
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1500),
      setTimeout(() => onComplete(), 2000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={clsx("loading-screen", { "fade-out": phase === 3 })}>
      <div className="ls-content">
        <div className="ls-text font-cormorant">
          <span className="ls-m">M</span>
          <span className={clsx("ls-letters", { show: phase >= 1 })}>
            {"AHARAJA".split('').map((char, i) => (
              <span key={i} className="ls-char" style={{ transitionDelay: `${i * 60}ms` }}>
                {char}
              </span>
            ))}
          </span>
        </div>
        <div className={clsx("ls-line", { draw: phase >= 2 })} />
      </div>
    </div>
  );
}
