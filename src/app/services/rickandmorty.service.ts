import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Character {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  episode: string[];
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api/character';
  
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1, name: string = ''): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}?page=${page}&name=${name}`);
  }
  getCharacterById(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/${id}`);
  }
}
