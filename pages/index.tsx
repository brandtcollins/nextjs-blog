import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";

interface HomeProps {
  posts: iPosts[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return <div>This is the index page</div>;
};

export default Home;
