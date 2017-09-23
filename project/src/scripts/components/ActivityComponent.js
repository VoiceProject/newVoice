import Searchinput from './HelpComponent/Searchinput.js'
import FooterComponent from "./FooterComponent"
import TuijianActivityComponent from "./MainComponent/TuijianActivityComponent.js"


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
                   <a className="help_first">
                       <img src='/img/zhoubian.png'/>
                       <span>周边活动</span>
                   </a>
                    <a>
                       <img src='/img/zhubanfang.png'/>
                       <span>主办方</span>
                   </a>
                   
               </div>
            <TuijianActivityComponent position_info={position_info}/>
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

