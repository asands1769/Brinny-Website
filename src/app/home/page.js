import Image from 'next/image'
import { promises as fs } from 'fs'
import path from 'path'
import React from 'react';
import Navbar from "../navbar/page"
import 'bootstrap/dist/css/bootstrap.css'


const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), './public/images');
    const imageFilenames = await fs.readdir(imageDirectory)
    console.log(imageFilenames)
    return (
      <div>
            <Navbar></Navbar>
            <div className="container">
            <div className="center">
                <Title Name='Brinny Illustrations' />
                <Gallery images={imageFilenames} />
            </div>
        </div>
      </div>
    )
  }
  const Gallery = ({ images }) => {
    return (<div><div className="row">
        {images.map((imageString) => <div className='col-lg-3'><Image className="card" width={500} height={500} alt={'alt'} src={`/images/${imageString}`} /> <br></br></div>)}
    </div></div>)
}
const Title = ({ Name, Title }) => {
    return (
        <div className='center1'>
            <Image width={300} height={300} src='/logo/brinna-logo.PNG'></Image>
        <h1 className="title">
            {Name} {Title}
        </h1>
        </div>
    )
}

export default GalleryPage;