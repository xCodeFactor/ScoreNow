import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = 
[
    {
        path:"home",
        component:HomeComponent,
        title:"Home | ScoreNow"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"Match History | ScoreNow"
    },
    {
        path:"live",   
        component:LiveComponent,
        title:"Live Matches | ScoreNow"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"Point Table | ScoreNow"
    }
];
