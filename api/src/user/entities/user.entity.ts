import { Prisma } from '@prisma/client';

export class User implements Prisma.UserUncheckedCreateInput {
  id?: number;
  name: string;
  email: string;
  password: string;
  image?: string;
  playlists?: Prisma.PlaylistUncheckedCreateNestedManyWithoutUserInput;
}
