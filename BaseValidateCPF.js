function BaseValidateCPF() {
    this.nextValidate = {
        execute: function (body) { }
    }
}
BaseValidateCPF.prototype.setNextValidate = function (nextValidate) {
    this.nextValidate = nextValidate
    return nextValidate;
}

module.exports = BaseValidateCPF