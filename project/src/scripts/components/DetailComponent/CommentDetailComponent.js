
import Fetch from '../../modules/fetch'
import FooterComponent from "../FooterComponent.js"
import $ from "jquery"

        // window.onscroll=function(){
        //     console.log(1)
        //     document.title=document.documentElement.scrollTop
        // }
       
        // $("#app").scroll(function(){
        //     console.log($(this).offset().top)
        // })

class CommentDetailComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            question:{},
            comment:[],
            page:1
        }
    }
    // listenScroll(id){
    //     let that=this
    //      $("#app").on("scroll",function(){
    //         let st=$(this).scrollTop()
    //         let ch=document.documentElement.clientHeight;
    //         if(st+ch==sh+156){
    //             that.setState({
    //                 page:++that.state.page
    //             })
    //             that.getComment(id,that.state.page)
    //             sh=document.documentElement.scrollHeight;
    //         }
    //     })
    // }
    componentWillMount(){
        let id=location.hash.split("?")[1].split("&")[0].replace("qyId=","");
        let that=this
        this.getQuestion(id)
        this.getComment(id,this.state.page)
        // this.listenScroll(id)
    }
    getQuestion(id,cb){
        let time=new Date().getTime()
         Fetch.Get('http://api.12355.net/pc/service/getQuesDetail?quId='+id+'&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            this.setState({
               question:json
            })
        })
    }
    showQuestion(){
        if(JSON.stringify(this.state.question)!="{}"){
            let qs=this.state.question.rows
            let user=this.state.question.account
            let str=<div className="question_box">
                        <div className="question_box__img">
                            <img src={user.photoUrl}/>
                        </div>
                        <div className="question_box__content">
                            <h3 className="">{qs.title}</h3>
                            <p>{qs.askTime}</p>
                        </div>
                        <p className="word">{qs.askContent}</p>
                        <div className="info">
                            <p>
                            <a href="">举报</a>
                            <i></i>
                            <span>({qs.collectsNum})</span>
                            <i className="dianzan_icon"></i>
                            <span>({qs.likesNum})</span>
                            <i></i>
                            <span>({qs.commentsNum})</span>
                        </p>
                        </div>
                        
                    </div>
                

            return str
        }
    }

    getComment(id,page){
        let time=new Date().getTime()
         Fetch.Get('http://api.12355.net/pc/service/getReplysByQuestionId?quId='+id+'&page='+page+'&rows=6&_='+time+'',{}).then((res)=>{
            return res.json()
        }).then((json)=>{
            if(json.rows.length==0){
                alert("所有数据加载完毕")
            }else{
                this.setState({
               comment:this.state.comment.concat(json.rows)
            })
            }
            
        })

    }
    addComment(){
        let id=location.hash.split("?")[1].split("&")[0].replace("qyId=","");
        this.setState({
            page:++this.state.page
        })
        this.getComment(id,this.state.page)
    }
    showComment(){
        let arr=[]
        // console.log(this.state.comment)
        this.state.comment.forEach(ele=>{
            let listArr=[]
            // console.log(ele.childRepliesList)
            if(ele.childRepliesList.length!=0){
                ele.childRepliesList.forEach(item=>{
                listArr.push(
                    <div className="comment_list__item">
                        <p>
                        <span className="color2185cf">{item.creatorName}</span>
                        回复
                        <span className="color2185cf">{ele.creatorName}</span>
                        :
                        </p>
                        <p>
                            {item.replyContent}
                        </p>
                        <p className="time_info">
                            {item.replyTime}
                            <a className="web_icon">
                                
                            </a>
                            <i className="dianzan_icon"></i>
                            <span>（{item.likesCount}）</span>
                        </p>
                    </div>)
                })
            }
            arr.push(<li>
                
                 <div className="question_box__img">
                    <img src={ele.orgPhotoUrl?ele.orgPhotoUrl:ele.creatorPhoto}/>
                </div>
                <div className="question_box__content">
                    <h3 className="">{ele.fullName?ele.fullName:ele.creatorName}</h3>
                     <p className="time_info">
                    {ele.replyTime}
                    <a className="web_icon"></a>
                    <i className="dianzan_icon"></i>
                    <span>（{ele.likesCount}）</span>
                </p>
                </div> 
                 <div className="comment_list">
                     <p>{ele.replyContent}</p>
                     {listArr}
                </div> 
            </li>)
        })

        return arr
    }
    render(){

        return(
        <div className="full-height bg-white">
             <div className="head_link">
                    <a href="/#main" className="go_main"></a>
                    <a href="/#consult" className="go_help">{this.props.webTitle}</a>
            </div>
            <div >
                {this.showQuestion()}
            </div>
            <div className="comment_box bg-white">
                {this.showComment()}
                <div style={{textAlign:"center"}} onClick={this.addComment.bind(this)}>点击加载更多</div>
            </div>
            
            <FooterComponent active="/consult"/>
        </div>
        )
    }
}

CommentDetailComponent.defaultProps={
    webTitle:"找咨询"
}

export default CommentDetailComponent