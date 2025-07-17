import React from 'react'

// Définition du type pour les articles Strapi

type StrapiArticle = {
    id: number
    attributes: {
        title: string
        slug: string
        content?: string
        image?: {
            data?: {
                attributes: {
                    url: string
                }
            }
        }
    }
}

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337'

export default async function Page({ params }: { params: { slug: string } }) {
    // Récupère l'article correspondant au slug depuis Strapi
    const res = await fetch(
        `${API_URL}/api/articles?filters[slug][$eq]=${params.slug}&populate=*`,
        { cache: 'no-store' }
    )
    const { data } = (await res.json()) as { data: StrapiArticle[] }
    const article = data[0]

    if (!article)
        return <div className="text-center py-20">Article non trouvé</div>

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">
                {article.attributes.title}
            </h1>
            {article.attributes.image?.data && (
                <img
                    src={`${API_URL}${article.attributes.image.data.attributes.url}`}
                    alt={article.attributes.title}
                    className="w-full rounded-lg mb-8"
                />
            )}
            <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{
                    __html: article.attributes.content || '',
                }}
            />
        </div>
    )
}
