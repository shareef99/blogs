import React from "react";
import Image from "next/image";
import { PostType } from "../interfaces";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Props {
    post: PostType;
}

const PostContent = ({ post }: Props) => {
    return (
        <article className="content">
            <ReactMarkdown
                components={{
                    p: ({ node, children }) => {
                        if (node.children[0].tagName === "img") {
                            const image: any = node.children[0];
                            return (
                                <div className="image">
                                    <Image
                                        src={`/images/${image.properties.src}`}
                                        alt={image.properties.alt}
                                        width="600"
                                        height="300"
                                    />
                                </div>
                            );
                        }

                        return <p>{children}</p>;
                    },
                    code({ className, children }) {
                        const language = className.replace("language-", "");

                        return (
                            <SyntaxHighlighter
                                style={materialDark}
                                language={language}
                                children={children[0]}
                            />
                        );
                    },
                }}
            >
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;
