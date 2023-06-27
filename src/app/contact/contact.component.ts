import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../_services';
import { UserDataModel } from '../_model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public clientName!: string;
  public contactForm!: FormGroup;
  public isSubmitted!: boolean;
  public userSub!: Subscription;
  public contactList: any = [
    {
      id: 1,
      icon: 'fa-solid fa-map-location-dot',
      label: 'Location',
      desc: 'Shekhpur, Velanja, Surat-Gujarat'
    },
    {
      id: 2,
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      desc: 'harittilavat@gmail.com'
    },
    {
      id: 3,
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      desc: '+91 635695453'
    },
  ];
  constructor(private contactService: ContactService) { }
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    })
  }
  onSubmit(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      this.clientName = this.contactForm.value.name;
      this.userSub = this.contactService.storeData(this.contactForm.value).subscribe();
      this.contactForm.reset();
      this.isSubmitted = false;
    }
    return;
  }
  onReset(): void {
    this.contactForm.reset();
    this.clientName = '';
    this.isSubmitted = false;
  }
  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }
}
