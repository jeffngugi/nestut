import {
  Body,
  Controller,
  Delete,
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
import { UpdatePropertyDto } from './dto/updatePropertyDto';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    return this.propertyService.findOne(id);
  }

  @Post()
  @HttpCode(202)
  cretate(@Body() dto: CreatePropertyDto) {
    return this.propertyService.create(dto);
  }

  @Patch(':id')
  @HttpCode(202)
  update(
    // @Param() param: IdParamDto,
    @Param('id', ParseIdPipe) id: number,
    @Body()
    dto: UpdatePropertyDto,
    // @RequestHeader(HeadersDto) headers: HeadersDto,
  ) {
    return this.propertyService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.propertyService.delete(id);
  }
}
