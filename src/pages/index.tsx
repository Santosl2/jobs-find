import { useEffect, useState } from "react";

import { motion, Variants } from "framer-motion";

import { Header, Job, LeftBar } from "@/components";
import { LoadMore } from "@/components/LoadMore";
import { GithubResponse } from "@/interfaces";
import { SEO } from "@/SEO";
import { useInfinityJobs, useSelectorFilter } from "@/shared/hooks";
import { filterData } from "@/shared/services/github";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export default function Home() {
  const filters = useSelectorFilter();

  const {
    data: infinityJob,
    fetchNextPage,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinityJobs("frontend", filters);

  const [data, setData] = useState<GithubResponse[] | undefined | null>([]);

  useEffect(() => {
    const newData = filterData(infinityJob, filters);
    setData(newData);
  }, [filters, infinityJob]);

  return (
    <>
      <SEO title="Teste" />
      <Header />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-body  p-2">
        <LeftBar />
        {isSuccess && infinityJob && (
          <motion.div variants={variants} initial="hidden" animate="show">
            {data &&
              data.map((item) => (
                <Job
                  key={item.id}
                  title={item.title}
                  labels={item.labels}
                  user={item.user}
                  created_at={item.created_at}
                />
              ))}

            {!filters.length && data && hasNextPage && (
              <LoadMore
                isFetching={isFetchingNextPage}
                handleLoadMore={fetchNextPage}
              />
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}
