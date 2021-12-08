import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.css']
})
export class ProductaddComponent implements OnInit {
  nameControl = new FormControl('');
  prixControl = new FormControl('');
  productAddForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productAddForm = this.fb.group({
      nameControl: [''],
      prixControl: [''],
      descriptionControl: [''],
      imageControl: [''],
      categorieControl: ['']
  });
}
onAjouter() {
  alert(JSON.stringify(this.productAddForm.value));

}
}
