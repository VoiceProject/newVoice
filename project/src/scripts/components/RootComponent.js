



class RootComponent extends React.Component {   
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    render(){
        // console.log(this.props.children)
        return (
            <div className="full-height">
               {this.props.children}
               
            </div>
        )
    }
}
//定义默认属性


export default RootComponent