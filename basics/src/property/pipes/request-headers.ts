import {
  ExecutionContext,
  createParamDecorator,
  BadRequestException,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (dtoClass: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    const dto = plainToInstance(dtoClass, headers, {
      excludeExtraneousValues: true,
    });

    try {
      await validateOrReject(dto);
    } catch (errors) {
      const message = errors.flatMap((e) => Object.values(e.constraints ?? {}));
      throw new BadRequestException(message);
    }

    return dto;
  },
);
