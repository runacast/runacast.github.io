import React from 'react'
import ReactMarkdown from 'react-markdown'
import Data from '@/api/Data'

export async function generateMetadata({ params }) {

  const page = Data('pages', (await params).slug); // Función ficticia para obtener datos

  return {
    title: page.title,
    description: page.body,
    openGraph: {
      site_name: process.env.SITE_NAME,
      title: page.title,
      description: page.body,
      images: page.thumbnail,
      url: `${process.env.URL_SITE}/post/${page.slug}`,
      robots: 'index, follow'
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.body,
      images: page.thumbnail
    }
  }
}

export default async function Page({ params, searchParams}) {

    try {
      
      const page = Data('pages', (await params).slug)

      if(!page){
        throw new Error('Not found 404.')
      }
      
      return <div className='container'>
        <div className='content'>
          <h2>{page.title}</h2>
          <sub></sub>
          {function(){
            if(page.thumbnail){
              return <div className='row'><img src={page.thumbnail}></img></div>
            }
          }()}
          <div className='row'>
            <ReactMarkdown>{page.body}</ReactMarkdown>
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