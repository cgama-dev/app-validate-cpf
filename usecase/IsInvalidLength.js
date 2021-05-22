const BaseValidateCPF = require('./../BaseValidateCPF');

function IsInvalidLength() { }
IsInvalidLength.prototype = new BaseValidateCPF()
IsInvalidLength.prototype.execute = function (body) {
    if (body.cpf.length !== 11)
        throw new Error(`Ops! O cpf informado é inválido :: step block:2`)

    return this.nextValidate.execute(body)
}

module.exports = IsInvalidLength