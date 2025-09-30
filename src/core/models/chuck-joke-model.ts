

export interface ChuckJokeModel {
    id: number;
    joke: string;
    created_at: string;
    updated_at: string | null;
    ratingScore: number | null;
    iconUrl: string;
}