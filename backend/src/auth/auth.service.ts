import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import { User, UserSchema } from "../users/schemas/user.schema";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async register(dto: RegisterDto) {
    const existingByPhone = await this.userModel.findOne({ phone: dto.phone });
    if (existingByPhone) {
      throw new BadRequestException("Phone number already registered");
    }
    const hash = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({ ...dto, password: hash });
    const token = this.jwt.sign({ id: user._id, email: user.email });
    return { token, user };
  }

  async login(dto: LoginDto) {
    const user = await this.userModel.findOne({ phone: dto.phone });
    if (!user) throw new UnauthorizedException("Invalid credentials");

    const match = await bcrypt.compare(dto.password, user.password);
    if (!match) throw new UnauthorizedException("Invalid credentials");

    const token = this.jwt.sign({ id: user._id, email: user.email });
    return { token, user };
  }

  async verifyToken(token: string) {
    try {
      return this.jwt.verify(token);
    } catch {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
