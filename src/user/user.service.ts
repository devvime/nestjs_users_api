import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UpdatePartialUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export default class UserService {

    constructor(
        private prisma: PrismaService
    ) {}

    async create(data: CreateUserDTO) {

        return this.prisma.user.create({
            data
        });
        
    }

    async list() {
        return this.prisma.user.findMany();
    }

    async show(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, data: UpdateUserDTO) {
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, data: UpdatePartialUserDTO) {
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

    async destroy(id: number) {
        return this.prisma.user.delete({
            where: {
                id
            }
        });
    }

}