import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUsuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService,private router:Router,private toast: ToastrService) { }

  ngOnInit() {
  }

  email:string="";
  password:string="";
  errorAutenticacion:string="";
  userInfo:IUsuario={email:'',password:''};


  nombreEmpresa:string="";
  emailEmpresa:string="";
  direccionEmpresa:string="";
  login(){
    
    this.usuarioService.login(this.email,this.password).subscribe(
      res=>{
        //CODIGO SI LA RESPUESTA ES CORRECTA
        if(res!=undefined){
          this.router.navigate(['/'])
          .then(() => {
            window.location.reload();
          });
        }else{
          this.toast.warning("Verifique usuario y contraseña.");
        }
        // FIN CODIGO
      },
      err=>{
        this.toast.warning("Verifique usuario y contraseña.");
      }
    );
  }

  registrarCliente(){
    this.usuarioService.registro(this.userInfo).subscribe(
      res=>{
        if(!res){
          //this.router.navigate(['/home']);
          this.router.navigate(['/home'])
          .then(() => {
            
            window.location.reload();
          });
        }else{
          this.errorAutenticacion="Por favor ingrese datos válidos.";
        }
      },
      err=>{
        this.errorAutenticacion="Por favor ingrese datos válidos.";
      }
    );
  }
  

  registrarProveedor(){
    this.usuarioService.registro(this.userInfo).subscribe(
      res=>{
        if(res.GLB_USE_Id!=undefined && res.Nombres!=''){
          //this.router.navigate(['/home']);
          this.router.navigate(['/home'])
          .then(() => {
            
            window.location.reload();
          });
        }else{
          this.errorAutenticacion="Por favor ingrese datos válidos.";
        }
      },
      err=>{
        this.errorAutenticacion="Por favor ingrese datos válidos.";
      }
    );
  }

}
