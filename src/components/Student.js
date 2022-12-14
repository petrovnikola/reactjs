const Student = (props) => {

    if (props.shouldTheComponentShow){
        console.log("true")
    }else {
        console.log("false")
    }
   console.log(props)
   props.shouldTheComponentShow ? console.log("true") : console.log("false")
   return <div>
        <h1>Student</h1>
        <div>Name: {props.name}</div>
        <div>Age: {props.age}</div>
        <div>ShouldShow : {props.shouldTheComponentShow}</div>
        
        

    </div>
}

export default Student