import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../../services/teams';

@Component({
  selector: 'app-teams-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teams-edit.html',
  styleUrls: ['./teams-edit.css']
})
export class TeamsEditComponent implements OnInit {

  id!: number;

  team = {
    name: '',
    city: '',
    league: ''
  };

  constructor(
    private route: ActivatedRoute,
    private teamsService: TeamsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamsService.getTeamById(this.id).subscribe({
      next: (response) => {
        this.team = response.data;
      },
      error: (err: any) => console.error('Hiba betöltéskor:', err)
    });
  }

  updateTeam() {
    this.teamsService.updateTeam(this.id, this.team).subscribe({
      next: () => {
        alert('Csapat sikeresen módosítva!');
        this.router.navigate(['/teams']);
      },
      error: (err: any) => console.error('Hiba módosításkor:', err)
    });
  }
}
