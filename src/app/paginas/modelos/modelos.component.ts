import { CarruselService } from '../../compartido/servicios/carrusel.service';
import { ModalService } from '../../compartido/servicios/modal.service';
import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ModelosComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;

  mostrarRecurso30Info: boolean = false;
  mostrarRecurso31Info: boolean = false;
  mostrarRecurso32Info: boolean = false;
  mostrarRecurso33Info: boolean = false;
  mostrarRecurso34Info: boolean = false;
  mostrarRecurso35Info: boolean = false;
  mostrarRecurso36Info: boolean = false;
  mostrarRecurso37Info: boolean = false;
  mostrarRecurso38Info: boolean = false;
  mostrarRecurso39Info: boolean = false;
  mostrarRecurso40Info: boolean = false;
  mostrarRecurso41Info: boolean = false;

  mostrarRecurso21Info: boolean = false;
  mostrarRecurso22Info: boolean = false;
  mostrarRecurso23Info: boolean = false;
  mostrarRecurso24Info: boolean = false;

  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  cartaCerebro2: boolean = true;
  cartaPluma: boolean = true;
  cartaDiana: boolean = true;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  instagram: boolean = true;
  instagramColor: boolean = false;

  arquetipos: boolean = true;
  arquetiposColor: boolean = false;

  email: boolean = true;
  emailColor: boolean = false;

  facebook: boolean = true;
  facebookColor: boolean = false;

  link: boolean = true;
  linkColor: boolean = false;

  marginTopDiv: string = '30px';

  @ViewChild('colombia') colombia!: ElementRef;

  @ViewChild('banner') banner!: ElementRef;
  @ViewChild('mexico') mexico!: ElementRef;

  @ViewChild('ecuador') ecuador!: ElementRef;

  @ViewChild('peru') peru!: ElementRef;
  @ViewChild('gamificacion') gamificacion!: ElementRef;
  @ViewChild('social') social!: ElementRef;
  @ViewChild('scp') scp!: ElementRef;
  @ViewChild('sombres') sombres!: ElementRef;
  @ViewChild('rastreo') rastreo!: ElementRef;
  @ViewChild('realidadVirtual') realidadVirtual!: ElementRef;
  @ViewChild('panama') panama!: ElementRef;
  @ViewChild('honduras') honduras!: ElementRef;

  divStyleBuho: any = {}; 
  divStyleFlor: any = {}; 
  divStyleCorona: any = {}; 
  divStyleMedalla: any = {}; 
  divStyleCasa: any = {}; 
  divStyleBufon: any = {}; 
  divStyleCorazon: any = {}; 
  divStyleCorazones: any = {}; 
  divStyleMago: any = {}; 
  divStyleManoEstrella: any = {}; 
  divStylePaisaje: any = {}; 
  divStyleBombillo: any = {}; 
  divStyleConexion: any = {}; 
  divStylePosicionamiento: any = {}; 
  divStyleInnovacion: any = {}; 
  divStyleCultura: any = {}; 
  divStyleGamificacion: any = {}; 
  divStyleSocial: any = {}; 
  divStyleScp: any = {}; 
  divStyleSombreros: any = {}; 
  divStyleRastreo: any = {}; 
  divStyleRealidad: any = {}; 

  constructor(private viewportScroller: ViewportScroller, private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder, private showmodal: ModalService){
 
     
   
  }

  scrollToSection(){
    const sectionToScrollTo = document.getElementById('contacts');

    if (sectionToScrollTo) {
      const offset = sectionToScrollTo.getBoundingClientRect().top; // Calcula la posición del elemento respecto a la parte superior de la ventana
      const duration = 300; // Duración del desplazamiento en milisegundos
      const start = this.viewportScroller.getScrollPosition(); // Posición de inicio
  
      let startTime: number;
  
      // Función de animación para realizar el desplazamiento suave
      const animateScroll = (timestamp: number) => {
        startTime = startTime || timestamp;
        const progress = timestamp - startTime;
        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
        this.viewportScroller.scrollToPosition([start[0], easeInOutQuad(progress / duration) * offset + start[1]]);
  
        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  }

  cambiarA(){
    this.arquetipos = false;
    this.arquetiposColor = true;
  }

  cambiarABlanco(){
    this.arquetipos = true;
    this.arquetiposColor = false;
  }


  cambiarE(){
    this.email = false;
    this.emailColor = true;
  }

  cambiarEBlanco(){
    this.email = true;
    this.emailColor = false;
  }
  
  cambiarF(){
    this.facebook = false;
    this.facebookColor = true;
  }

  cambiarFBlanco(){
    this.facebook = true;
    this.facebookColor = false;
  }

  
  cambiarL(){
    this.link = false;
    this.linkColor = true;
  }

  cambiarLBlanco(){
    this.link = true;
    this.linkColor = false;
  }

  
  cambiarI(){
    this.instagram = false;
    this.instagramColor = true;
  }

  cambiarIBlanco(){
    this.instagram = true;
    this.instagramColor = false;
  }

  cambiarColorRealidad(){
    this.divStyleRealidad = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloRealidad(){
    this.divStyleRealidad = {
    };
  }

  cambiarColorRastreo(){
    this.divStyleRastreo = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloRastreo(){
    this.divStyleRastreo = {
    };
  }

  cambiarColorSombreros(){
    this.divStyleSombreros = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloSombreros(){
    this.divStyleSombreros = {
    };
  }

  cambiarColorScp(){
    this.divStyleScp = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloScp(){
    this.divStyleScp = {
    };
  }

  cambiarColorGamificacion(){
    this.divStyleGamificacion = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloGamificacion(){
    this.divStyleGamificacion = {
    };
  }

  cambiarColorSocial(){
    this.divStyleSocial = {
      'transform': 'scale(1.3)'
    };
  }

  removerEstiloSocial(){
    this.divStyleSocial = {
    };
  }

  cambiarColorCultura(){
    this.divStyleCultura = {
      'opacity': '0.8'
    };
  }

  removerEstiloCultura(){
    this.divStyleCultura = {
    };
  }

  cambiarColorInnovacion(){
    this.divStyleInnovacion = {
      'opacity': '0.8'
    };
  }

  removerEstiloInnovacion(){
    this.divStyleInnovacion = {
    };
  }

  cambiarColorPosicionamiento(){
    this.divStylePosicionamiento = {
      'opacity': '0.8'
    };
  }

  removerEstiloPosicionamiento(){
    this.divStylePosicionamiento = {
    };
  }

  cambiarColorConexion(){
    this.divStyleConexion = {
      'opacity': '0.8'
    };
  }

  removerEstiloConexion(){
    this.divStyleConexion = {
    };
  }


  cambiarColorBuho(){
    this.divStyleBuho = {
      'opacity': '0'
    };
  }

  removerEstiloBuho(){
    this.divStyleBuho = {
    };
  }

  cambiarColorBombillo(){
    this.divStyleBombillo = {
      'opacity': '0'
    };
  }

  removerEstiloBombillo(){
    this.divStyleBombillo = {
    };
  }

  cambiarColorFlor(){
    this.divStyleFlor = {
      'opacity': '0'
    };
  }

  removerEstiloFlor(){
    this.divStyleFlor = {
    };
  }

  cambiarColorPaisaje(){
    this.divStylePaisaje = {
      'opacity': '0'
    };
  }

  removerEstiloPaisaje(){
    this.divStylePaisaje = {
    };
  }

  cambiarColorMedalla(){
    this.divStyleMedalla = {
      'opacity': '0'
    };
  }

  removerEstiloMedalla(){
    this.divStyleMedalla = {
    };
  }

  cambiarColorMago(){
    this.divStyleMago = {
      'opacity': '0'
    };
  }

  removerEstiloMago(){
    this.divStyleMago = {
    };
  }

  cambiarColorBufon(){
    this.divStyleBufon = {
      'opacity': '0'
    };
  }

  removerEstiloBufon(){
    this.divStyleBufon = {
    };
  }

  cambiarColorManoEstrella(){
    this.divStyleManoEstrella = {
      'opacity': '0'
    };
  }

  removerEstiloManoEstrella(){
    this.divStyleManoEstrella = {
    };
  }

  cambiarColorCasa(){
    this.divStyleCasa = {
      'opacity': '0'
    };
  }

  removerEstiloCasa(){
    this.divStyleCasa = {
    };
  }

  cambiarColorCorazones(){
    this.divStyleCorazones = {
      'opacity': '0'
    };
  }

  removerEstiloCorazones(){
    this.divStyleCorazones = {
    };
  }

  cambiarColorCorazon(){
    this.divStyleCorazon = {
      'opacity': '0'
    };
  }

  removerEstiloCorazon(){
    this.divStyleCorazon = {
    };
  }

  cambiarColorCorona(){
    this.divStyleCorona = {
      'opacity': '0'
    };
  }

  removerEstiloCorona(){
    this.divStyleCorona = {
    };
  }



  resurso21(){
    this.mostrarRecurso21Info = !this.mostrarRecurso21Info;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso23Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso22(){
    this.mostrarRecurso22Info = !this.mostrarRecurso22Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso23Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso23(){
    this.mostrarRecurso23Info = !this.mostrarRecurso23Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso24Info = false;
  }

  resurso24(){
    this.mostrarRecurso24Info = !this.mostrarRecurso24Info;
    this.mostrarRecurso21Info = false;
    this.mostrarRecurso22Info = false;
    this.mostrarRecurso23Info = false;
  }

  resurso30(){
    this.mostrarRecurso30Info = !this.mostrarRecurso30Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso31(){
    this.mostrarRecurso31Info = !this.mostrarRecurso31Info;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso32(){
    this.mostrarRecurso32Info = !this.mostrarRecurso32Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso33(){
    this.mostrarRecurso33Info = !this.mostrarRecurso33Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso34(){
    this.mostrarRecurso34Info = !this.mostrarRecurso34Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso35(){
    this.mostrarRecurso35Info = !this.mostrarRecurso35Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso36(){
    this.mostrarRecurso36Info = !this.mostrarRecurso36Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso37(){
    this.mostrarRecurso37Info = !this.mostrarRecurso37Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso38(){
    this.mostrarRecurso38Info = !this.mostrarRecurso38Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso39(){
    this.mostrarRecurso39Info = !this.mostrarRecurso39Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso40(){
    this.mostrarRecurso40Info = !this.mostrarRecurso40Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso30Info = false;
    this.mostrarRecurso41Info = false;
  }

  resurso41(){
    this.mostrarRecurso41Info = !this.mostrarRecurso41Info;
    this.mostrarRecurso31Info = false;
    this.mostrarRecurso32Info = false;
    this.mostrarRecurso33Info = false;
    this.mostrarRecurso34Info = false;
    this.mostrarRecurso35Info = false;
    this.mostrarRecurso36Info = false;
    this.mostrarRecurso37Info = false;
    this.mostrarRecurso38Info = false;
    this.mostrarRecurso39Info = false;
    this.mostrarRecurso40Info = false;
    this.mostrarRecurso30Info = false;
  }
 
  mostrarInfoEmpresas(){

    this.botonEmpresasBlanco = false;
    this.botonEmpresasRojo = true;
    this.infoEmpresas = true;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = false;
    } else {
      this.espacioRojo = true;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }


  ocultarInfoEmpresas(){

    this.botonEmpresasBlanco = true;
    this.botonEmpresasRojo = false;
    this.infoEmpresas = false;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '30px';
    } else {
      this.marginTopDiv = '226.5px';
    }
  }

  mostrarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = false;
    this.botonEmprendimientosRojo = true;
    this.infoEmprendimientos = true;

    if(this.botonEmpresasRojo == true){
      this.espacioRojo = false;
    } else  {
      this.espacioRojo = true;
    }

    if(this.botonEmpresasRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = true;
    this.botonEmprendimientosRojo = false;
    this.infoEmprendimientos = false;

    if(this.botonEmpresasRojo == false){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }
  }

  
  mostrarCerebro2(){
    this.cartaCerebro2 = !this.cartaCerebro2;
    this.cartaPluma = true;
    this.cartaDiana = true;
  }

  mostrarPluma(){
    this.cartaPluma = !this.cartaPluma;
    this.cartaCerebro2 = true;
    this.cartaDiana = true;
  }

  mostrarDiana(){
    this.cartaDiana = !this.cartaDiana;
    this.cartaCerebro2 = true;
    this.cartaPluma = true;
  }

  ngOnInit(): void {    
   
    window.scrollTo(0, 0);

  
    const animationContainer = document.getElementById('reloj');
  
    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/reloj.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });

      animation1.setSpeed(0.7);
    }

    const animationContainer2 = document.getElementById('posit');
  
    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/posit.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });

      animation2.setSpeed(0.3);
    }

    const animationContainer3 = document.getElementById('robot');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/robot.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationCerebro2 = document.getElementById('cerebro2');

    if (animationCerebro2) {
      const animation3 = lottie.loadAnimation({ container: animationCerebro2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/cerebro2.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }

    
    const animationPluma = document.getElementById('pluma');

    if (animationPluma) {
      const animation3 = lottie.loadAnimation({ container: animationPluma, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/pluma.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }

    const animationDiana = document.getElementById('diana');

    if (animationDiana) {
      const animation3 = lottie.loadAnimation({ container: animationDiana, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/diana.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }
    

    const animationContainer22 = document.getElementById('titulobanner');
  
    if (animationContainer22) {
      const animation22 = lottie.loadAnimation({ container: animationContainer22, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/titulobanner.json' });
      animation22.addEventListener('DOMLoaded', () => {
      });

      
    animation22.setSpeed(0.2);
    }
 

  }


  banderaLinea1 = true;

  banderaLinea4 = true;
  
  banderaLinea2 = true;

  banderaLinea3 = true;

  banderaLinea5 = true;
  banderaLinea8 = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY || window.pageYOffset;

        console.log(scrollYPos)

        if (scrollYPos < 550){
          if (this.banner) {
            this.banner.nativeElement.style.display = 'none';
          }
        } else {
          if (this.banner) {
            this.banner.nativeElement.style.display = 'block';
          }
        }

        if(scrollYPos > 50 && this.banderaLinea1 == true){

          this.banderaLinea1 = false;

          const animationContainer5 = document.getElementById('lineaTexto');

          if (animationContainer5) {
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja2.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });
      
            animation5.setSpeed(0.2);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });
      
            animation6.setSpeed(0.2);
      
          }
      

        }

        if(scrollYPos > 200 && this.banderaLinea5 == true)
        {
          this.banderaLinea5 = false;

          const animationHacemos = document.getElementById('titulohacemos');

          if (animationHacemos) {
            const animation3 = lottie.loadAnimation({ container: animationHacemos, renderer: 'svg', loop: false, autoplay: true, path: 'assets/imagenes/iconosblog/tituloseccionmodelo.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.281111); 
          }

      
        }
      


        if (scrollYPos > 1005 && this.banderaLinea4 == true){

          this.banderaLinea4 = false;

       

          const animationConexion = document.getElementById('conexion');

          if (animationConexion) {
            const animation3 = lottie.loadAnimation({ container: animationConexion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/conexion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.281111); 
          }

          const animationPosicionamiento = document.getElementById('posicionamiento');

          if (animationPosicionamiento) {
            const animation3 = lottie.loadAnimation({ container: animationPosicionamiento, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/posicionamiento.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.231111); 
          }

          const animationInnovacion = document.getElementById('innovacion');

          if (animationInnovacion) {
            const animation3 = lottie.loadAnimation({ container: animationInnovacion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/innovacion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.191111); 
          }

          const animationCultura = document.getElementById('cultura');

          if (animationCultura) {
            const animation3 = lottie.loadAnimation({ container: animationCultura, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/cultura.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.151111); 
          }

        }


        if (scrollYPos > 1100 && this.banderaLinea8 == true){
          this.banderaLinea8 = false;

        const animationlinea7 = document.getElementById('lineaTexto7');

        if (animationlinea7) {
          const animation8 = lottie.loadAnimation({ container: animationlinea7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
          animation8.addEventListener('DOMLoaded', () => {
          });
    
          animation8.setSpeed(0.159999);
    
        }

      }

        
        if(scrollYPos > 1805 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

       

          const animationBombillo = document.getElementById('bombillo');

          if (animationBombillo) {
            const animation3 = lottie.loadAnimation({ container: animationBombillo, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/bombillo.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.17999);
          }

          const animationCorona = document.getElementById('corona');

          if (animationCorona) {
            const animation3 = lottie.loadAnimation({ container: animationCorona, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corona.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.24999);
          }

          const animationCorazon = document.getElementById('corazon');

          if (animationCorazon) {
            const animation3 = lottie.loadAnimation({ container: animationCorazon, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corazon.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.29999);
          }

          const animationCorazones = document.getElementById('corazones');

          if (animationCorazones) {
            const animation3 = lottie.loadAnimation({ container: animationCorazones, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/corazones.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.34999);
          }

          const animationMago = document.getElementById('mago');

          if (animationMago) {
            const animation3 = lottie.loadAnimation({ container: animationMago, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mago.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.54999);
          }

          const animationBufon = document.getElementById('bufon');

          if (animationBufon) {
            const animation3 = lottie.loadAnimation({ container: animationBufon, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/bufon.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.39999);
          }

          const animationCasa = document.getElementById('casa');

          if (animationCasa) {
            const animation3 = lottie.loadAnimation({ container: animationCasa, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/casa.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.44999);
          }

          const animationMedalla = document.getElementById('medalla');

          if (animationMedalla) {
            const animation3 = lottie.loadAnimation({ container: animationMedalla, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/medalla.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.59999);
          }

          const animationPaisaje = document.getElementById('paisaje');

          if (animationPaisaje) {
            const animation3 = lottie.loadAnimation({ container: animationPaisaje, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/paisaje.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.64999);
          }

          const animationBuho = document.getElementById('buho');

          if (animationBuho) {
            const animation3 = lottie.loadAnimation({ container: animationBuho, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/buho.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.69999);
          }

          
          const animationFlor = document.getElementById('flor');

          if (animationFlor) {
            const animation3 = lottie.loadAnimation({ container: animationFlor, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/flor.json' });
            animation3.addEventListener('DOMLoaded', () => {



            });
      
            animation3.setSpeed(0.74999);
          }


          const animationManoEstrella = document.getElementById('manoEstrella');

          if (animationManoEstrella) {
            const animation3 = lottie.loadAnimation({ container: animationManoEstrella, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/manoEstrella.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.49999);
          }



          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaseparadorauno.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });
      
            animation7.setSpeed(0.159999);
      
          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja2.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });
      
            animation9.setSpeed(0.159999);
      
          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.159999);
      
          }
        }

        if(scrollYPos > 3050 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animation6sombreros = document.getElementById('6sombreros');


          timer(1950).subscribe(() => {

          if (animation6sombreros) {
            const animation3 = lottie.loadAnimation({ container: animation6sombreros, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/6sombreros.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.2);
            if (this.sombres) {
              this.sombres.nativeElement.style.display = 'block';
            }



          }

          });


          ////////////////////////////////////////////////////////////////
          const animationGamificacion = document.getElementById('gamificacion');

          if (animationGamificacion) {

            timer(0).subscribe(() => {



            const animation3 = lottie.loadAnimation({ container: animationGamificacion, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/gamificacion.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.3);
            if (this.gamificacion) {
              this.gamificacion.nativeElement.style.display = 'block';
            }
      
          });
          ///////////////////////////////////////////////


          const animationRastreo = document.getElementById('rastreo');

          timer(2600).subscribe(() => {


          if (animationRastreo) {
            const animation3 = lottie.loadAnimation({ container: animationRastreo, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/rastreo.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
            
            animation3.setSpeed(0.2);
            if (this.rastreo) {
              this.rastreo.nativeElement.style.display = 'block';
            }
    
          }

          });

          const animationRealidadVirtual = document.getElementById('realidadVirtual');
          
          timer(3200).subscribe(() => {


          if (animationRealidadVirtual) {
            const animation3 = lottie.loadAnimation({ container: animationRealidadVirtual, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/realidadVirtual.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.2);
            if (this.realidadVirtual) {
              this.realidadVirtual.nativeElement.style.display = 'block';
            }


          }


          });
          ////////////////////////////////////////////////
          const animationSocial = document.getElementById('social');


          timer(650).subscribe(() => {



          if (animationSocial) {
            const animation3 = lottie.loadAnimation({ container: animationSocial, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/social.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });

            animation3.setSpeed(0.2);
            if (this.social) {
              this.social.nativeElement.style.display = 'block';
            }
      
          }

          });

          ///////////////////////////////////////////       
          const animationScp = document.getElementById('scp');

          timer(1300).subscribe(() => {

          if (animationScp) {
            const animation3 = lottie.loadAnimation({ container: animationScp, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/scp.json' });
            animation3.addEventListener('DOMLoaded', () => {
            });
      
            animation3.setSpeed(0.2);
            if (this.scp) {
              this.scp.nativeElement.style.display = 'block';
            }

          }

          });


          const animationContainer8 = document.getElementById('lineaTexto6');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Iconosinicio/lineaRoja.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.159999);
      
          }

         


        }




  }






}}