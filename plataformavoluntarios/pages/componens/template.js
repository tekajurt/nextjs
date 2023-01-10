import Footer from "./footer"
import Navbar from "./nav"

const template = (props) => {
    return(
        <>
        <Navbar/>
        <div className="containerPage w-75 h-auto text-center">

            {props.children}
        </div>
        <Footer />
        </>
    )
}
export default template;