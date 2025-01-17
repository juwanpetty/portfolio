import { ReactElement } from "react";

export type Project = {
  frontmatter: {
    title: string;
    summary: string;
    href: string;
    image?: string;
  },
  content: ReactElement;
  slug: string;
};