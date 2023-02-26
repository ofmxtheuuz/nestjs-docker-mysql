import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { Book } from '../infrastructure/entities/Book.entity';
import { BookService } from './utils/services/book.service';
import { create_book } from './http/dto/create-book.dto';

@Controller()
export class AppController {
  constructor(private readonly _s: BookService) {}

  @Get()
  async get_all(): Promise<Object> {
    return {code: 200, result: await this._s.get()}
  }
  @Get(":id")
  async get(@Param("id") _id: number): Promise<Object> {
    return {code: 200, result: await this._s.get_one(_id)}
  }
  @Post("insert")
  async insert(@Body() dto: create_book): Promise<Object> {
    return { code: 201, result: await this._s.insert(dto)}
  }
  @Delete("delete/:id")
  async delete(@Param("id") _id: number): Promise<Object> {
    await this._s.delete(_id)
    return { code: 200, result: `The book (${_id}) was deleted with success!`}
  }
}
