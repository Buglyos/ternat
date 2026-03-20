import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-members-add',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './members-add.html',
  styleUrls: ['./members-add.css']
})
export class MembersAddComponent {
  fullName = '';
  position = '';
  teamId!: number;

  constructor(
    private membersService: MembersService,
    private router: Router
  ) {}

  save() {
    const data = {
      fullName: this.fullName,
      position: this.position,
      teamId: this.teamId
    };

    this.membersService.createMember(data).subscribe({
      next: () => this.router.navigate(['/members']),
      error: (err: any) => console.error(err)
    });
  }
}
