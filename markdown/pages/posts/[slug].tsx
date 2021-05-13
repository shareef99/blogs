import { FC, Fragment } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import { PostType } from "../../interfaces/index";
import { getPostData, getPostsFiles } from "../../lib/post-utils";
import PostContent from "../../components/PostContent";

interface Props {
    post: PostType;
}

const BlogPost: FC<Props> = ({ post }: Props) => {
    return (
        <Fragment>
            <PostContent post={post} />
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    // @ts-ignore
    const { slug } = context.params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        // regenerate after every 600s(10mins)
        revalidate: 600,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) =>
        fileName.replace(/\.md$/, "")
    );
    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
};

export default BlogPost;
