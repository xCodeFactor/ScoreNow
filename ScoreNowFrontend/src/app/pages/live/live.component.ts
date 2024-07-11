import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{
    liveMatch:any
    constructor(private _api:ApiCallService){

    }
  ngOnInit(): void {
    this.loadLiveMatches();
  }


  private loadLiveMatches() {
    this._api.getLivMatches().subscribe({
      next: data => {
        console.log(data);
        this.liveMatch=data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
