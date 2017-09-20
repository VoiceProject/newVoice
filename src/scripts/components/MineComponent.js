
import LunchComponent from './MineComponent/LunchComponent.js';
import {Link} from 'react-router';
class MineComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
            show1:false,
            show2:false,
            show3:false
        }
    }
    close(){
        document.getElementById("close").style.display="none";
    }
    out(str){ 
        let that=this; 
        if(str=="lunch"){
            this.setState({
            show1:!that.state.show1,
            show2:false,
            show3:false
        })
        }else if(str=="guanzhu"){
            this.setState({
            show2:!that.state.show2,
            show1:false,
            show3:false
        })
        } else if(str=="collection"){
            this.setState({
            show3:!that.state.show3,
            show1:false,
            show2:false
        })
        }                   
    }
    gotoregister(hash,e){
        console.log(e);
        // e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        e.cancelBubble=true;
        location.href=hash+"?_k=72b3ot";
    }
    render(){
        // console.log(this)
        return (
            <div className="full-height">
                <div className="Mine_body">
                    <div className="Mine_top">
                        <a className="Mine_a" href="">
                            <img/>
                            <span>
                               <button> <Link to="/activity">登录</Link></button>
                                <button><Link to="/activity">注册</Link></button>
                            </span>
                        </a>
                    </div>
                    <div className="Mine_list">
                        <div className="Mine_lunch" onClick={this.out.bind(this,"lunch")}>
                            <h2 className="lunch">我的发布</h2>
                            {
                                this.state.show1? <span className="spantwo"></span>: <span className="spanone"></span>
                            }                                                       
                        </div>
                        {
                            this.state.show1? <LunchComponent data={this.props.info_lunch}/>:''
                        }
                       
                    </div>
                    <div className="Mine_lunch" onClick={this.out.bind(this,"guanzhu")}>
                        <h2 className="guanzhu">我的关注</h2>
                        {
                            this.state.show2? <span className="spantwo"></span>: <span className="spanone"></span>
                        }   
                    </div>
                    {
                         this.state.show2? <LunchComponent data={this.props.info_guanzhu}/>:''
                    }            
                    <div className="Mine_lunch" onClick={this.out.bind(this,"collection")}>
                        <h2 className="collection">我的收藏</h2>
                         {
                            this.state.show3? <span className="spantwo"></span>: <span className="spanone"></span>
                        }  
                    </div>
                    {
                         this.state.show3? <LunchComponent data={this.props.info_collection}/>:''
                    }  
                    <div className="Mine_lunch">
                        <h2 className="news">我的消息</h2>
                        <span></span>
                    </div>
                    <div className="Mine_lunch Mine_news">
                        <h2 className="ques">我要吐槽</h2>
                        <span></span>
                    </div>
                    <div className="Mine_lunch Mine_news">
                        <h2 className="my2ndclass">我的第二课堂</h2>
                        <span></span>
                    </div>
                    <div className="Mine_lunch Mine_news">
                        <h2 className="apply">申请成为咨询导师</h2>
                        <span></span>
                    </div>
                    <div className="Mine_bottom" id="close">
                        <i>
                            <span className="iconfont icon-close" onClick={this.close}></span>
                            <img src="https://p.qpic.cn/qidian_pic/2852150974/20170731a118e2484f4ebd398c9bb35c1b48d65a/0"/>
                        </i>
                        <div className="Mine_left">
                            <h3>在线客服</h3>
                            <p>服务时间8:30-18:00</p>
                        </div>
                        <div className="Mine_right">
                            <u className="iconfont icon-QQ"></u>
                            <span>在线咨询</span>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
//定义默认属性
MineComponent.defaultProps={
    info_lunch:[
            {"img":"http://www.gd12355.org/wechat/public/img/botIcon02_blue.png","title":"活动"},
            {"img":"http://www.gd12355.org/wechat/public/img/zixunIcon.png","title":"咨询"},
            {"img":"http://www.gd12355.org/wechat/public/img/qiuzhuIcon.png","title":"求助"},
            {"img":"http://www.gd12355.org/wechat/public/img/xxfwIcon.png","title":"线下服务"}    
        ],
     info_guanzhu:[
            {"img":"http://www.gd12355.org/wechat/public/img/botIcon02_blue.png","title":"人气主办方"},
            {"img":"http://www.gd12355.org/wechat/public/img/zbxmIcon.png","title":"咨询"},
            {"img":"http://www.gd12355.org/wechat/public/img/qiuzhuIcon.png","title":"求助"},
            {"img":"http://www.gd12355.org/wechat/public/img/xxfwIcon.png","title":"线下服务"}
        ] ,
     info_collection:[
           {"img":"http://www.gd12355.org/wechat/public/img/botIcon02_blue.png","title":"活动"},
            {"img":"http://www.gd12355.org/wechat/public/img/zixunIcon.png","title":"咨询"}
        ]     

}



export default MineComponent