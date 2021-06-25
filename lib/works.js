import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const worksDirectory = path.join(process.cwd(), "works")
const jsonFilePath= path.join(process.cwd(), "works", "works.json")

export function getSortedWorksData() {
  const fileContents = fs.readFileSync(jsonFilePath, "utf8")
  const ids = JSON.parse(fileContents)
  const allWorksData = ids.map(id => {
    const filePath = path.join(worksDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const matterResult = matter(fileContents)
    return {
      id,
      ...matterResult.data
    }
  })

  return allWorksData
}

export function getAllWorkIds() {
  const fileContents = fs.readFileSync(jsonFilePath, "utf8")
  const ids = JSON.parse(fileContents)
  return ids.map(id => {
    return {
      params: {
        id: id
      }
    }
  })
}

export async function getWorkData(id) {
  const filePath = path.join(worksDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }

}