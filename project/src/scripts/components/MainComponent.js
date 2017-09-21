
import FooterComponent from "./FooterComponent"
import LunboComponent from "./MainComponent/LunboComponent.js"
import AddressBox from "./MainComponent/AddressBox.js"
import Fetch from '../modules/fetch'

class MainComponent extends React.Component{
    render(){
        return(
            <div className="full-height mainIndexBox">
                <div id="mainLunbo">
                    <div className="lunboBox">
                        <LunboComponent />
                    </div>
                        <AddressBox/>
                </div>
                
                <FooterComponent active="/main"/>
            </div>
            
        )
    }
}


export default MainComponent

