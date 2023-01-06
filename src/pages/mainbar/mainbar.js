import React from "react";
import '../../assets/scss/mainbar/mainbar.css'
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import bottom from '../../assets/icon/bottom.svg'
import one from '../../assets/icon/one.svg'
import two from '../../assets/icon/two.svg'
import three from '../../assets/icon/three.svg'
import four from '../../assets/icon/four.svg'
import five from '../../assets/icon/five.svg'
import six from '../../assets/icon/six.svg'
import perks from '../../assets/icon/perks.svg'
import jane from '../../assets/icon/jane.svg'
import Cards from '../mainbar/cards.js'


 const item =[one, two, three, four, five, six];

const Mainbar = () =>{
 
  return(
    <div className="main ">
        <br/>
        <br/>
        <div className="port">
      <div className="row">
          NFTs Portfolio
        </div>
        <br/>
        <div className="detail">
          Below are listed the stats for NFT collections and individual assets that have sold for the highest prices. We the data list in descending order.
        </div>
        <br/>
        <div className="first-line">
          <div className="row">
            <div className="collect col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-6 col-6">
              <button className="button text-dark text-size">Collection</button>
              <div className="mint">
                Available to Mint
              </div>          
            </div> 
            <div className="right-s col-xxl-5 col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 col-12">
              <div className="row">
                <div className="sea col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 col-12">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />                    
                  </Form>
                </div>
                <div className="perks col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 col-6">
                  <img src={perks}/>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 col-6">
                  <img src={jane}/>
                </div>
              </div>
            </div> 
           
          </div>                  
        </div>
        <div className="ca row">
          {
            item.map((ele,idx) =>{
              return (<Cards picture={ele}/>)
            })
          }
        </div>
      </div>
      
    </div>

  )
}

export default Mainbar