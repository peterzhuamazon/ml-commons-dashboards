import { useEffect, useState } from 'react';

const metricNames = ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'];

/**
 * TODO: implement this function so that it retrieve metric names from BE
 */
export const useMetricNames = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return [loading, metricNames] as const;
};

const keys = ['tag1', 'tag2'];
const values = ['value1', 'value2'];

/**
 * TODO: implement this function so that it retrieve tags from BE
 */
export const useModelTags = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return [loading, { keys, values }] as const;
};