import custom from './page.module.css'
import fs from 'fs'
import path from 'path'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

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

  return <>
    <Header path={filemenu} />
    <div className='container'>
      <div className='content'>
        {postsList.length ? <h2 className={custom.title}>Rikunku yachunku</h2> : null}
        {postsList.length ? 
        groupedPosts.map((group, groupIndex) => (
          <div key={groupIndex} className="row" style={{ marginBottom: "20px" }}>
            {group.map((post, index) => (
              <div key={index} className="col-4">
                <div className="card">
                  <div className="card-body">
                    <span className='post-thumbnail'>
                      <Link href={'post/' + post.slug}>
                        <img src={post.thumbnail}></img>
                      </Link>
                    </span>
                    <h4 className="card-title"><Link href={'post/' + post.slug}>{post.title}</Link></h4>
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