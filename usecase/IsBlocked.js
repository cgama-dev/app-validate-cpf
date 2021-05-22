const BaseValidateCPF = require('./../BaseValidateCPF')

function IsBlocked() { }
IsBlocked.prototype = new BaseValidateCPF();
IsBlocked.prototype.execute = function (body) {
    const [digit1] = body.cpf;
    if (body.cpf.split("").every(digit => digit === digit1))
        throw new Error(`Ops! O cpf informado é inválido :: step block:3`)

    return this.nextValidate.execute(body)
}

module.exports = IsBlocked;