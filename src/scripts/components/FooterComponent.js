
import {Link} from 'react-router'
class FooterComponent extends React.Component{
    render(){

        let {active}=this.props
        
        return(
            <ul className="clearfix">
                <a href="#/main" className={active=='/main'?'active':''}>
                    <span className="iconfont icon-shouye"></span>
                    <span>首页</span>
                </a>
                <a href="#/activity" className={active=='/activity'?'active':''}>
                    <span className="iconfont icon-qiqiusolid"></span>
                    <span>找活动</span>
                </a>
                <a href="#/consult" className={active=='/consult'?'active':''}>
                    <span className="iconfont icon-bf-message"></span>
                    <span>找咨询</span>
                </a>
                <a href="#/help" className={active=='/help'?'active':''}>
                    <span className="iconfont icon-aixin"></span>
                    <span>找帮助</span>
                </a>
                <a href="#/mine" className={active=='/mine'?'active':''}>
                    <span className="iconfont icon-wode"></span>
                    <span>我的</span>
                </a>
            </ul>
        )
    }
}

FooterComponent.defaultProps={
    active:"/main"
}


export default FooterComponent;

