

class LunchComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    showdata(){
        let arr=[];
        this.props.data.forEach((item,i)=>{
            arr.push(<li><img src={item.img}/><span>{item.title}</span></li>)
        })
        return arr;
    }
    render(){
        // console.log(this)
        return (
          <div>
              <ul className="Mine_uplist">
                  {this.showdata()}
              </ul>
          </div>
        )
    }
}
//定义默认属性
LunchComponent.defaultProps={

}



export default LunchComponent