import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Rimaymanta'
}

export default async function Page({ params, searchParams}) {

    try {
      
      const slug = (await params).slug
      const filePath = path.join(process.cwd(), 'src', 'pages', slug + '.json')
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const page = JSON.parse(fileContent)

      const isLoggedIn = true

      metadata.title += ' - '+page.title
      
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
          <h4>No encontrado 404.</h4>
        </div>
      </div>
    }
    
}