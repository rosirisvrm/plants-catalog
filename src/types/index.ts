// TypeScript interface for the Plant object
export interface Plant {
  id: string;
  scientificName: string;
  commonNames: string[];
  placeOfOrigin: string;
  taxonomy: string;
  morphology: {
    generalDescription: string;
    leaves?: string;
    inflorescence?: string;
    flower?: string;
    stem?: string;
    root?: string;
    fruit?: string;
  };
  usedParts: string[];
  usage: string;
  notes: string;
  imageUrl?: string; // URL of the plant image
}

export type Tip = {
  icon: string;
  title: string;
  text: string;
}