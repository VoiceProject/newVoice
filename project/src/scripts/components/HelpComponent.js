import FooterComponent from "./FooterComponent"
import Searchinput from './HelpComponent/Searchinput.js'
import Helpmore from './HelpComponent/helpmore.js'
import MainHelpComponent from './MainComponent/MainHelpComponent.js'
class HelpComponent extends React.Component{
      constructor(props,context){
        super(props,context)

        this.state={
            placeholder:"搜索帮助"
        }
    }
    render(){
        return(
           <div className="pull-height">
               <div className="help_body">
                   <Searchinput alt={this.state.placeholder}/>
               </div>
               <div className="help_pic">
                   <img src='/img/banner.png'/>
               </div>
               <Helpmore data={this.props.datainfo}/>
               <div className="help_other">
                   <a className="help_first">
                       <img src='/img/helpta.png'/>
                       <span>我要帮TA</span>
                   </a>
                    <a>
                       <img src='/img/qiuzhu.png'/>
                       <span>我要求助</span>
                   </a>
                   
               </div>
               <MainHelpComponent/>
               <FooterComponent active="/help"/>
           </div>
        )
    }
}
HelpComponent.defaultProps={
    datainfo:[
        {photoUrl:"/img/zhuxue.png",name:"贫困助学"},
        {photoUrl:"/img/jiuzhu.png",name:"重症救助"},
        {photoUrl:"/img/zaihai.png",name:"灾害救助"},
        {photoUrl:"/img/fuwu.png",name:"志愿服务"},
        {photoUrl:"/img/more.png",name:"更多"}
    ]
}

export default HelpComponent;

