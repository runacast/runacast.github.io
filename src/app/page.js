import custom from './page.module.css'
import fs from 'fs'
import path from 'path'

export default function Home() {
  
  try{

    const filePath = path.join(process.cwd(), 'src', 'index', 'lasted.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)

    return <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Noticias destacados</h2>
        <div className='row'>
        {posts.map(function(post){
            return <div className='col-4'>
              <div className='card' key={post.slug}>
                <div className='thumbnail'>
                  <a href={post.slug}><img src={post.thumbnail}></img></a>
                </div>
                <div className='title'>
                  <a href={post.slug}><h4>{post.title}</h4></a>
                </div>
              </div>
            </div>
        })}
        </div>
      </div>
    </div>

  }catch(e){
    return <div className='container'>
      <div className='content'>
        <p>No hay entradas.</p>
      </div>
    </div>
  }
  
  
}