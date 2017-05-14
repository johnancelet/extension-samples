// NG2
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// Vendor
import { NovoElementsModule, NovoElementProviders } from 'novo-elements';
// APP
import { BullhornTodoCardComponent } from './bullhorn-todo-card.component';
import { BullhornTodoCardService } from './bullhorn-todo-card.service';

export const routes: Routes = [
    { path: '', component: BullhornTodoCardComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [
        // NG2
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        // Vendor
        NovoElementsModule,
        NovoElementProviders.forRoot()
    ],
    declarations: [
        BullhornTodoCardComponent
    ],
    providers: [
        BullhornTodoCardService
    ]
})
export class BullhornTodoCardModule {
}
