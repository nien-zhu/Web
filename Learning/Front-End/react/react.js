class MyHead extends React.Component{
    render(){
        return React.createElement("div", {className:"head", style:{color:this.props.color}}, "Hello Component");
    }
}

class MyHeadList extends React.Component{

    constructor(props){
        super(props);
        this.state={inittime: props.start, stop: props.end};
        // window.setTimeout(()=>{
        //     // this.setState({inittime: 6});
        //     this.setState((currentState, currentProps)=>({inittime:currentState.inittime+1}))
        // }, 2000);
    }

    componentWillMount(){
        this.IntervalID=window.setInterval(()=>{
            
            this.setState((currentState, currentProps)=>{
                if(currentState.inittime > currentState.stop){
                    return currentState;
                }
                else{  
                    return {inittime:currentState.inittime+1};
                }
            });
        }, 2000);
    }

    componentWillUnmount(){
        window.clearInterval(this.IntervalID);
    }

    render(){
        let heads=[];
        let colorList= ["red", "green", "blue"];
        let head;
        for (let i=1; i<this.state.inittime; i++){
            head=React.createElement(MyHead, {color:colorList[i%3]});
            heads.push(head);
        }
        return React.createElement("DIV", null, heads);
    }
}

window. addEventListener("load", ()=>{
    //建立自訂的React組件實體
    let myComponent = React.createElement(MyHeadList, {start:3, end:10});
    //將建立好的React組件畫到容器中
    ReactDOM.render(myComponent, document.body);
})