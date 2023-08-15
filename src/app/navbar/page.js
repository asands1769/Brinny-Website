import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.css'
    
 export default function Navbar() {
    return (
    <div className="center">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-1">
                <Link href="about">About Me</Link> 
            </div>
            <div className="col-lg-6 col-md-6 col-sm-1">
                <Link href="home">Home</Link>
            </div>
        </div>
    </div>
    )
  }   
