import { useEffect, useState } from "react";

import { motion, Variants } from "framer-motion";

import { Header, Job, LeftBar } from "@/components";
import { GithubResponse } from "@/interfaces";
import { SEO } from "@/SEO";
import { useJobs, useSelectorFilter } from "@/shared/hooks";
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
  const { isLoading, data: jobs } = useJobs("frontend", filters);
  const [data, setData] = useState<GithubResponse[] | undefined | null>(jobs);

  useEffect(() => {
    const newData = filterData(jobs, filters);
    setData(newData);
  }, [filters, jobs]);

  return (
    <>
      <SEO title="Teste" />
      <Header />
      <div className="grid grid-cols-body gap-5">
        <LeftBar />
        {jobs && (
          <motion.div variants={variants} initial="hidden" animate="show">
            {data?.map((job) => (
              <Job
                key={job.id}
                title={job.title}
                labels={job.labels}
                user={job.user}
                created_at={job.created_at}
              />
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
}
