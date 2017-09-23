

import MainHelpItemList from "./MainHelpComponent/MainHelpItemList.js"

class MainHelpComponent extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            word:"求助中",
            type:1
        }
    }
    changeListItem(str,Type){
        this.setState({
            word:str,
            type:Type
        })
        
    }
    render(){

        return(
            <div className="MainHelp_box bg-white">
                <h3 className="Main_tuijian_box__title">
                    <span onClick={this.changeListItem.bind(this,"求助中",1)} className={this.state.word=="求助中"?"on":""}>求助中</span>
                    <span  onClick={this.changeListItem.bind(this,"已解决",2)} className={this.state.word=="已解决"?"on":""}>已解决</span>
                </h3>
                <MainHelpItemList type={this.state.type} />
            </div>
        )
    }
}


export default MainHelpComponent