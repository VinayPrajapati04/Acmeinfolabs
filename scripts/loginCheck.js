const handleFormSubmit =() => {

    // get the tocken from ls

    const token = JSON.parse(localStorage.getItem('token'));
    
    if(token){

        return true;

    }else{

        return false

    }
}

// const result = handleFormSubmit();
// console.log(result)

export default handleFormSubmit;
