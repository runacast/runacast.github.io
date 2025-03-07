import custom from './page.module.css'
import fs from 'fs'
import path from 'path'

export default function Home() {

  const postsFolder = path.join(process.cwd(), 'src', 'posts')
  const postFiles = fs.readdirSync(postsFolder).filter((file) => file.endsWith('.json'))

  const postsList = postFiles.map((file, index) => {
    const filePath = path.join(postsFolder, file)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContent)
  })
  
  try{

    const filePath = path.join(process.cwd(), 'src', 'index', 'lasted.json')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const posts = JSON.parse(fileContent)
    
    const chunkArray = (array, size) => {
      return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
      );
    };

    const groupedPosts = chunkArray(posts, 3);

    return <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Ima tukushka</h2>
        {groupedPosts.map((group, groupIndex) => (
          <div key={groupIndex} className="row" style={{ marginBottom: "20px" }}>
            {group.map((post, index) => (
              <div key={index} className="col-4">
                <div className="card">
                  <div className="card-body">
                    <span><img src={post.thumbnail}></img></span>
                    <h4 className="card-title">{post.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

  }catch(e){
    return <div className='container'>
      <div className='content'>
        <p>Imaksh illun.</p>
      </div>
    </div>
  }
  
  
}