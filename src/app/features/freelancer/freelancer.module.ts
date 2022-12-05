import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerRegistrationComponent } from './pages/freelancer-registration/freelancer-registration.component';
import { FreelancerFormComponent } from './components/freelancer-form/freelancer-form.component';
import { FreelancerItemComponent } from './components/freelancer-item/freelancer-item.component';
import { FreelancerFilterComponent } from './components/freelancer-filter/freelancer-filter.component';



@NgModule({
    declarations: [
        FreelancerRegistrationComponent,
        FreelancerFormComponent,
        FreelancerItemComponent,
        FreelancerFilterComponent
    ],
    exports: [
        FreelancerItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FreelancerModule { }
