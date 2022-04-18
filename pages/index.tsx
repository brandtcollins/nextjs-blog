import { FunctionComponent } from "react";
import { iPosts } from "../ts/interfaces";

interface HomeProps {
  posts: iPosts[];
}

const Home: FunctionComponent<HomeProps> = ({ posts }) => {
  return (
    <div className="h-screen">
      <h2>This is the index page.</h2>
    </div>
  );
};

export default Home;
