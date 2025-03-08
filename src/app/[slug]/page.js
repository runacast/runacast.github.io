import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

function getPage(slug) {

  const filePath = path.join(process.cwd(), 'src', 'pages', slug + '.json')

  if(fs.existsSync(filePath)){
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContent)
  }
  return ''

}

export async function generateMetadata({ params }) {

  const page = getPage((await params).slug); // Función ficticia para obtener datos

  return {
    title: page.title,
    description: page.body,
    openGraph: {
      title: page.title,
      description: page.body,
      images: page.thumbnail,
      url: `https://rimaymanta.com/${page.thumbnail}`
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
      
      fs.readdirSync(path.join(process.cwd(), 'src', 'menus'))
      
      const page = getPage((await params).slug)

      if(!page){
        throw new Error('Not found 404.')
      }
      
      return <div className='container'>
        <div className='content'>
          <h2>{page.title}</h2>
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