import "./Output.css"


function Output(props){
    let elements = []
    for (let i = 0; i < 100; i++){
        elements.push(<p key={`${i}`}>{i+1}. {props.myValue}</p>)
    }
    return elements
}


export default Output