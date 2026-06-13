import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export interface CaseStudyMeta {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  tools: string;
  duration: string;
  tags: string[];
  description: string;
}

export interface CaseStudy extends CaseStudyMeta {
  content: string;
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

  const files = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fullPath = path.join(CASE_STUDIES_DIR, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      subtitle: data.subtitle || "",
      year: data.year || "",
      role: data.role || "",
      tools: data.tools || "",
      duration: data.duration || "",
      tags: data.tags || [],
      description: data.description || "",
    };
  });
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const fullPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    subtitle: data.subtitle || "",
    year: data.year || "",
    role: data.role || "",
    tools: data.tools || "",
    duration: data.duration || "",
    tags: data.tags || [],
    description: data.description || "",
    content,
  };
}
