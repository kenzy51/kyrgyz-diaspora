import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  // --- CREATE User ---
  async create(dto: CreateUserDto): Promise<User> {
    const User = await this.UserModel.create({ ...dto });
    return User;
  }

  // --- GET ALL Users ---
  async findAll(): Promise<User[]> {
    const Users = await this.UserModel.find();
    return Users;
  }

  // --- GET User BY ID ---
  async findById(id: string): Promise<User> {
    const User = await this.UserModel.findById(id);
    if (!User) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return User;
  }

  // --- UPDATE User ---
  async update(id: string, dto: CreateUserDto): Promise<User> {
    const User = await this.UserModel.findByIdAndUpdate(id, dto, { new: true });
    if (!User) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return User;
  }

  // --- DELETE User ---
  async delete(id: string): Promise<User> {
    const User = await this.UserModel.findByIdAndRemove(id);
    if (!User) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return User;
  }
}
