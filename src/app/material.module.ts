import { NgModule } from '@angular/core';

import {

    MatToolbarModule
} from '@angular/material/toolbar';

import { MatBadgeModule } from '@angular/material/badge';
@NgModule({
    imports: [

        MatToolbarModule,
    ],
    exports: [

        MatToolbarModule
    ]
})
export class MaterialModule { }