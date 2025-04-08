import custom from './page.module.css'
import fs from 'fs'
import path from 'path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {

  const filemenu = path.join(process.cwd(), 'src', 'menus', 'top-menu.json')
  const fileposts = path.join(process.cwd(), 'src', 'index', 'lasted.json')
  const postsList = JSON.parse(fs.readFileSync(fileposts, 'utf8'))

  const chunkArray = (array, size) => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    )
  }

  const groupedPosts = chunkArray(postsList, 3);

  let html = <p>OYE</p>

  return <>
    <Header path={filemenu} />
    <div className='container'>
      <div className='content'>
        <h2 className={custom.title}>Ima tukushka</h2>
        {postsList.length ? 
        groupedPosts.map((group, groupIndex) => (
          <div key={groupIndex} className="row" style={{ marginBottom: "20px" }}>
            {group.map((post, index) => (
              <div key={index} className="col-4">
                <div className="card">
                  <div className="card-body">
                    <span className='post-thumbnail'>
                      <a href={'post/' + post.slug}>
                        <img src={post.thumbnail}></img>
                      </a>
                    </span>
                    <h4 className="card-title"><a href={'post/' + post.slug}>{post.title}</a></h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )) : 
        <p>Not there posts to show</p> }
      </div>
    </div>
    <Footer />
    </>
  
}