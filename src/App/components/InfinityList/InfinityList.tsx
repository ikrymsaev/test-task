import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

interface IProps<T> {
  data: T[];
  hasData?: boolean;
  renderItem: (item: T, index: number, data: T[]) => React.ReactNode;
  onScrollEnd?: () => void;
}

export function InfinityList <T>(props: IProps<T>): JSX.Element {
  const { data, hasData, renderItem, onScrollEnd } = props;
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '500px'
  });

  useEffect(() => {
    inView && onScrollEnd?.();
  }, [inView, onScrollEnd])

  return (
    <div>
      {data.map(renderItem)}
      {data.length && hasData && <div ref={ref} />}
    </div>
  )
}