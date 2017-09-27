import Fetch from '../../modules/fetch'
import $ from 'jquery'
class HotDetailComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            hotdetail:{}
        }
    }
   
    componentWillMount(){
        let that=this;
        let time=new Date().getTime();
        let oid=location.hash.split("?")[1].split("&")[0].replace("oid=","");
        Fetch.Get('http://api.12355.net/pc/help/findOrganizationById?oid='+oid+'&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            that.setState({
               hotdetail:json.rows              
            })
             console.log('acti',that.state.hotdetail);
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
        let {hotdetail}=this.state;
        let starStr="★★★★★☆☆☆☆☆"
        let rate=hotdetail.activityAverageScore;
        return (
          <div className="hotdetail">
               <div className="hot_header">
                    <img src={hotdetail.photoUrl}/>
                    <div className="hot_header__right">
                        <h2>{hotdetail.fullName}</h2>
                        <p>简称：{hotdetail.name}</p>
                         <h4>{starStr.slice(5-rate,10-rate)}<span>{hotdetail.activityAverageScore}</span><i>{hotdetail.activityScoreCount}</i></h4> 
                    </div>
               </div>
               <div className="hot_atten">
                   <span>{hotdetail.attentionCount}人关注</span>
                   <p>
                       <a>关注</a>
                       <a>向TA求助</a>
                   </p>
               </div>
                <span className="detail_address">{hotdetail.address}<i></i></span>
              <span className="detail_tel">{hotdetail.telephone}<i></i></span>
                <div className="des">
                    <span>简介</span>
                    <span>TA的活动</span>
                    <span>TA的回答</span>
                    <span>TA的帮助</span>
                    <span>TA的服务</span>
                    <span>TA的重磅</span>
                </div>
                <p>{hotdetail.description}</p>
          </div>
        )
    }
}
//定义默认属性
HotDetailComponent.defaultProps={

}



export default HotDetailComponent