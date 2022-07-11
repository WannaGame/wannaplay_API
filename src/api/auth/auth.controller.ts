import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { DiscordAuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  /**
   * GET /api/auth/login
   * Route sur laquelle le client va taper pour s'authentifier
   */
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  /**
   * GET /api/auth/redirect
   * URL de redirection sur laquelle le Provider OAuth2 va rediriger
   */
  @Get('redirect')
  redirect(@Res() res: Response) {
    res.send(200);
  }

  /**
   * GET /api/auth/status
   * permet de récupérer le status de l'authentification
   */
  @Get('status')
  status(@Req() req: Request) {
    return req.user;
  }

  /**
   * GET /api/auth/logout
   * y'a vraiment besoin d'expliquer là ?
   */
  @Get('logout')
  logout(@Req() req: Request) {
    return;
  }
}
