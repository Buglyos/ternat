import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/teams';

@Component({
  selector: 'app-teams-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teams-add.html',
  styleUrls: ['./teams-add.css']
})
export class TeamsAddComponent {

  team = {
    name: '',
    city: '',
    league: ''
  };

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {}

  createTeam() {
    this.teamsService.createTeam(this.team).subscribe({
      next: () => {
        alert('Csapat sikeresen létrehozva!');
        this.router.navigate(['/teams']);
      },
      error: (err: any) => console.error('Hiba létrehozáskor:', err)
    });
  }
}
