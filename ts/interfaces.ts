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

export interface NavLinkItem {
  page: string;
  path: string;
  external: boolean;
}
