import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  @IsNotEmpty() // Ensures the name is not an empty string
  name: string;

  @IsBoolean()
  grammy: boolean; // Grammy status should be explicitly provided
}

export class UpdateArtistDto {
  @IsString()
  @IsOptional() // Allows omitting this field in the request
  name?: string;

  @IsBoolean()
  @IsOptional() // Allows omitting this field in the request
  grammy?: boolean;
}
