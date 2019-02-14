import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { OwlModule } from 'ngx-owl-carousel';
import { BlueprintNavComponent } from './blueprint-nav/blueprint-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
    OwlModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    PdfViewerModule,
    MatExpansionModule, 
    MatTabsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
