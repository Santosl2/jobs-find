import { memo } from "react";

import { Labels } from "@/interfaces/Github";

function TagComponent(data: Pick<Labels, "name">) {
  const { name } = data;

  return (
    <span className="border-job-blue border-2 rounded-md px-4 py-1  mr-2 mb-2 text-bold font-title text-sm">
      {name}
    </span>
  );
}

const Tag = memo(TagComponent);

export { Tag };
