//-------- Classe Base
function Handler() {
    this.next = {
        handlerRequest: function (request) { }
    }
}
Handler.prototype.setNextHandler = function (next) {
    this.next = next
    return next;
}

//-------- Clase Concreta A

function HandlerConcretA() { }
HandlerConcretA.prototype = new Handler();
HandlerConcretA.prototype.handlerRequest = function (request) {
    request.pathern = [...request.pathern, 'Chain']
    return this.next.handlerRequest(request)
}
//-------- Clase Concreta B
function HandlerConcretB() { }
HandlerConcretB.prototype = new Handler();
HandlerConcretB.prototype.handlerRequest = function (request) {
    request.pathern = [...request.pathern, 'Of']
    return this.next.handlerRequest(request)
}
//-------- Clase Concreta C
function HandlerConcretC() { }
HandlerConcretC.prototype = new Handler();
HandlerConcretC.prototype.handlerRequest = function (request) {
    request.pathern = [...request.pathern, 'Responsability']
    return this.next.handlerRequest(request)
}
//-------- Clase Main
function Main() { }
Main.prototype = new Handler();
Main.prototype.handlerRequest = function (request) {
    return this.next.handlerRequest(request)
}

const main = new Main()
const request = {
    pathern: [],
}
main
    .setNextHandler(new HandlerConcretA())
    .setNextHandler(new HandlerConcretB())
    .setNextHandler(new HandlerConcretC())

main.handlerRequest(request)

console.log(request)
