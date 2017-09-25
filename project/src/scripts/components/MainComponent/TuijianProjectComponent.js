
import Fetch from "../../modules/fetch"
class TuijianProjectComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            activityList:[]
        }
    }
    componentWillMount(){
        Fetch.Post("http://api.12355.net//project/indexActivityList",{
            showNumber:3
        }).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                activityList:json.dataList
            })
        })
    }
    showList(){
        let arr=[]
        let str=""
        this.state.activityList.forEach(ele=>{
            if(ele.stage==2){
                str="报名中"
            }else if(ele.stage==4){
                str="报名结束"
            }
            arr.push(<li>
                <div className="Main_project_box__item--top">
                <img src={ele.bannerUrl}/>
                </div>
                
                <div className="Main_project_box__item--bottom">
                    <span>{ele.type}</span>
                    <span>{ele.title}</span>
                    <span className={str=="报名中"?"word-green":"word-gary"}>{str}</span>
                </div>
            </li>)
        })
        return arr;
    }
    render(){
        return(
            <div className="MainProject_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span>{this.props.title}</span>
                    <a href="#" className="a_next"></a>
                </h3>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}
TuijianProjectComponent.defaultProps={
    title:"推荐项目"
}

export default TuijianProjectComponent