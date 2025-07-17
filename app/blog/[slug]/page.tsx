import React from "react";
import Link from "next/link";

type StrapiArticle = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    content?: string;
    image?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Récupère l'article correspondant au slug depuis Strapi
  const res = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${params.slug}&populate=*`, { cache: 'no-store' });
  const { data } = await res.json() as { data: StrapiArticle[] };
  const article = data[0];

  if (!article) return <div className="text-center py-20">Article non trouvé</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">{article.attributes.title}</h1>
      {article.attributes.image?.data && (
        <img
          src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
          alt={article.attributes.title}
          className="w-full rounded-lg mb-8"
        />
      )}
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: article.attributes.content || "" }} />
    </div>
  );
}

export async function BlogPage() {
  const res = await fetch('http://localhost:1337/api/articles?populate=*', { cache: 'no-store' });
  const { data } = await res.json() as { data: StrapiArticle[] };

  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20 py-16">
      {data.map((article: StrapiArticle) => (
        <Link
          key={article.id}
          href={`/blog/${article.attributes.slug}`}
          className="group block rounded-2xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 focus:scale-105"
        >
          <div className="aspect-[4/3] w-full overflow-hidden">
            {article.attributes.image?.data && (
              <img
                src={`http://localhost:1337${article.attributes.image.data.attributes.url}`}
                alt={article.attributes.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            )}
          </div>
          <div className="flex items-center justify-between gap-2 bg-card text-card-foreground rounded-2xl px-6 py-4 -mt-8 mx-4 shadow-lg relative z-10">
            <span className="font-bold text-lg text-foreground">{article.attributes.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
} 