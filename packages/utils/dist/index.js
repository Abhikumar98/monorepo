"use strict";
const commonFunction = () => {
    console.log('This is the common function');
    return 'Hi, this is from the common function';
};
class CommonContract {
    constructor() {
        this.id = "";
        this.date = new Date();
        this.name = "";
    }
}
module.exports = {
    commonFunction,
    CommonContract
};
//# sourceMappingURL=index.js.map