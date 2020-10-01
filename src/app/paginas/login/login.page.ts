import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mail: string;
  pass: string;

  constructor(private authService: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  Entrar(){
    this.authService.login(this.mail, this.pass).then( res => {
      this.router.navigate(['/home']);
    }).catch(err => this.presentAlert());
  }

  Limpiar(){
    this.pass = '';
    this.mail = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Campos vacios o erroneos.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
