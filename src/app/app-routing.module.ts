import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { LessonComponent } from './lesson/lesson.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'lesson', component: LessonComponent },
 { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
