import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel, NgModelGroup} from "@angular/forms";

@Component({
  selector: 'app-freelancer-registration',
  templateUrl: './freelancer-registration.component.html',
  styleUrls: ['./freelancer-registration.component.scss']
})
export class FreelancerRegistrationComponent implements OnInit {
    formIsValid: boolean = true;
    checkboxIsValid: boolean = true;
    skills: string[] = ['type1', 'type2', 'type3']
    @ViewChild('skillGroupRef') skillRef!: NgModelGroup
  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(formRef: NgForm, firstName: NgModel, lastName: NgModel, description: NgModel, rate: NgModel, skillsGroupRef: NgModelGroup) {
        
        //TODO remove logs
        console.log('Form >>> ', formRef)
        console.log('firstName >>> ', firstName)
        console.log('lastName >>> ', lastName)
        console.log('description >>> ', description)
        console.log('rate >>> ', rate)
        console.log('Skills Group >>> ', skillsGroupRef)
        
        const skillsData = Object.values(this.skillRef.value)
        console.log('skillsData', skillsData)
        
        if(skillsData.every(f=>f === '')) {
          this.checkboxIsValid = false;
        } else {
          this.checkboxIsValid = true;
        }
        
        if(formRef.form.invalid) {
          this.formIsValid = false
        } else {
          this.formIsValid = true
        }
        }

}
//    name: 'CoachForm',
//     data() {
//         return {
//             firstName: {
//                 val:'',
//                 isValid:true
//             },
//         lastName: {
//             val:'',
//             isValid:true
//         },
//         areas: {
//             val:[],
//             isValid:true
//         },
//         description: {
//             val:'',
//             isValid:true
//         },
//         rate: {
//             val:null,
//             isValid:true
//         },
//         formIsValid:true
//         };
//     },
// methods: {
// clearValidity(input){
// if(this[input].val!=='' && typeof this[input].val === 'string'){
//     this[input].isValid = true;
// }else if(typeof this[input].val === 'number' && this[input].val !== null){
//     this[input].isValid = true;
// }
// },
// validateForm(){
// if(this.firstName.val === ''){
//     this.firstName.isValid = false;
//     this.formIsValid = false;
// } if(this.lastName.val === ''){
//     this.lastName.isValid = false;
//     this.formIsValid = false;
// } if(this.description.val === ''){
//     this.description.isValid = false;
//     this.formIsValid = false;
// } if(!this.rate.val || this.rate.val < 0){
//     this.rate.isValid = false;
//     this.formIsValid = false;
// } if(this.areas.val.length === 0){
//     this.areas.isValid = false;
//     this.formIsValid = false;
// }
// },
// setData() {
//     this.formIsValid = true;
//     this.validateForm();
// 
// if(this.formIsValid === false){
//     return;
// }
//     const getFormData = {
//     first: this.firstName.val,
//     last:this.lastName.val,
//     desc:this.description.val,
//     rate:this.rate.val,
//     areas:this.areas.val,
// }
//     // console.log(getFormData)
//     this.$emit('save-data',getFormData)
// }
// }
// };