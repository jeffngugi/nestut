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
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return this.propertyService.findOne();
  }

  @Post()
  @HttpCode(202)
  cretate(@Body() body: CreatePropertyDto) {
    return this.propertyService.create();
  }

  @Patch(':id')
  @HttpCode(202)
  update(
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreatePropertyDto,
    // @RequestHeader(HeadersDto) headers: HeadersDto,
  ) {
    return this.propertyService.update();
  }
}
