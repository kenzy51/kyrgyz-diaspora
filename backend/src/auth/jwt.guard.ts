import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException("Missing Authorization header");
    }

    const [, token] = authHeader.split(" ");
    if (!token) throw new UnauthorizedException("Token not found");

    try {
      const payload = await this.jwtService.verifyAsync(token);
      request.user = payload; 
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}
