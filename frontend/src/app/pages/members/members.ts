import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersService } from '../../services/members.service';


@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrls: ['./members.css']
})
export class MembersComponent implements OnInit {

  members: any[] = [];

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.membersService.getMembers().subscribe({
      next: (response) => {
        this.members = response.data;
      },
      error: (error) => {
        console.error('Hiba a tagok lekérésekor:', error);
      }
    });
  }
}
