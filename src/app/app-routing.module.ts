import { ReferencesComponent } from './components/documentation/references/references.component';
import { RunCS2Component } from './components/documentation/run-cs2/run-cs2.component';
import { RunCS1Component } from './components/documentation/run-cs1/run-cs1.component';
import { SetupComponent } from './components/documentation/setup/setup.component';
import { IntroductionComponent } from './components/documentation/introduction/introduction.component';
import { CShomeComponent } from './components/casestudies/cshome/cshome.component';
import { TspCSComponent } from './components/casestudies/tsp-cs/tsp-cs.component';
import { DataAnalyticsCSComponent } from './components/casestudies/data-analytics-cs/data-analytics-cs.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CasestudiesComponent } from './components/casestudies/casestudies.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Downloads', component: DownloadsComponent },
  {
    path: 'Documentation',
    component: DocumentationComponent,
    children: [
      { path: '', component: IntroductionComponent},
      { path: 'Introduction', component: IntroductionComponent},
      { path: 'setup', component: SetupComponent},
      { path: 'getting-Started', component: RunCS1Component},
      { path: 'case-study-02', component: RunCS2Component },
      { path: 'references', component: ReferencesComponent }
    ]
  },
  {
    path: 'Case-Studies',
    component: CasestudiesComponent,
    children: [
      { path: '', component: CShomeComponent},
      { path: 'dynamic-data-analytics-workflow', component: DataAnalyticsCSComponent},
      { path: 'travelling-salesman-problem', component: TspCSComponent},
      // { path: '**', redirectTo: '', component: PagenotfoundComponent }
    ]
  },
  { path: 'About-us', component: AboutusComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
