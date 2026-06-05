import { useState } from 'react';
import { CountUp } from './CountUp';

interface MetricCardProps {
  description: string;
  value: number;
  suffix?: string;
  decimals?: number;
  delay?: number;
}

export const MetricCard = ({ description, value, suffix = '%', decimals = 0, delay = 0 }: MetricCardProps) => {
  const [arrowBouncing, setArrowBouncing] = useState(false);

  return (
    <div className="metricCard">
      <img
        src="/images/icons/icon-arrow-up.svg"
        alt=""
        className={`metricCardArrow${arrowBouncing ? ' is-bouncing' : ''}`}
        aria-hidden="true"
        onAnimationEnd={() => setArrowBouncing(false)}
      />
      <p>{description}</p>
      <strong>
        <CountUp
          value={value}
          suffix={suffix}
          decimals={decimals}
          startDelay={100 + delay}
          onComplete={() => setArrowBouncing(true)}
        />
      </strong>
    </div>
  );
};
