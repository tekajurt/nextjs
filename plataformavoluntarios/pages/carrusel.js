import 'bootstrap/dist/css/bootstrap.css'

const carrusel = () => {
    
    return (
        <div id="carouselExampleIndicators" className="carousel slide w-75 m-auto" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="/first.svg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/second.svg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="/third.svg" alt="Third slide"></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next"  href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default carrusel;