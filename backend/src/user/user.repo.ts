import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserRepo {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(data: any): Promise<any> {
    const created = new this.model(data);
    return await created.save();
  }

  async findOne(query) {
    return await this.model.findOne(query).exec();
  }

  async findMany(query) {
    return await this.model.find(query).exec();
  }

  async findWithPagination(
    query = {},
    page = 1,
    limit = 10,
  ): Promise<User[] | any> {
    const documents = await this.model.countDocuments();
    const meta = {
      totalPages: Math.ceil(documents / limit),
      currentPage: page,
      itemsPerPage: limit,
      totalItems: documents,
    };
    const data = await this.model
      .find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();

    return { meta: { ...meta, currentItemsCount: data.length }, data };
  }

  async updateOne(query, update) {
    return await this.model.updateOne(query, update).exec();
  }

  async deleteOne(query) {
    return await this.model.deleteOne(query).exec();
  }
}
