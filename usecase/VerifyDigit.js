const BaseValidateCPF = require('./../BaseValidateCPF')

const FACTOR_DIGIT_1 = 10
const FACTOR_DIGIT_2 = 11
const MAX_DIGITS_1 = 9
const MAX_DIGITS_2 = 10

function VerifyDigit() {
    this.digit1 = ''
    this.digit2 = ''
    this.checkDigit = null;
}
VerifyDigit.prototype = new BaseValidateCPF()

VerifyDigit.prototype.calculateDigit = function (cpf, factor, max) {
    let total = 0;
    const toDigitArray = [...cpf].map(digit => parseInt(digit))

    for (const digit of toDigitArray.slice(0, max)) {
        total += digit * factor--;
    }
    return (total % 11 < 2) ? 0 : (11 - total % 11)
}

VerifyDigit.prototype.getCheckDigit = function (cpf) {
    return cpf.slice(9);
}

VerifyDigit.prototype.execute = function (body) {
    this.digit1 = this.calculateDigit(body.cpf, FACTOR_DIGIT_1, MAX_DIGITS_1)
    this.digit2 = this.calculateDigit(body.cpf, FACTOR_DIGIT_2, MAX_DIGITS_2)
    this.checkDigit = this.getCheckDigit(body.cpf);
    if (this.checkDigit !== `${this.digit1}${this.digit2}`)
        throw new Error(`Ops! O cpf informado é inválido :: step block:4`)

    body.isValid = true;
    return this.nextValidate.execute(body)
}


module.exports = VerifyDigit