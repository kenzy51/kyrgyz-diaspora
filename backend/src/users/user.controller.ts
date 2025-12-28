import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  Req,
  UnauthorizedException,
} from "@nestjs/common";
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./user.service";
import { User } from "./schemas/user.schema";
import { JwtAuthGuard } from "../auth/jwt.guard";

@ApiTags("User")
@Controller("user")
export class UserController {
  constructor(private readonly UserService: UsersService) {}

  // --- CREATE User ---
  @Post()
  @ApiOperation({ summary: "Create a new User" })
  @ApiCreatedResponse({
    description: "The User has been successfully created.",
  })
  create(@Body() dto: CreateUserDto) {
    return this.UserService.create(dto);
  }

  // --- GET ALL User ---
  @Get()
  @ApiOperation({ summary: "Get all User" })
  @ApiResponse({ status: 200, description: "Returns an array of User objects" })
  getAll() {
    return this.UserService.findAll();
  }
  @UseGuards(JwtAuthGuard)
  @Get("me")
  async getProfile(@Req() req: any) {
    const userId = req.user.sub; 
    if (!userId) {
      throw new UnauthorizedException("Invalid token payload");
    }
    return this.UserService.findById(userId);
  }
  // --- GET User BY ID ---
  @Get(":id")
  @ApiOperation({ summary: "Get an User by ID" })
  @ApiOkResponse({
    type: User,
    description: "Returns the User with the specified ID",
  })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  getUserById(@Param("id") id: string) {
    return this.UserService.findById(id);
  }

  // --- UPDATE User ---
  @Put(":id")
  @ApiOperation({ summary: "Update an User by ID" })
  @ApiOkResponse({ type: User, description: "Returns the updated User" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  updateUser(@Param("id") id: string, @Body() dto: CreateUserDto) {
    return this.UserService.update(id, dto);
  }

  // --- DELETE User ---
  @Delete(":id")
  @ApiOperation({ summary: "Delete an User by ID" })
  @ApiOkResponse({ type: User, description: "Returns the deleted User" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  deleteUser(@Param("id") id: string) {
    return this.UserService.delete(id);
  }
}
