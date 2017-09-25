import Searchinput from './HelpComponent/Searchinput.js'
import FooterComponent from "./FooterComponent"
import TuijianActivityComponent from "./MainComponent/TuijianActivityComponent.js"
import HotActivityComponent from "./ActivityComponent/HotActivityComponent.js"
import ActivityLunboComponent from "./ActivityComponent/ActivityLunboComponent.js"


import store from '../flux/store'
import actions from "../flux/actions"

class ActivityComponent extends React.Component{
     constructor(props,context){
        super(props,context)
        this.state={
            placeholder:"搜索活动",
            position_info:store.getPositionInfo()
        }
    }
    render(){
        let {position_info}=this.state
        return(
           <div>
               <Searchinput alt={this.state.placeholder}/>
                <div className="help_other activity_zhoubian">
                    <div className="activity_lunbo_box">
                    <ActivityLunboComponent position_info={position_info}/>
                    </div>
                   <div className="activity_zhoubian--bottom">
                   <a className="help_first">
                       <img src='/img/zhoubian.png'/>
                       <span>周边活动</span>
                   </a>
                    <a>
                       <img src='/img/zhubanfang.png'/>
                       <span>主办方</span>
                   </a>
                   </div>
               </div>
            <TuijianActivityComponent position_info={position_info}/>
            <HotActivityComponent/>
            <FooterComponent active="/activity"/>
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


export default ActivityComponent;

