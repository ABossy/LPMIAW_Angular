import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {CreationComponent} from './creation/creation.component';
import {ArmesComponent} from './armes/armes.component';
import {CreationArmesComponent} from './creation-armes/creation-armes.component';
import {ArmeDetailComponent} from './arme-detail/arme-detail.component';

// dis au router quelle vue afficher
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/creation', component: CreationComponent },
  { path: 'armes', component: ArmesComponent },
  { path: 'details-Armes/:id', component: ArmeDetailComponent },
  { path: 'armes/creation', component: CreationArmesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
