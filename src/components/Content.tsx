import { MovieCard } from "./MovieCard";

import '../styles/content.scss';
import { Header } from './Header';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  title: string;
  movies: MovieProps[];
};


export function Content({ movies, title }: ContentProps) {
  // Complete aqui
  return(
    <div className="container">      
      <Header title={title} />
      
      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}