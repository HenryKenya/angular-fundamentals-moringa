import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule ],
    exports: [ CustomersComponent ],
    declarations: [ CustomersComponent ]
})

export class CustomersModule { }
