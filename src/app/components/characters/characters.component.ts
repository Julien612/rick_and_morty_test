import { Component, OnInit } from '@angular/core';
import { RickMortyService, Character } from '../../services/rickandmorty.service';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  imports: [SvgIconComponent, RouterModule, CommonModule],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 0;

  constructor(private rmService: RickMortyService) {}

  ngOnInit() {
    this.loadCharacters(this.currentPage, '');
  }

  loadCharacters(page: number, name?: string) {
      this.rmService.getCharacters(page, name).subscribe({
      next: (res) => {
        this.characters = res.results;
        this.totalPages = res.info.pages;
        this.currentPage = page;
      },
      error:(err) => {
        console.error('Character load error', err);
      },
    });
  }
  searchByName(){
    const input = document.getElementById('inputId') as HTMLInputElement;
    const value = input.value;
    this.loadCharacters(1, value);
  }
  goToPage(page: number){
    this.currentPage = page;
    this.loadCharacters(this.currentPage, '');
  }
  getPagesToShow(): number[] {
    let delta = 4;
    let total = this.totalPages;
    let current = this.currentPage;
    const pages: number[] = [];
    
    if(current == 1 || current == total){
      delta = delta * 2;
    }else if(current == 2 || current == total - 1){
      delta = delta * 2 - 1;
    }else if(current == 3 || current == total - 2){
      delta = delta * 2 - 2;
    }else if(current == 4 || current == total - 3){
      delta = delta * 2 - 3;
    }
    for (let i = current - delta; i <= current + delta ; i++) {
      if (i >= 1 && i <= total ) {
        pages.push(i);
      }
    }
    return Array.from(new Set(pages)).sort((a,b) => a - b);
  }
}
