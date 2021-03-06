
import fetch from '../../modules/fetch'
class LunchComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          phonenum:'',
          showphone:false,
          showpsd:false,
          psd:'',
          showpsdagain:false,
          randStr:"",
          showcode:false,
          showjson:false,
           checkInp:true
        }
    }
    componentWillMount(){
        this.randCode()
    }
    setData(){
        let that=this;
        let {phonenum,psd,randStr,showpsd,showphone,showpsdagain,showcode,checkInp}=this.state; 
        if((phonenum!='')&&(psd!='')&&(randStr!='')&&(showpsd==false)&&(showphone==false)&&(showpsdagain==false)&&(showcode==false)&&(checkInp==true)){
            fetch.Post("http://datainfo.duapp.com/shopdata/userinfo.php",{status:"register",userID:phonenum,password:psd}).then(res=>{
            return res.json()
        }).then(json=>{
            // console.log(json)
            if(json==1){
                window.location="#/login";
            }
            if(json==0){
                that.setState({
                    showjson:true
                })
            }
        })
        }
        
    }
    phone(e){        
        let reg=/^1\d{10}$/;
        // console.log(typeof(e.target.value))        
        if(reg.test(e.target.value)){
            this.setState({
                phonenum:e.target.value,
                showphone:false
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
                psd:e.target.value,
                showpsd:false
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
       }else{
            this.setState({
                showpsdagain:false
        })
       }
   }
   checkCode(e){
       let inpStr=e.target.value.toLowerCase()
       if(inpStr==this.state.randStr.toLowerCase()){
            this.setState({
               showcode:false
           })
       }else{
           this.setState({
               showcode:true
           })
       }
   }
   randCode(){
       let str1=String.fromCharCode(this.newCharCode())
       let str2=String.fromCharCode(this.newCharCode())
       let str3=String.fromCharCode(this.newCharCode())
       let str4=String.fromCharCode(this.newCharCode())
       let conectStr=str1+""+str2+""+str3+""+str4
       this.setState({
            randStr:conectStr
       })       
   }
   newCharCode(){
        var num;
       do{
           num= Math.floor(Math.random()*123)
       }while(!((num>=97&&num<=122)||(num>=65&&num<=90)||(num>=48&&num<=57)))
       return num;
   }
     changeCheckbox(){
       this.setState({
           checkInp:!this.state.checkInp
       })
   }
     go(){
        window.history.back();  
    }
    render(){
        let {showpsd,showphone,showpsdagain,showcode,showjson}=this.state; 
                     
        return (
           <div className="login_full">
            <div className="login_top">
                <span onClick={this.go}></span>
                <p>我和你之间就差这一步了，别走</p>
             </div>
             <div className="login_info">
                <label>手机号</label>
                <input type="text" required placeholder="请输入登录账号或手机号码" onBlur={this.phone.bind(this)}/>
             </div>             
             {showphone?<span className="login_alt">请输入正确的手机号</span>:""}
             {showjson?<span className="login_alt">该手机号已经注册过啦</span>:""}
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
                <input type="text" className="login_fourcode" onBlur={this.checkCode.bind(this)} required placeholder="请输入4位验证码"/>
                <div className="login_info__randCode" onClick={this.randCode.bind(this)}>
                    {this.state.randStr}
                </div>
             </div>
             {showcode?<span className="login_alt">验证码错误</span>:""}
             <div className="login_checkbox">
                 <input type="checkbox" onClick={this.changeCheckbox.bind(this)} checked={this.state.checkInp?"checked":""}/>
                 <span>阅读并接受<a href="http://www.gd12355.org/wechat/view/logoin/user_Agreement.html" target="_blank">《青年之声用户服务协议》</a></span>
             </div>
             <div className="login_box">
                <a className="login_go" onClick={this.setData.bind(this)}>提交，现在就去青年之声</a>       
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