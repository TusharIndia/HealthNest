
import Footer from "./child_components/footer"
import Header from "./child_components/header"
import Section2 from "./child_components/section2"
import Section3 from "./child_components/section3"
import Section5 from "./child_components/section5"

function Service(){
    return(
        <div>
           <Header/>
            <Section5/>
            <div style={{marginTop:'-11rem'}}> <Section2 /></div>
          
           <Section3/>

            <Footer/>
        </div>
    )
}

export default Service