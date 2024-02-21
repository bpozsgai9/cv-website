import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
