import { JwtDto } from 'src/guard/dto/jwt.dto';

declare global {
  namespace Express {
    interface Request {
      user?: JwtDto;
    }
  }
}
