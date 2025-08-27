import React from 'react'
import ReactMarkdown from 'react-markdown'
import Data from '@/api/Data'

export async function generateMetadata({ params }) {

  const post = Data('posts', (await params).slug); // Función ficticia para obtener datos

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      images: post.thumbnail,
      url: `https://rimaymanta.com/${post.thumbnail}`
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body,
      images: post.thumbnail
    }
  }
}

export default async function Post({ params, searchParams}) {

    try {

      const post = Data('posts', (await params).slug)

      if(!post){
        throw new Error('Not found 404')
      }
      
      return <div className='container'>
        <div className='content'>
          <h2>{post.title}</h2>
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