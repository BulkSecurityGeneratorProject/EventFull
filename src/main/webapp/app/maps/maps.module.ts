import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent} from './maps.component';
import {RouterModule} from "@angular/router";
import {mapsRoute} from "./maps.route";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCJ2IL3pUGBOistX3iqTCZp_Y5nz8IDyQk',
            libraries: ["places"]
        }),
        RouterModule.forRoot([ mapsRoute ], { useHash: true }),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ MapsComponent ],
    bootstrap: [ MapsComponent ]
})
export class MapsModule {}
