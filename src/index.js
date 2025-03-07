const fs = require('fs')
const path = require('path')

// Ruta a la carpeta de posts
const postsFolder = path.join(process.cwd(), 'src', 'posts')

// Ruta al archivo posts.json
const outputFile = path.join(process.cwd(), 'src', 'index', 'lasted.json')
const postFiles = fs.readdirSync(postsFolder).filter((file) => file.endsWith('.json'))

// Leer y combinar los posts
if(postFiles.length){

  let postsList = []
  
  postFiles.forEach((file, index) => {

    if(index <= 9){
      const filePath = path.join(postsFolder, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const data = JSON.parse(fileContent)
      postsList.push({
        title: data.title,
        thumbnail: data.thumbnail,
        slug: data.slug
      })
    }

  })

  fs.writeFileSync(outputFile, JSON.stringify(postsList.reverse(), null, 2))

}