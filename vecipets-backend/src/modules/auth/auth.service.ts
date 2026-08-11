import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { RoleName } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('El correo electrónico ya está registrado');
    }

    const ciudadanoRole = await this.prisma.role.findUnique({
      where: { nombre: RoleName.CIUDADANO },
    });

    if (!ciudadanoRole) {
      throw new BadRequestException('El rol inicial de CIUDADANO no se encuentra disponible');
    }

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const user = await this.prisma.user.create({
      data: {
        nombreCompleto: dto.nombreCompleto,
        email: dto.email,
        passwordHash,
        telefono: dto.telefono,
        roleId: ciudadanoRole.id,
      },
      select: {
        id: true,
        nombreCompleto: true,
        email: true,
        telefono: true,
        createdAt: true,
      },
    });

    const tokens = await this.generateTokens(user.id, user.email, RoleName.CIUDADANO);

    return {
      message: 'Usuario registrado exitosamente',
      user,
      ...tokens,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
      include: { role: true },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const tokens = await this.generateTokens(user.id, user.email, user.role.nombre);

    return {
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        nombreCompleto: user.nombreCompleto,
        email: user.email,
        role: user.role.nombre,
      },
      ...tokens,
    };
  }

  private async generateTokens(userId: string, email: string, role: string) {
    const payload = { sub: userId, email, role };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || 'SecretKey',
      expiresIn: '15m',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET || 'RefreshSecretKey',
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }
}