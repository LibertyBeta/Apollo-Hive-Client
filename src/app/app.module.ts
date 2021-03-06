import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { routing,appRoutingProviders } from './app.routing';
import { ApolloModule, defaultApolloClient, ApolloQueryObservable } from 'angular2-apollo';
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { AppComponent } from './app.component';
import { HiveComponent } from './hive/hive.component';
import { BeeComponent, BeeBigComponent } from './bee/bee.component';
import { QueenComponent } from './queen/queen.component';
import { HiveDetailsComponent } from './hive-details/hive-details.component';
import { EmptyComponent } from './empty/empty.component';
import { HiveListComponent } from './hive-list/hive-list.component';

import { ChildWatchService } from './services/child-watch.service';
import { SwarmComponent } from './swarm/swarm.component';
import { HarvestsComponent } from './harvests/harvests.component';


// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}



@NgModule({
  declarations: [
    AppComponent,
    HiveComponent,
    BeeComponent,
    BeeBigComponent,
    QueenComponent,
    HiveDetailsComponent,
    EmptyComponent,
    HiveListComponent,
    SwarmComponent,
    HarvestsComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAydQXFOoZCCIJ5yh-Bs57p9ula3ekAtOY"
    }),
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.withClient(provideClient)
  ],
  providers: [appRoutingProviders, ChildWatchService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
