import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
    
 export default function Navbar() {
    return (
<div className="pink">
  <div className="container">
    <div className="row">
    <Link className="col-lg-6 col-md-6 col-sm-6 col-6" href="/home">Illustrations</Link>
    <Link className="col-lg-6 col-md-6 col-sm-6 col-6" href="/about">About</Link>
    </div>
  </div>
</div>
    )
  }   
