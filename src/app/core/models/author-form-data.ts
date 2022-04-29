import { Author } from "./author";

export interface AuthorFormData {
    toUpdate: boolean;
    author: Author;
}