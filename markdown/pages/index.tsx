import { FC, Fragment } from "react";
import Link from "next/link";

interface Props {}

const Home: FC<Props> = () => (
    <Fragment>
        <h1>Hello Next.js 👋</h1>
        <div className="posts-container">
            <Link href="/posts/getting-started-with-nextjs">First post</Link>
            <Link href="/posts/mastering-javascript">Second post</Link>
        </div>
    </Fragment>
);

export default Home;
