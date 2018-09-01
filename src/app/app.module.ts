import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { OwlModule } from 'ngx-owl-carousel';
import { BlueprintNavComponent } from './blueprint-nav/blueprint-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FullpageDirective } from './shared/directives/fullpage.directive';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BlueprintNavComponent,
    FullpageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
	OwlModule,
	LayoutModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	PdfViewerModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
