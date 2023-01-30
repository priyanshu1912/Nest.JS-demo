import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request
    const token = request.headers.authorization?.split(" ")[1]
    if (!token) {
      throw new HttpException("Unauthorized Request, Please provide Access token", HttpStatus.UNAUTHORIZED)
    }
    return true;
  }
}
