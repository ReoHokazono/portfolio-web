import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"

export async function getProfileData() {
    const filePath= path.join(process.cwd(), "md", "profile.md")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    return contentHtml
}