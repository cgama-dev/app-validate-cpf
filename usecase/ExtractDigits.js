const BaseValidateCPF = require('./../BaseValidateCPF');

function ExtractDigits() { }
ExtractDigits.prototype = new BaseValidateCPF();
ExtractDigits.prototype.execute = function (body) {
    body.cpf = body.cpf.replace(/\D/g, "");
    return this.nextValidate.execute(body);
}

module.exports = ExtractDigits