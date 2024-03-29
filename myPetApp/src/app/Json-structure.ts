export interface PictureJson {
  small: string;
  large: string;
}

export interface PetJson {
  id: string;
  name: string;
  petKind: string;
  age: string;
  image: string;
  ownerId: string;
}

export interface CatalogJson {
  pets: PetJson[];
}
