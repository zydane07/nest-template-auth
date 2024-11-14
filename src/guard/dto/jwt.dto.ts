import { Role } from '@prisma/client';

export class JwtDto {
  id: string;
  role: Role;
  email: string;
  name: string;
}
