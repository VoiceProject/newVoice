import Searchinput from './HelpComponent/Searchinput.js'
import FooterComponent from "./FooterComponent"
class ActivityComponent extends React.Component{
     constructor(props,context){
        super(props,context)

        this.state={
            placeholder:"搜索活动"
        }
    }
    render(){
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
            <FooterComponent active="/activity"/>
           </div>
        )
    }
}


export default ActivityComponent;

