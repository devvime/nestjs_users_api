import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly authService: AuthService
    ) {}

    canActivate(context: ExecutionContext): boolean {

        const request = context.switchToHttp().getRequest();
        const { autorization } = request.headers;

        try {
            const data = this.authService.isValidToken((autorization ?? '').split(' ')[1]);

            request.tokenPayload = data;

            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

}