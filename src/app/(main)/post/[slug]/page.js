import React from 'react'
import ReactMarkdown from 'react-markdown'


export async function generateMetadata({ params }) {

  const post = {} // Función ficticia para obtener datos

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      site_name: process.env.SITE_NAME,
      title: post.title,
      description: post.body,
      images: post.thumbnail,
      url: `${process.env.URL_SITE}/post/${post.slug}`,
      tag: post.tags.join(',')
    },
    twitter: {
      site: process.env.SITE_NAME,
      card: "summary_large_image",
      title: post.title,
      description: post.body,
      images: post.thumbnail
    }
  }
}

export default async function Post({ params, searchParams}) {

    try {

      const post = {}

      if (!post) {
        throw new Error('Not found 404')
      }

      const date = new Date(post.date),
        options = {
          year: "numeric",
          month: "long",
          day: "numeric"
        },
        datePost = date.toLocaleDateString("es-ES", options)

      return <div className='container'>
        <div className='content'>
          <div className='post-title'>
            <h2 className='post-slogan'>{post.title}</h2>
            <sub className='post-date'>{datePost}</sub>
          </div>
          <div className='row'>
            <img src={post.thumbnail}></img>
          </div>
          <div className='row'>
            <ReactMarkdown>
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </div>

    }catch(e){

      return <div className='container'>
        <div className='content'>
          <h4>{e.message}</h4>
        </div>
      </div>

    }
    
}