import { metadata } from "app/layout";
import fs from "fs";
import path from "path";

type BlogPostMetadata = {
  title: string;
  publishedAt: string;
  summary?: string;
  hidden?: string;
  image?: string;
};

type BookPostMetadata = {
  title: string;
  bookAuthor: string;
  goodReadsLink: string;
  status: string; // Should be one of "Finished", "Reading", or "Did Not Finish." Enums/unions don't play well with frontmatter function below.
  favorite?: string;
  publishedAt?: string;
  hidden?: string;
  dateFinished?: string;
  summary?: string;
  image?: string;
};

function parseBlogPostFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<BlogPostMetadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof BlogPostMetadata] = value;
  });
  return { metadata: metadata as BlogPostMetadata, content };
}

function parseBookPostFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<BookPostMetadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof BookPostMetadata] = value;
  });
  return { metadata: metadata as BookPostMetadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readBlogPostMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseBlogPostFrontmatter(rawContent);
}

function readBookPostMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseBookPostFrontmatter(rawContent);
}

function getBlogPostMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readBlogPostMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

function getBookPostMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readBookPostMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getBlogPostMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function getBookPosts() {
  return getBookPostMDXData(
    path.join(process.cwd(), "app", "bookshelf", "posts"),
  );
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
