
import{FaSearch} from "react-icons/fa"
function Header() {
    return (
        <div>
            <div>
                {/*  bottom Header */}
                <nav className="navbar navbar-expand-md navbar-light bg-dark">
                <a href="hes"  className="navbar-brand">EasyEdu</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                          <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll" style={{/*--bs-scroll-height: 100px;*/}}>
                            
                              <li className="nav-item">
                                <a href="hjfg"  className="nav-link">Admission</a>
                              </li>
                              <li className="nav-item">
                                <a href="k6ffgwgg"  className="nav-link">Watch</a>
                              </li>
                              <li className="nav-item">
                                <a href="ttyfvg"  className="nav-link">About</a>
                              </li>
                            
    
                          </ul>
                          <form className="">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Enter Your query" aria-describedby="searchbtn"/>
                              <button className="btn btn-primary" type="button" id="searchbtn"><FaSearch/></button>
                            </div>
                          </form>
                      </div>{/*collapse div */}
                </nav>
            </div>
        </div>
    )
}

export default Header
