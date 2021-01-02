const commonFunction = () => {
    console.log('This is the common function')
    return 'Hi, this is from the common function'
}

class CommonContract {
    id = "";
    date: Date = new Date()
    name = ""
}


module.exports = {
    commonFunction,
    CommonContract
}