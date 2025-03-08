import custom from './page.module.css'
import fs from 'fs'
import path from 'path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {

  try{

    const filemenu = path.join(process.cwd(), 'src', 'menus', 'top-menu.json')
    const fileposts = path.join(process.cwd(), 'src', 'index', 'lasted.json')
    const postsList = JSON.parse(fs.readFileSync(fileposts, 'utf8'))

    if(!postsList.length){
      throw new Error("Not there posts to show")
    }

    /*const postFiles = fs.readdirSync(postsFolder).filter((file) => file.endsWith('.json'))
    let postsList = []
    postFiles.forEach((file, index) => {
      
      if (index <= 9) {
        const filePath = path.join(postsFolder, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const data = JSON.parse(fileContent)
        postsList.push({
          title: data.title,
          thumbnail: data.thumbnail,
          slug: data.slug
        })
      }

    })*/
    
    const chunkArray = (array, size) => {
      return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
        array.slice(index * size, index * size + size)
      )
    }

    const groupedPosts = chunkArray(postsList, 3);

    return <>
    <Header path={filemenu} />
    <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Ima tukushka</h2>
        {groupedPosts.map((group, groupIndex) => (
          <div key={groupIndex} className="row" style={{ marginBottom: "20px" }}>
            {group.map((post, index) => (
              <div key={index} className="col-4">
                <div className="card">
                  <div className="card-body">
                    <span className='post-thumbnail'>
                      <a href={'post/'+post.slug}>
                        <img src={post.thumbnail}></img>
                      </a>
                    </span>
                    <h4 className="card-title"><a href={'post/'+post.slug}>{post.title}</a></h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>

  }catch(e){
    return <div className='container'>
      <div className='content'>
        <p>{e.message}</p>
      </div>
    </div>
  }
  
}