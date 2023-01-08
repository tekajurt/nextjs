

const nav = () => {
    return (
        <nav className="navbar fixed-top  position-relative navbar-expand-lg navbar-light text-dark bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quienes somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Inscripción</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contáctenos</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default nav;