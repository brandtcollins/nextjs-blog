export interface iFrontmatter {
  title: string;
  metaTitle: string;
  metaDesc: string;
  socialImage: string;
  date: string;
  tags: string;
}

export interface iPosts {
  slug: string;
  frontmatter: iFrontmatter;
}
