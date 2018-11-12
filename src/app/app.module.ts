import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


//-----------------------------------------------------------------------------
import { ReactiveFormsModule } from '@angular/forms';//https://stackoverflow.com/questions/49131769/error-error-uncaught-in-promise-error-staticinjectorerrorappmoduleuserre

//import { MaterialModule } from '@angular/material';
import { MatSidenavModule, MatToolbarModule,MatIconModule,MatButtonModule,MatCheckboxModule,MatInputModule } from '@angular/material';
//import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

//-----------------------------------------------------------------------------
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//------------------------------------------------------------------------------
//import { AuthenticationService } from './shared/authentication.service';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//------------------------------------------------------------------------------
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpModule,
    HttpClientModule,

    //MaterialModule.forRoot(), //***
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule, // -> this registers the formbuilder service for your module

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    NavbarComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
