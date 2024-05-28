import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Header(){
  const navigate = useNavigate()

    return (
        
            <nav className="navbar">
  <div className="newcontainer" >

    <div className="navbar-header">
      <button className="navbar-toggler" data-toggle="open-navbar1">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <a href="/" className="pointer text-xl">
        <h4>Well<span>Nest</span></h4>
      </a>
    </div>

    <div className="navbar-menu" id="open-navbar1">
      <ul className="navbar-nav">
        <li ><a href="/">Home</a></li>
        
        <li><a href="/diagnosis">Diagnosis</a></li>
        <li><a href="/therpy">Therpy</a></li>
        <li><a href="/mood">Reflect</a></li>
        <li><a href="/medi">Meditation</a></li>

        <li><a href="/yoga">Yoga</a></li>
        <li><a href="/awareness">Awareness</a></li>

        
      </ul>
    </div>
    <div>
    <button  onClick ={()=>{navigate('/login')}} type="button" className="btn btn-primary" style={{borderRadius:'13px' ,fontSize:'1rem' , textAlign:'center', width:'7rem' , marginRight:'1rem' , height:'2rem', paddingTop:'-0.7rem'}}> Login</button>
    {/* <button type="button" className="btn btn-outline-primary"  style={{borderRadius:'13px' ,fontSize:'1rem' , textAlign:'center', width:'7rem' , marginRight:'1rem' , height:'2rem', paddingTop:'-0.7rem'}}>Signup</button> */}
    </div>
  </div>
</nav>

        
    )
}

export default Header