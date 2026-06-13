import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface PostMeta {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  role: string;
  duration: string;
  tools: string;
  tags: string[];
  images: {
    hero?: string;
    affinity?: string;
    competitor?: string;
    ia?: string;
    final?: string;
    [key: string]: string | undefined;
  };
  links?: {
    behance?: string;
    github?: string;
    [key: string]: string | undefined;
  };
}

export interface PostSection {
  heading: string;
  content: string;
}

export interface Post {
  meta: PostMeta;
  sections: PostSection[];
  next: { slug: string; title: string } | null;
  prev: { slug: string; title: string } | null;
}

export function getAllSlugs() {
  const files = fs.readdirSync(contentDir);
  return files.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''));
}

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
  const posts = files.map(file => {
    const slug = file.replace('.md', '');
    const source = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const { data } = matter(source);
    return { ...data, slug } as PostMeta;
  });
  
  // Custom sort to ensure Zomato is 1, FlowWise is 2
  // For future files, we just fallback to alphabetical reverse
  return posts.sort((a, b) => {
    if (a.slug === 'zomato-group-ordering') return -1;
    if (b.slug === 'zomato-group-ordering') return 1;
    return b.slug.localeCompare(a.slug);
  });
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(contentDir, `${slug}.md`);
    const source = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(source);
    
    const allPosts = getAllPostsMeta();
    const currentIndex = allPosts.findIndex(p => p.slug === slug);
    
    const prev = currentIndex > 0 ? { slug: allPosts[currentIndex - 1].slug, title: allPosts[currentIndex - 1].title } : null;
    const next = currentIndex < allPosts.length - 1 ? { slug: allPosts[currentIndex + 1].slug, title: allPosts[currentIndex + 1].title } : null;

    // Split content by H1 tags
    const tokens = content.split(/^#\s+/m);
    const sections: PostSection[] = [];
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i].trim();
      if (!token) continue; // Skip empty blocks before first H1
      
      const lines = token.split('\n');
      const heading = lines[0].trim();
      const body = lines.slice(1).join('\n').trim();
      
      sections.push({ heading, content: body });
    }

    return {
      meta: { ...data, slug } as PostMeta,
      sections,
      prev,
      next
    };
  } catch (e) {
    console.error("Error reading post:", e);
    return null;
  }
}
