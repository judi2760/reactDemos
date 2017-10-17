import React, {Component} from 'react'

class Work extends Component {
  render(){
    return (
      <div id="fh5co-work-section" className="fh5co-light-grey-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading animate-box">
              <h2>Projects</h2>
              <p>See our latest projects. </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 animate-box">
              <a href="#" className="item-grid text-center">
                <div className="image" style={{backgroundImage: 'url(images/image_1.jpg)'}}></div>
                <div className="v-align">
                  <div className="v-align-middle">
                    <h3 className="title">Weather App</h3>
                    <h5 className="category">Web Application</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 animate-box">
              <a href="#" className="item-grid text-center">
                <div className="image" style={{backgroundImage: 'url(images/image_2.jpg)'}}></div>
                <div className="v-align">
                  <div className="v-align-middle">
                    <h3 className="title">Geo App</h3>
                    <h5 className="category">User Interface</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4 animate-box">
              <a href="#" className="item-grid text-center">
                <div className="image" style={{backgroundImage: 'url(images/image_3.jpg)'}}></div>
                <div className="v-align">
                  <div className="v-align-middle">
                    <h3 className="title">Bank App</h3>
                    <h5 className="category">Branded</h5>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-12 text-center animate-box">
              <p><a href="#" className="btn btn-primary with-arrow">View More Projects <i className="icon-arrow-right"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Work
