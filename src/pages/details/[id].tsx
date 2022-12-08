/* eslint-disable react/destructuring-assignment */
import { motion, Variants } from "framer-motion";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { ArrowLeft, GithubLogo } from "phosphor-react";

import { Content } from "@/components/Content";
import { GithubResponse } from "@/interfaces";
import { SEO } from "@/SEO";
import { getIssueById } from "@/shared/services/github";

const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export default function Details(data: GithubResponse) {
  const { body, title } = data;
  const router = useRouter();

  if (!data) {
    router.push("/");
  }

  const url = data.url?.replace("api.", "").replace("repos/", "");

  return (
    <>
      <SEO title={title} />
      <Content showFilters={false}>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <h4 className="text-2xl mb-5 flex justify-between">
            <button
              className="bg-transparent rounded border-2 border-cyan-700 text-cyan-700 px-2 py-2 text-sm mr-5"
              type="button"
              onClick={() => {
                router.back();
              }}
            >
              <ArrowLeft size={20} />
            </button>
            {title}{" "}
            <button
              className="bg-transparent rounded border-2 border-cyan-700 text-cyan-700 px-2 py-2 text-sm"
              type="button"
              onClick={() => {
                router.replace(url);
              }}
            >
              <GithubLogo size={20} />
            </button>
          </h4>
          <div
            className="w-full mb-5 text-job-blue "
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </motion.div>
      </Content>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { id } = ctx.params as any;

  if (id) {
    try {
      const data = await getIssueById("frontend", id);

      const { body } = data;
      const meta = matter(body);
      const content = marked(meta.content);

      const returnData = {
        ...data,
        body: content,
      };

      return {
        props: {
          ...returnData,
        },
      };
    } catch {
      return {
        notFound: true,
      };
    }
  }

  return {
    props: {},
  };
};
