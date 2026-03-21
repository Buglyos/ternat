import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from '../../services/teams';
import { Location } from '@angular/common';

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
    league: '',
    members: [] as any[]
  };

  constructor(
    private teamsService: TeamsService,
    private router: Router,
    private location: Location
  ) {}

  addMember() {
    this.team.members.push({
      fullName: '',
      position: ''
    });
  }

  removeMember(index: number) {
    this.team.members.splice(index, 1);
  }

  createTeam() {
    this.teamsService.createTeam(this.team).subscribe({
      next: () => {
        alert('Csapat sikeresen létrehozva!');
        this.router.navigate(['/teams']);
      },
      error: (err: any) => console.error('Hiba létrehozáskor:', err)
    });
  }

  goBack() {
    this.location.back();
  }
}
