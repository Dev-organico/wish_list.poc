

export type MovieObjectEnti = {
    id:number
    movie_name: string;
    director: string;
    year: number;
    watched:boolean
}

export type MovieObject = Omit<MovieObjectEnti, "id" | "watched"> 
