export class UnauthorizedException extends Error {
    constructor(msg, status) {
        super(msg);
        this.name = "UnauthorizedException";
        this.status = status;
    }
}

