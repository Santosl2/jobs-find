/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef } from "react";

import type { LoadMoreProps } from "./LoadMore.types";

export function LoadMore({ handleLoadMore, isFetching }: LoadMoreProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      const target = entities[0];

      if (target.isIntersecting && !isFetching) {
        handleLoadMore();
      }
    },
    [handleLoadMore, isFetching]
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const element = observerRef.current;

    const oberserver = new IntersectionObserver(handleObserver, {
      threshold: 0,
    });

    oberserver.observe(element);

    return () => oberserver.unobserve(element);
  }, [handleObserver]);

  return (
    <div className="loader" ref={observerRef}>
      {isFetching ? "Loading..." : "Load More"}
    </div>
  );
}
