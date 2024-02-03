import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesService } from '../services/games.service';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-games-list',
  standalone: true,
  imports: [CommonModule, GameComponent],
  templateUrl: './games-list.component.html',
  styleUrl: './games-list.component.css'
})
export class GamesListComponent implements OnInit {
gamesList: any;

  service= inject (GamesService);
  ngOnInit():void {}

  getGames(){
    this.service.get().subscribe({
      next : (response) => (this.gamesList= response),
    });
   
  }
}
