import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ResumeComponent } from './resume/resume.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	
	{
		path: 'home',
		component: HomeComponent
	},
	
	{
		path: 'resume',
		component: ResumeComponent
	},

	{
		path: 'portfolio',
		component: PortfolioComponent
	},

	{
		path: 'about',
		component: AboutComponent
	},

	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: '**', 
		component: HomeComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
