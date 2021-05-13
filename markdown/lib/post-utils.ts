import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}

export function getPostData(filename: string) {
    // removes the file extension
    const postSlug = filename.replace(/\.md/, "");
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}
