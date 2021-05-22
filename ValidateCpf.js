const BaseValidateCPF = require('./BaseValidateCPF')

function ValidateCpf() { }
ValidateCpf.prototype = new BaseValidateCPF();
ValidateCpf.prototype.execute = function (body) {
    return this.nextValidate.execute(body)
}

module.exports = ValidateCpf