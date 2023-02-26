import { Injectable } from "@nestjs/common";
import { mysql_context } from "infrastructure/mysql.context";
import { DeleteResult, Repository } from "typeorm";
import { Book } from "infrastructure/entities/Book.entity";
import { create_book } from "src/http/dto/create-book.dto";


@Injectable()
export class BookService {
  private readonly _r: Repository<Book>
  constructor() {
    this._r = mysql_context.getRepository(Book)
  }

  get = async(): Promise<Book[]> => await this._r.find()
  get_one = async(_id: number): Promise<Book> => await this._r.findOne({ where: { id: _id } }) 
  delete = async(id: number): Promise<DeleteResult> => await this._r.delete({id})

  async insert(dto: create_book): Promise<Book> {
    const {name, description,release_year, category, author} = dto
    return await this._r.create({
      name,
      description,
      release_year,
      category,
      author
    })
  }
}