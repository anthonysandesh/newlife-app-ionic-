import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-member-services',
  templateUrl: './member-services.page.html',
  styleUrls: ['./member-services.page.scss'],
})
export class MemberServicesPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  //Child's Full Name
  cfname = new FormControl('', [Validators.required]);
  childsFullName() {
    return this.cfname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Date of Birth
  dob = new FormControl('', [Validators.required]);
  dOB() {
    return this.dob.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Place of Birth
  pob = new FormControl('', [Validators.required]);
  pOB() {
    return this.pob.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Fathers's Full Name
  ffname = new FormControl('', [Validators.required]);
  fathersFullName() {
    return this.cfname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Mothers's Full Name
  mfname = new FormControl('', [Validators.required]);
  mothersFullName() {
    return this.cfname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Full Address
  faddress = new FormControl('', [Validators.required]);
  fullAddress() {
    return this.cfname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Phone
  phone = new FormControl('', [Validators.required]);
  Phone() {
    return this.phone.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Attending Since
  asince = new FormControl('', [Validators.required]);
  attendingSince() {
    return this.asince.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Date of dedication
  dod = new FormControl('', [Validators.required]);
  dOD() {
    return this.dod.hasError('required') ? 'You must enter a value' :
            '';
  }

  //--------------------------//

  //Certificate Request Full Name
  crfname = new FormControl('', [Validators.required]);
  cRFullName() {
    return this.crfname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request Phone
  crphone = new FormControl('', [Validators.required]);
  cRPhone() {
    return this.crphone.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request Purpose
  crpurpose = new FormControl('', [Validators.required]);
  cRPurpose() {
    return this.crpurpose.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request NeededBy
  crneededby = new FormControl('', [Validators.required]);
  cRNeededBy() {
    return this.crneededby.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request Full Adress
  crfulladdress = new FormControl('', [Validators.required]);
  cRFullAddress() {
    return this.crfulladdress.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request Fathers Full Name
  crfathersfullname = new FormControl('', [Validators.required]);
  cRFathersFullName() {
    return this.crfathersfullname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request Mothers Full Name
  crmothersfullname = new FormControl('', [Validators.required]);
  cRMothersFullName() {
    return this.crmothersfullname.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request DOB
  crdob = new FormControl('', [Validators.required]);
  cRDOB() {
    return this.crdob.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request DateOfWaterBaptism
  crdowaterbaptism = new FormControl('', [Validators.required]);
  cRDateOfWaterBaptism() {
    return this.crdowaterbaptism.hasError('required') ? 'You must enter a value' :
            '';
  }
  //Certificate Request AttendingSince.0
  crattendingsince = new FormControl('', [Validators.required]);
  cRAttendingSince() {
    return this.crattendingsince.hasError('required') ? 'You must enter a value' :
            '';
  }

}
