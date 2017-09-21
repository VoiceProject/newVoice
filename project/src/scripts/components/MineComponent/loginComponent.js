

class LunchComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          phonenum:[]
        }
    }
   phone(e){
        let reg=/^1\d{10}$/;
        reg.test(e.target.value)?
        this.setState={
            phonenum:e.target.value
        }:"";
   }
    psd(e){
        let reg=/^1\d{10}$/;
        reg.test(e.target.value)?
        this.setState={
            phonenum:e.target.value
        }:"";
   }
    render(){
        // console.log(this)
        let {value}=this.state;
        return (           
          <div className="login_full">
             <p>我和你之间就差这一步了，别走</p>
             <div className="login_info">
                <label>手机号</label>
                <input type="text" required placeholder="请输入登录账号或手机号码" onBlur={this.phone}/>
             </div>
             <div className="login_info">             
                <label>密码</label>             
                <input type="text" onBlur={this.psd} required placeholder="请输入用户密码"/>
             </div>
             <div className="login_checkbox">
                 <input type="checkbox" checked/>
                 <span>阅读并接受<a href="http://www.gd12355.org/wechat/view/logoin/user_Agreement.html" target="_blank">《青年之声用户服务协议》</a></span>
             </div>
             <div className="login_box">
                <input type="button" value="登录" id="login_inp"/>
             </div>
          </div>
        )
    }
}
//定义默认属性
LunchComponent.defaultProps={

}



export default LunchComponent