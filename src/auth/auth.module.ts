import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        JwtModule.register({
            secret: "sdrg54140-9-978&@#451hfu!Hfgh__+__9i8gfgfe+-*/021546do%@pjgg=r0j.,;/?"
        }),
        UserModule,
        PrismaModule
    ],
    controllers: [AuthController]
})
export class AuthModule {}