import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image';

 export default function Navbar() {
    return (
<div className="pink">
  <div>
    <Logo></Logo>
    <Link className="navbarlinks" href="/gallery">Illustrations</Link>
    <Link className="navbarlinks" href="/about">About</Link>
    <Link className="navbarlinks" href="/gallery">BumbleTees</Link>
    <Link className="navbarlinks" href="/about">About</Link>
  </div>
  <br></br><br></br><br></br>
  <br></br><div className="container c"><p className="movingLinks">hello this will be moving text like omg</p></div><br></br>
</div>
    )
  }   


  const Logo = () => {
    return (
<Image alt="Brinny Logo" className="displayblock"  width={175} height={175} src='/logo/brinna-logo.png'></Image>
    )
}