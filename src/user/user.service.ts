import { Injectable, NotFoundException } from "@nestjs/common";
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
        await this.exists(id);
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, data: UpdateUserDTO) {
        await this.exists(id);
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, data: UpdatePartialUserDTO) {
        await this.exists(id);
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

    async destroy(id: number) {
        await this.exists(id);
        return this.prisma.user.delete({
            where: {
                id
            }
        });
    }

    async exists(id: number) {
        if (!(await this.prisma.user.count({
            where: {
                id
            }
        }))) {
            throw new NotFoundException(`ID: ${id} not found.`)
        }
    }

}