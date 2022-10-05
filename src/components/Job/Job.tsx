/* eslint-disable camelcase */
import { formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { motion, Variants } from "framer-motion";

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

export function Job({ labels, title, user, created_at }: JobProps) {
  const formattedDate = formatDistanceToNowStrict(new Date(created_at), {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -10 }}
      className="w-full rounded-md bg-white p-5 mb-5 text-job-blue font-title flex gap-5 items-center drop-shadow-sm"
    >
      <img src={user.avatar_url} className="rounded-full w-20 h-20" alt="f" />
      <div>
        <p className="mb-1 font-bold text-sm">{user.login}</p>
        <p className="mb-5 text-sm">{formattedDate}</p>
        <h3 className="font-normal text-xl">{title}</h3>

        <div className="flex flex-wrap mt-5">
          {labels.map((label) => (
            <Tag name={label.name} key={label.id} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
