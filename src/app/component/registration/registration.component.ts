import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  timeLeft = 60;
  interval;
  playeName = '';
  registerForm: FormGroup;
  playerDetails = [];
  url = 'assets/placeholder.jpg';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000 );
    this.registerForm = this.formBuilder.group({
      playeName: [''],
    });
  }

  onClick() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.onchange = () => {
          this.uploadFiles();
    };
    fileUpload.click();
}

  private uploadFiles() {
    const fileUpload = document.getElementById('fileUpload') as HTMLInputElement;
    fileUpload.value = '';
    const reader = new FileReader();

    reader.readAsDataURL(fileUpload.files[0]); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      console.log('213' + event.target.result);
    };
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
      //  console.log("  url " + event.target.result);
     //   this.url = event.target.result;
         this.uploadLogo(event.target.result);
      };
    }
  }

  uploadLogo(logo){
    this.url = logo;
  }

  addPlayer(){
    console.log('playeName ' + this.registerForm.value.playeName );
    this.playerDetails.push(this.registerForm.value.playeName );
    this.registerForm.controls['playeName'].setValue('');
    this.registerForm.reset();
  }
  delete(index){
    console.log('index ' + index);
    this.playerDetails.splice(index, 1);
  }
}
