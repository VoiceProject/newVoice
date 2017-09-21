


class MainPhotoMenu extends React.Component{
    render(){
        return(
            <div className="main_photoMenu">
            <div className="main_photoMenu__left">
                <a href="#/activity">
                    <span>找·活动</span>
                    <img src="http://www.gd12355.org/wechat/public/img/wudakuai_hd02.png"/>
                </a>
                <a href="#/consult">
                    <span>找·资讯</span>
                    <img src="http://www.gd12355.org/wechat/public/img/wudakuai_zx.png"/>
                </a>
            </div>
            <div className="main_photoMenu__right">
                <a href="#" className="main_photoMenu__right--top">
                    <span>重磅项目</span>
                    <img src="http://www.gd12355.org/wechat/public/img/wudakuai_zbxm.png"/>
                </a>
                <div className="main_photoMenu__right--bottom">
                <a href="#/help">
                    <span>找·帮助</span>
                    <img src="http://www.gd12355.org/wechat/public/img/wudakuai_bz.png"/>
                </a>
                <a href="#">
                    <span>青年之家</span>
                    <img src="http://www.gd12355.org/wechat/public/img/wudakuai_fx.png"/>
                </a>
                </div>
            </div>
        </div>
        )
    }
}

export default MainPhotoMenu