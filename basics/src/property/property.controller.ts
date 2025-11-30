import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-headers';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(typeof sort);
    return id as number;
  }

  @Post()
  @HttpCode(202)
  cretate(@Body() body: CreatePropertyDto) {
    return body;
  }

  @Patch(':id')
  @HttpCode(202)
  update(
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
    @RequestHeader(HeadersDto) headers: HeadersDto,
  ) {
    return headers;
  }
}
