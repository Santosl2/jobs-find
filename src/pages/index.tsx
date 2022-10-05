import { motion, Variants } from "framer-motion";

import { Header } from "@/components/Header";
import { Job } from "@/components/Job";
import { useJobs } from "@/hooks";
import { SEO } from "@/SEO";

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
  const { isLoading, data: jobs } = useJobs();

  return (
    <>
      <SEO title="Teste" />
      <Header />
      {jobs && (
        <motion.div variants={variants} initial="hidden" animate="show">
          {jobs?.map((job) => (
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
    </>
  );
}
