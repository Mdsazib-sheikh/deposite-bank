function getFullName(firstName, lastName){
    // console.log(arguments);
    // const fullName = firstName + ' ' + lastName;
    let fullName = '';
    for(let i = 0; i < arguments.length; i++){
        const namePart = arguments[i];

        fullName = fullName + ' ' + namePart ;
    }
    return fullName;
}
const identity = getFullName('omor', 'faruk', 'hanif', 'songkhet');
console.log(identity);