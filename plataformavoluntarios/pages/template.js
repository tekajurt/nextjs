import Footer from "./footer"
import Navbar from "./nav"

const template = (props) => {
    return(
        <>
        <Navbar/>
        {props.children}
        <Footer></Footer>
        </>
    )
}
export default template;