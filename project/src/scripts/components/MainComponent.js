
import FooterComponent from "./FooterComponent"
import LunboComponent from "./MainComponent/LunboComponent.js"
import AddressBox from "./MainComponent/AddressBox.js"
import MainActivityComponent from "./MainComponent/MainActivityComponent.js"
import MainPhotoMenu from "./MainComponent/MainPhotoMenu.js"
import TuijianActivityComponent from "./MainComponent/TuijianActivityComponent.js"
import TuijianProjectComponent from "./MainComponent/TuijianProjectComponent.js"

import Fetch from '../modules/fetch'
import store from '../flux/store'
import actions from '../flux/actions'


class MainComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state=JSON.stringify(store.getPositionInfo())=="{}"?{
            position_info:{
                districtName:"广东",
                did:440000,
                nowTime:new Date().getTime()
            }
        }:{
            position_info:store.getPositionInfo()
        }
        // console.log(store.getPositionInfo(),"mainComponent")
    }
    render(){
        let {position_info}=this.state
       
        return(
            <div className="full-height mainIndexBox">
                <div id="mainLunbo">
                    <div className="lunboBox">
                        <LunboComponent position_info={position_info}/>
                    </div>
                        <AddressBox position_info={position_info}/>
                </div>
                <div className="MainActivity_box">
                    <MainActivityComponent/>
                </div>
                <MainPhotoMenu/>
                <TuijianActivityComponent position_info={position_info}/>
                <TuijianProjectComponent position_info={position_info}/>
                <FooterComponent active="/main"/>
            </div>
            
        )
    }
    componentDidMount(){
    	let that = this
    	//当store里数据改变的时候，组件会重新获取数据
    	store.addPositionChangeListener(()=>{
    		that.setState({
	            position_info:store.getPositionInfo()
	       	})
        })
    }
    
}


export default MainComponent

