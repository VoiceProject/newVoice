import Searchinput from './HelpComponent/Searchinput.js'
import Helpmore from './HelpComponent/helpmore'
import FooterComponent from "./FooterComponent"
import ConsultQuestionComponent from "./ConsultComponent/ConsultQuestionComponent.js"

import Fetch from '../modules/fetch'


class ConsultComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            placeholder:"搜索问题",
            datainfo:[]
        }
    }
    componentWillMount(){
        this.getData()
    }
    getData(){
            let that=this;
            let time=new Date().getTime()
            Fetch.Get('http://api.12355.net/pc/service/getServiceCategory?rows=4&_='+time+"",{}).then((res)=>{
                return res.json()
            }).then((json)=>{
                let arr=json.rows.splice(0,5)  
                that.setState({
                    datainfo:arr
                })
            })
        }
    render(){
        return(
           <div className="consult_body">
            <Searchinput alt={this.state.placeholder}/>
            <div className="consult_banner">
                <img src='/img/bannerpic.png'/>
            </div>
            <div className="consult_ques">
                <a className="dajia">问大家</a>
                <a className="zuzhi">问组织</a>
                <a className="zhuanjia">问专家</a>
            </div>
            <Helpmore data={this.state.datainfo}/>
            <ConsultQuestionComponent/>
            <FooterComponent active="/consult"/>
           </div>
        )
    }
}


export default ConsultComponent;

