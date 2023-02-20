const Validation = (values) =>{
    let error = {}

    let username_regex = /^[A-Za-z0-9]+$/
    let password_regex = /(?=.*\d)(?=.*[A-Z])^[^ ]+$/

    if (!username_regex.test(values.name)) {
        error.name="No special characters allowed"
    } 
    if (!values.name){
        error.name="Name Required"
    } 
    if(!password_regex.test(values.password)) {
        error.password="Must contain a number and capital letter"
    }
    if (!values.password){
        error.password="Password Required"
    } 
    
    return error;
}

export default Validation;