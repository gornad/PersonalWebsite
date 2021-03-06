import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { BlueprintNavComponent } from './blueprint-nav/blueprint-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BlueprintNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PdfViewerModule,
    MatExpansionModule, 
    MatTabsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
