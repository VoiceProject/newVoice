
import Fetch from '../../modules/fetch'
class TuijianActivityComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            activityList:[]
        }
    }
    componentWillMount(){
        Fetch.Get("http://api.12355.net/activity/offlineActivity/recommendList?sitenavDid="+this.props.position_info.did+"&_="+this.props.position_info.nowTime+"",{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                activityList:json.dataList
            })
        })
    }
    detailhref(id){
        location.href='#/activitydetail?activityId='+id;
    }
    showList(){
        let arr=[]
        let str=""
        this.state.activityList.forEach(ele=>{
            if(ele.actStatus==2){
                str="报名中"
            }else if(ele.actStatus==4){
                str="报名结束"
            }else if(ele.actStatus==5){
                str="已满员"
            }else if(ele.actStatus==3){
                str="活动中"
            }
            arr.push(<li onClick={this.detailhref.bind(this,ele.id)}>
                <div className="Main_tuijian_box__item--left">
                <img src={ele.imageUrl}/>
                <span>{str}</span>
                </div>
                
                <div className="Main_tuijian_box__item--right">
                    <h3>{ele.title}</h3>
                    <p>{ele.type}</p>
                    <p>{ele.activityTime}</p>
                    <p>{ele.address}</p>
                </div>
            </li>)
        })
        return arr;
    }
    componentDidMount(){
        
    }
    render(){
        return(
            <div className="Main_tuijian_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span>{this.props.title}</span>
                    <a href="#/activity" className="a_next"></a>
                </h3>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}
TuijianActivityComponent.defaultProps={
    title:"推荐活动"
}

export default TuijianActivityComponent