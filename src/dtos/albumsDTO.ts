import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  name: string; // Required name of the album

  @IsInt()
  year: number; // Required release year of the album

  @IsUUID()
  @IsOptional()
  artistId?: string | null; // Optional artist ID associated with the album
}

export class UpdateAlbumDto {
  @IsString()
  @IsOptional()
  name?: string; // Optional name for updating

  @IsInt()
  @IsOptional()
  year?: number; // Optional release year for updating

  @IsUUID()
  @IsOptional()
  artistId?: string | null; // Optional artist ID for updating
}
