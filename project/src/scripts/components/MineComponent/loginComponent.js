
import {connect} from 'react-redux'
import fetch from '../../modules/fetch'
class LoginComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          phonenum:'',
          password:'',
          checkInp:true,
          showdefault:false,
          showpsddefault:false,
          showphone:false
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
//     login(info){
//     	console.log(info)
//     	this.props.changeUserInfo(info)
// //  	actions.changeUserInfo(info)
//     }
  getData(){
      let that=this;
      let {phonenum,password,showphone,checkInp}=this.state;
      if((phonenum!='')&&(password!='')&&(showphone==false)&&(checkInp==true)){     
      fetch.Post(" http://datainfo.duapp.com/shopdata/userinfo.php",{status:"login",userID:phonenum,password:password}).then(res=>{
          return res.json()
      }).then(json=>{
          console.log(json)
          if(json==0){
            that.setState({
                showdefault:true,
                showpsddefault:false,              
            })
          }else if(json==2){
              that.setState({
                showpsddefault:true,
                showdefault:false
            })
          }else{
                // that.props.login({name:json.userID})
               that.props.changeUserInfo({name:json.userID})
                 location.href="#/mine";
          }
         
      })
      }
  }
   changeCheckbox(){
       this.setState({
           checkInp:!this.state.checkInp
       })
   }
    
    psd(e){
        this.setState({
            password:e.target.value
        })
    }
    go(){
        window.history.back();  
    }
    render(){
        let {showdefault,showpsddefault,showphone}=this.state;
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
              {showdefault?<span className="login_alt">用户名不存在</span>:""}
              
             <div className="login_info">             
                <label>密码</label>             
                <input type="text" onBlur={this.psd.bind(this)} required placeholder="请输入用户密码"/>
             </div>
             {showpsddefault?<span className="login_alt">密码错误</span>:""}
             <div className="login_checkbox">
                 <input type="checkbox" onClick={this.changeCheckbox.bind(this)} checked={this.state.checkInp?"checked":""}/>
                 <span>阅读并接受<a href="http://www.gd12355.org/wechat/view/logoin/user_Agreement.html" target="_blank">《青年之声用户服务协议》</a></span>
             </div>
             <div className="login_box">
                <input type="button" value="登录" id="login_inp" onClick={this.getData.bind(this)}/>
             </div>
          </div>
        )
    }
}
//定义默认属性
LoginComponent.defaultProps={

}

const mapDispatchToProps = (dispatch)=>{
	return {
		changeUserInfo:(info)=>{
			dispatch({type:'CHANGE_USER_INFO',info:info})
		}
	}
}

export default connect(state=>state,mapDispatchToProps)(LoginComponent)