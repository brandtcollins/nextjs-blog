import { FunctionComponent } from "react";
import Head from "next/head";

interface ProjectsPageProps {}

const ProjectsPage: FunctionComponent<ProjectsPageProps> = () => {
  return (
    <>
      <Head>
        <title>Brandt Collins - Designer and Developer</title>
        <meta
          property="og:title"
          content="Brandt Collins - Designer and Developer"
          key="title"
        />
        <meta
          name="description"
          content="Front end web developer and UX/UI designer"
        ></meta>
      </Head>
      <div>This is the project page</div>
    </>
  );
};

export default ProjectsPage;
