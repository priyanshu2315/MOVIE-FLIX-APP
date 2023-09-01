
function Student(props){
    const {sname , marks} = props;
    return(
        <>
        <h1>hello , {sname}</h1>
        <h1>you have secure {marks}</h1>
        </>
    )
}

export default Student;