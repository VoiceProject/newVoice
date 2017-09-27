
import Fetch from "../../modules/fetch"
import PersonComment from "./PersonComment.js"
import $ from "jquery"
class FindHelpComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        
        this.state={
            pcHelp:{},
            organ:{}
        }
    }
    componentWillMount(){
        var p = location.hash
        let that=this
        var hpId=p.split("?")[1].split("&")[0].replace("hpId=","")
        this.getData(hpId,function(id){
            Fetch.Get("http://api.12355.net/pc/help/findOrganizationById?oid="+id+"&_="+that.props.time+"",{}).then(res=>{
            return res.json()
        }).then(json=>{
            console.log(json)
            that.setState({
                organ:json.rows
            })
        })
        })
        
    }
    getData(id,cb){
        Fetch.Get("http://api.12355.net/pc/help/pcHelpDetail?id="+id+"&_="+this.props.time+"",{}).then(res=>{
            return res.json()
        }).then(json=>{
            //console.log(json)
            this.setState({
                pcHelp:json,
                oid:json.rows.acquirer
            })
            cb(json.rows.acquirer)
        })
    }
    showView(){
        var pcAll=this.state.pcHelp
        var pc=this.state.pcHelp.rows
        var organ=this.state.organ
        let helpIs=""
        let imgArr=[]
        let helpTime=[]
        
        if(JSON.stringify(pc)=="{}"||JSON.stringify(organ)=="{}"){
            return
        }else{
            
            if(pc.auditStatus==1){
                helpIs="求助中"
            }else if(pc.auditStatus==2){
                helpIs="已解决"
            }
            pc.imgUrl.split(",").forEach(function(ele){
                imgArr.push(<div className="swiper-slide">
                    <img src={ele}/>
                </div>)
            })
            
            pcAll.helpAudit.forEach(ele=>{
                let chuliStr=""
                if(ele.auditType==3){
                    chuliStr="等待处理"
                }
                 if(ele.auditType==0){
                    chuliStr="处理中"
                }
                 if(ele.auditType==6){
                    chuliStr="组织帮助"
                }
                 if(ele.auditType==2){
                    chuliStr="已解决"
                }
                helpTime.push(<li><p className="p_time"><span className="dian">●</span>{ele.updateTime}&nbsp;{chuliStr}</p>
                {ele.content==""?"":<p className="p_time">{ele.content}</p>}
                </li>)
            })


            let str=<div className="FindHelp_content">
                <div className="FindHelp_banner">
                    <div className="swiper-wrapper">
                        {imgArr}
                    </div>
                    <div className="swiper-button-prev changePage"></div>
                    <div className="swiper-button-next changePage"></div>
                    <div className="swiper-pagination"></div>
                </div>
                <div className="FindHelp_info">
                    <p>{pc.title}<a href="http://www.gd12355.org/wechat/view/find_help/report.html" className="jubao">举报</a></p>
                    <p><span>求助人：{pc.helpPeople}</span><b>{helpIs}</b></p>
                    <p><span>受理方：{organ.name}</span><strong>{pc.helpType}</strong></p>
                    <p><span>筹款金额：{pc.totalAmount}元</span></p>
                </div>
                <div className="help_content">
                    <h4>求助详情</h4>
                    <p className="p_word"></p>
                </div>
                <div className="help_content">
                    <h4>处理进度</h4>
                    {helpTime}
                </div>
                 <PersonComment id={pcAll.helpAudit[0].hpId}/> 
                  {pc.auditStatus==1? <a href="" className="help_people">
                    我要帮助TA
                </a>:""}
                </div>
               
            return str;
        }
        // var arr=[]
        // console.log(this.state.pcHelp)
        // this.state.pcHelp.forEach(ele=>{
        //     arr.push(<div>{ele.title}</div>)
        // })
        // return arr
    }
    render(){
        return(
            <div className="FindHelp_box full-height">
                <div className="head_link">
                    <a href="/#main" className="go_main"></a>
                    <a href="/#help" className="go_help">{this.props.webTitle}</a>
                </div>
                    {this.showView()}
                   
               
            </div>
        )
    }

    componentDidUpdate(){
         $(".p_word").html(this.state.pcHelp.rows.helpContent)
        this.state.swiper = new Swiper ('.FindHelp_banner', {
            direction: 'horizontal',
            autoplay:3000,
            
             loop:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            // paginationCustomRender: function (swiper, current, total) {
            //         let str=`<ul class='li_pagination_box'>
            //             <li class=${current == 1 ? "active" :""}>1</li>
            //             <li class=${current == 2 ? "active" :""}>2</li>
            //             <li class=${current == 3 ? "active" :""}>3</li>
            //             <li class=${current == 4 ? "active" :""}>4</li>
            //         </ul>`;
            //         return str
            // },
            paginationClickable:true,
             autoplayDisableOnInteraction:false,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
          })  
        // this.state.swiper.update()
    }
}


FindHelpComponent.defaultProps={
    webTitle:"找帮助",
    time:new Date().getTime()
}
export default FindHelpComponent