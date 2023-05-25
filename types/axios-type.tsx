
import { string } from "zod";

export type ApiResponse = {
    translations: [
        {
            detected_source_language: string;
            text: string;
        }
    ];
};

export type Word = {
    id: string;
    original: string;
    translation: string;
    
};

export type TranslatedWord = string;

export type Results = {
    [id: number]: string;
}