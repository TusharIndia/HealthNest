import Footer from "./child_components/footer"
import Header from "./child_components/header"
import Section1 from "./child_components/section1"
import Section2 from "./child_components/section2"
import Section3 from "./child_components/section3"
import Section4 from "./child_components/section4"
import Section5 from "./child_components/section5"
import Section6 from "./child_components/section6"

function Home(){
    return (
        <div>
            <Header/>
            <Section1/>
            <Section5/>
            <Section4/>
            <Section2 state={""}/>
            {/* <Section3/> */}
            <Section6/>
            <Footer/>


        </div>
    )
}

export default Home