import Image from 'next/image';
import { promises as fs } from 'fs';
import path from 'path';
import React from 'react';
import Navbar from "../navbar/page";
import 'bootstrap/dist/css/bootstrap.css';


const GalleryPage = async () => {
    const imageDirectory = path.join(process.cwd(), './public/images');
    const imageFilenames = await fs.readdir(imageDirectory)
    return (
      <div>
            <Navbar></Navbar>
            <div className="container">
            <div className="center">
                <Logo/>
                <Gallery images={imageFilenames} />
            </div>
        </div>
      </div>
    )
  }
  const Gallery = ({ images }) => {
    return (<div><div className="row">
        {images.map((imageString) => <div className='col-lg-3 col-md-4 col-sm-6'><Image className="card" width={500} height={500} alt={'alt'} src={`/images/${imageString}`} /> <br></br></div>)}
    </div></div>)
}
const Logo = () => {
    return (
        <div className='center1'>
            <Image alt="Brinny Logo" className="logo"  width={250} height={250} src='/logo/brinna-logo.PNG'></Image>
        </div>
    )
}

export default GalleryPage;