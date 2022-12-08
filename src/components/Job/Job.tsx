/* eslint-disable camelcase */
import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";

import type { Job as JobProps } from "@/interfaces";

import { Tag } from "./Tag";

const item: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export function Job({ id, labels, title, user, created_at }: JobProps) {
  const formattedDate = formatDistanceToNowStrict(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  });

  const router = useRouter();

  return (
    <motion.div
      variants={item}
      data-testid="jobTest"
      whileHover={{ y: -10 }}
      layout
      className="w-full rounded-md bg-white p-5 mb-5 text-job-blue font-title flex gap-5 items-center drop-shadow-sm cursor-pointer"
      onClick={() => {
        router.push(`/details/${id}`);
      }}
    >
      <img
        src={user.avatar_url}
        className="rounded-full w-12 h-12 md:w-20 md:h-20"
        alt="Avatar GitHub"
      />
      <div>
        <p className="mb-1 font-bold text-sm">{user.login}</p>
        <p className="mb-5 text-sm">{formattedDate}</p>
        <h3 className="font-normal md:text-xl text-md break-all">{title}</h3>

        <div className="flex flex-wrap mt-5">
          {labels.map((label) => (
            <Tag name={label.name} key={label.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
