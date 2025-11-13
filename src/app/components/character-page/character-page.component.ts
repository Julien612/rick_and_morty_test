import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService, Character } from '../../services/rickandmorty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss'],
  imports: [CommonModule]
})

export class CharacterPageComponent implements OnInit {
  character!: Character | null;
  id!: number;

  constructor(private route: ActivatedRoute, private rmService: RickMortyService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.rmService.getCharacterById(this.id).subscribe((character) => {
        this.character = character;
        
      });
    });
  }
  getEpisodeNumber(url: string): number {
    const parts = url.split('/');
    return Number(parts.pop());
  }
}
