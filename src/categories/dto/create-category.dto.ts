import { IsString, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;
  @IsUrl()
  image_link: string;
}
