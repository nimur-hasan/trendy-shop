import { Injectable } from '@nestjs/common';
import { UserRepo } from './user.repo';

@Injectable()
export class UserService {
    constructor(private repo: UserRepo) { }
    
    async create(data) {
        return this.repo.create(data);
    }

    async findOne(query) {
        return this.repo.findOne(query);
    }

    async findMany(query) {
        return this.repo.findMany(query);
    }

    async findWithPagination(query = {}, page = 1, limit = 10) {
        return this.repo.findWithPagination(query, page, limit);
    }

    async updateOne(query, update) {
        return this.repo.updateOne(query, update);
    }

    async deleteOne(query) {
        return this.repo.deleteOne(query);
    }
}
