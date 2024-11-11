import { IsString, IsInt, IsOptional, IsUUID } from 'class-validator';

export class CreateTrackDto {
  @IsString()
  name: string; // Required name of the track

  @IsInt()
  duration: number; // Required duration of the track in seconds

  @IsUUID()
  @IsOptional()
  artistId?: string | null; // Optional artist ID

  @IsUUID()
  @IsOptional()
  albumId?: string | null; // Optional album ID
}

export class UpdateTrackDto {
  @IsString()
  @IsOptional()
  name?: string; // Optional name for updating

  @IsInt()
  @IsOptional()
  duration?: number; // Optional duration for updating

  @IsUUID()
  @IsOptional()
  artistId?: string | null; // Optional artist ID for updating

  @IsUUID()
  @IsOptional()
  albumId?: string | null; // Optional album ID for updating
}
