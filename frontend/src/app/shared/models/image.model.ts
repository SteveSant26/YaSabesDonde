export interface Image {
  id: number;
  name: string;
  url: string;
  thumbnail?: string;
  medium?: string;
  small?: string;
  large?: string;
  documentId: string;
}
