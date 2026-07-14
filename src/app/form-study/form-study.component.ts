import { Component, signal, inject } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-study',
  imports: [ReactiveFormsModule],
  templateUrl: './form-study.component.html',
  styleUrl: './form-study.component.css',
})
export class FormStudyComponent {
  isLoading = signal(false);
  private trazendoPraCa = inject(RegisterService);
  private router = inject(Router)

  formRegister = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  sendForm() {
    if (this.formRegister.valid) {
      this.isLoading.set(true);

      this.trazendoPraCa.userSave(this.formRegister.value).subscribe({
        next: (sucess) => {
          (this.trazendoPraCa.registerValues.set(this.formRegister.value),
            this.isLoading.set(false),
            this.router.navigate(['/dashboard'])
          );

          (this.formRegister.reset(), alert('Cadastro realizado com sucesso!'));
        },
        error: (error) => {
          (this.isLoading.set(false), alert('Houve um erro no cadastro.'));
        },
      });

      setTimeout(() => {
        this.isLoading.set(false);
      }, 2000);
    } else {
      this.formRegister.markAllAsTouched();
    }
  }
}
