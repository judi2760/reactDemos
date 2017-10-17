import React, { Component } from 'react'

class Footer extends Component {

  render(){
    return (
      <footer id="fh5co-footer" role="contentinfo">

        <div className="container">
          <div className="col-md-3 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>About Us</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            <p><a href="#" className="btn btn-primary btn-outline with-arrow btn-sm">Join Us <i className="icon-arrow-right"></i></a></p>
          </div>
          <div className="col-md-6 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>Our Services</h3>
            <ul className="float">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Branding &amp; Identity</a></li>
              <li><a href="#">Free HTML5</a></li>
              <li><a href="#">HandCrafted Templates</a></li>
            </ul>
            <ul className="float">
              <li><a href="#">Free Bootstrap Template</a></li>
              <li><a href="#">Free HTML5 Template</a></li>
              <li><a href="#">Free HTML5 &amp; CSS3 Template</a></li>
              <li><a href="#">HandCrafted Templates</a></li>
            </ul>

          </div>

          <div className="col-md-2 col-md-push-1 col-sm-12 col-sm-push-0 col-xs-12 col-xs-push-0">
            <h3>Follow Us</h3>
            <ul className="fh5co-social">
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-google-plus"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
            </ul>
          </div>


          <div className="col-md-12 fh5co-copyright text-center">
            <p>&copy; 2016 Free HTML5 template. All Rights Reserved. <span>Designed with <i className="icon-heart"></i> by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> Demo Images by <a href="http://unsplash.com/" target="_blank">Unsplash</a></span></p>
          </div>

        </div>
      </footer>
    )
  }
}

export default Footer
