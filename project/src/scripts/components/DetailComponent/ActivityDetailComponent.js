import Fetch from '../../modules/fetch'
import ActivityComment from "./ActivityComment.js"
import $ from 'jquery'
class ActivityDetailComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            activitydetail:{},
            remark:""
        }
    }
   
    componentWillMount(){
        let that=this;
        let time=new Date().getTime();
        let activityId=location.hash.split("?")[1].split("&")[0].replace("activityId=","");
        Fetch.Get('http://api.12355.net/activity/offlineActivity/wechat/detail?activityId='+activityId+'&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
               activitydetail:json.data 
            })
        })   
    }
    showdata(){
        let that=this;   
        var str = '';
        if(this.state.activitydetail.actStatus){
            // console.log('a',this.state.activitydetail);
            str = that.state.activitydetail.remark;
            str = str.replace(/"/g,'');
            // console.log('str',str);
           // str = $(str).html();
        }
        $('#myDiv').html(str);     
    }
    render(){
        let {activitydetail}=this.state;
        let commentId
        if(activitydetail.id){
            commentId=activitydetail.id
        }
        console.log()
        return (
          <div className="activitydetail">
                <div className="headerdetail">
                  <a href="/" className="detail_main"></a>
                  <a href="#/activity" className="find_activity">找活动</a>         
                </div>
            
                <a>
                    <img src={activitydetail.imageUrl}/>
                </a>
                <div className="detail_title">
                    <p>{activitydetail.title}</p>
                    <span>收藏</span>
                </div>
                <div className="detail_dist">
                    <p>{activitydetail.actStatusStr}</p>
                    <span><i>距离报名结束还剩{activitydetail.remainDay}天</i><u>举报</u></span>
                </div>
                <span className="detail_time">{activitydetail.activityTime}</span>
                <span className="detail_address">{activitydetail.address}<i></i></span>
                <span className="detail_money">{activitydetail.money}</span>
                <span className="detail_orgname">{activitydetail.createOrgName}<i></i></span>
                <span className="detail_tel">{activitydetail.telephone}<i></i></span>
                <span className="detail_type">{activitydetail.type}</span>
                <span className="detail_activitynum">活动人数（{activitydetail.activitiesNumber}）<i>已有{activitydetail.enrolledNum}报名</i></span>
                <span className="detail_intro">活动介绍</span>                
                 <div id="myDiv">{this.showdata()}</div>
                 <ActivityComment/> 
                <div className="baoming">立即报名</div>
          </div>
        )
    }
}
//定义默认属性
ActivityDetailComponent.defaultProps={



}



export default ActivityDetailComponent