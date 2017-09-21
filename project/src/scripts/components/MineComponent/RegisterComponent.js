

class LunchComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          phonenum:'',
          showphone:false,
          showpsd:false,
          psd:'',
          showpsdagain:false
        }
    }
    phone(e){        
        let reg=/^1\d{10}$/;
        // console.log(typeof(e.target.value))        
        if(reg.test(e.target.value)){
            this.setState({
                phonenum:e.target.value
            })
        }else{
            this.setState({
                showphone:true
            })
        }
   }
    psd(e){
       let reg=/\w{6,16}/
        if(reg.test(e.target.value)){
            this.setState({
                psd:e.target.value
            })
        }else{
            this.setState({
                showpsd:true
            })
        }
   }
   psdcheck(e){
       if(e.target.value!=this.state.psd){
           this.setState({
                showpsdagain:true
           })
       }
   }
    render(){
        let {showpsd,showphone,showpsdagain}=this.state; 
                     
        return (
           <div className="login_full">
             <p>我和你之间就差这一步了，别走</p>
             <div className="login_info">
                <label>手机号</label>
                <input type="text" required placeholder="请输入登录账号或手机号码" onBlur={this.phone.bind(this)}/>
             </div>             
             {showphone?<span className="login_alt">请输入正确的手机号</span>:""}
             <div className="login_info">             
                <label>密码</label>             
                <input type="text" onBlur={this.psd.bind(this)} required placeholder="请输入用户密码"/>
             </div>
              {showpsd?<span className="login_alt">6-16位字母/数字/下划线</span>:""}
              <div className="login_info">             
                <label>确认密码</label>             
                <input type="text" onBlur={this.psdcheck.bind(this)} required placeholder="6-16位字母/数字/_"/>
             </div>
              {showpsdagain?<span className="login_alt">密码不一致</span>:""}
             <div className="login_info">             
                <label>验证码</label>             
                <input type="text" onBlur={this.psd} required placeholder="请输入4位验证码"/>
             </div>
             <div className="login_checkbox">
                 <input type="checkbox" checked/>
                 <span>阅读并接受<a href="http://www.gd12355.org/wechat/view/logoin/user_Agreement.html" target="_blank">《青年之声用户服务协议》</a></span>
             </div>
             <div className="login_box">
                <a href="/" className="login_go">提交，现在就去青年之声</a>       
                <a href="#/login">我已经注册过了，马上登录</a>
             </div>
          </div>
        )
    }
}
//定义默认属性
LunchComponent.defaultProps={

}



export default LunchComponent