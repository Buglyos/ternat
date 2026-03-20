import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TeamsService } from '../../services/teams';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './teams.html',
  styleUrls: ['./teams.css']
})
export class TeamsComponent implements OnInit {

  teams: any[] = [];
  searchText: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(
    private teamsService: TeamsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  // 🔵 Csapatok betöltése
  loadTeams(): void {
    this.teamsService.getTeams().subscribe({
      next: (response) => {
        this.teams = response.data;
      },
      error: (err) => console.error('Hiba a csapatok betöltésekor:', err)
    });
  }

  // 🔵 Keresés
  filteredTeams() {
    return this.teams.filter(team =>
      team.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      team.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 🔵 Rendezés
  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.teams.sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];

      if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // 🟢 CREATE – Új csapat létrehozása
  openAddTeam() {
    this.router.navigate(['/teams/add']);
  }

  // 🔵 READ – Csapat megtekintése
  openViewTeam(id: number) {
    this.router.navigate(['/teams/view', id]);
  }

  // 🟡 UPDATE – Csapat módosítása
  openEditTeam(id: number) {
    this.router.navigate(['/teams/edit', id]);
  }

  // 🔴 DELETE – Csapat törlése
  deleteTeam(id: number) {
    console.log('Törlés hívva, id = ', id);

    if (!confirm('Biztosan törölni szeretnéd ezt a csapatot?')) return;

    this.teamsService.deleteTeam(id).subscribe({
      next: () => {
        console.log('Sikeres törlés');
        this.loadTeams();
      },
      error: (err) => console.error('Hiba törléskor:', err)
    });
  }
}
