import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const chunkArray = (array, size) => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  )
}

export default function Index() {

  return <div className='container'>
      <div className='content'>
        <p>Not there posts to show</p>
      </div>
    </div>
  
}