
const ValidateCpf = require('./ValidateCpf');
const { ExtractDigits, IsInvalidLength, IsBlocked, VerifyDigit } = require('./usecase');

function main() {
    const body = { cpf: '633.845.130-29', isValid: false };
    const validateCPF = new ValidateCpf()
    validateCPF
        .setNextValidate(new ExtractDigits())
        .setNextValidate(new IsInvalidLength())
        .setNextValidate(new IsBlocked())
        .setNextValidate(new VerifyDigit())

    validateCPF.execute(body)
    console.log(body)
}


try {
    main();
} catch (e) {
    console.log(e.message)
}
