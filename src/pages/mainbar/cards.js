import '../../assets/scss/mainbar/mainbar.css'
import bottom from '../../assets/icon/bottom.svg'
const Cards = ({picture}) =>{
    return(
    <div className="card-frame col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
            <div className="card-back">
              <div className="intro bg-dark">
                <img src={picture}/>
                {/* <button className="stream bg-dark">
                   Stream
                </button> */}
                <div className="month">
                  Monthly Collaborative Digital Marketing Sessions
                </div>
                <img src={bottom}/>
              </div>
                            
            </div>
           
          </div>
       
        )

      }

      export default Cards