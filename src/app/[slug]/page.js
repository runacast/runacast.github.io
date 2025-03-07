import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactMarkdown from 'react-markdown'

export const metadata = {
  title: 'Yachay'
}

export default async function Page({ params, searchParams}) {

    try {
      
      const slug = (await params).slug
      const filePath = path.join(process.cwd(), 'src', 'pages', slug + '.json')
      
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const post = JSON.parse(fileContent)

      metadata.title += ' - '+post.title
      
      return <div className='container'>
        <div className='content'>
          <h2>{post.title}</h2>
          <div className='row superCard'>
            <div className='col-4'>
              <img src={post.thumbnail}></img>
            </div>
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
          <h4>No encontrado 404.</h4>
        </div>
      </div>
    }
    
}