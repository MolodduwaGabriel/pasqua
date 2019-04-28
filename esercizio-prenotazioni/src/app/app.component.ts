import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appuntamento } from './appuntamento';
import { Appuntamenti } from './mock-appuntamenti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  myForm: FormGroup;
  appuntamenti = Appuntamenti;
  appuntamentoSelezionato: Appuntamento;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'nome': ['Nome', Validators.required],
      'email': ['Email', Validators.required],
      'data': ['gg/mm/2019', Validators.required],
      'ora': ['Ora', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSelect(appuntamento: Appuntamento): void {
    this.appuntamentoSelezionato = appuntamento;
  }

  onSubmit(): void {

    let appuntamento: Appuntamento = new Appuntamento();
    appuntamento.nome = this.myForm.controls['nome'].value;
    appuntamento.email = this.myForm.controls['email'].value;
    appuntamento.data = this.myForm.controls['data'].value;
    appuntamento.ora = this.myForm.controls['ora'].value;

    this.appuntamenti.push(appuntamento);
  }
}
