import { CarruselService } from '../../compartido/servicios/carrusel.service';
import { ModalService } from '../../compartido/servicios/modal.service';
import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class BlogCardComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;


  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  infoDiscovery: boolean = false;
  infoStrategy: boolean = false;
  infoKnow: boolean = false;
  infoAlig: boolean = false;

  cartaPantalla: boolean = true;
  cartaTuerca: boolean = true;
  cartaCabeza: boolean = true;

  marginTopDiv: string = '30px';

  @ViewChild('colombia') colombia!: ElementRef;

  @ViewChild('banner') banner!: ElementRef;
  @ViewChild('mexico') mexico!: ElementRef;

  @ViewChild('ecuador') ecuador!: ElementRef;

  @ViewChild('peru') peru!: ElementRef;
  @ViewChild('chile') chile!: ElementRef;
  @ViewChild('argentina') argentina!: ElementRef;
  @ViewChild('dominicana') dominicana!: ElementRef;
  @ViewChild('guatemala') guatemala!: ElementRef;
  @ViewChild('salvador') salvador!: ElementRef;
  @ViewChild('panama') panama!: ElementRef;
  @ViewChild('honduras') honduras!: ElementRef;

  constructor(private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder, private showmodal: ModalService){
 
     
   
  }

  mostrarCabeza(){
    this.cartaCabeza = !this.cartaCabeza;
    this.cartaTuerca = true;
    this.cartaPantalla = true;
  }

  mostrarTuerca(){
    this.cartaTuerca = !this.cartaTuerca;
    this.cartaCabeza = true;
    this.cartaPantalla = true;
  }

  mostrarPantalla(){
    this.cartaPantalla = !this.cartaPantalla;
    this.cartaTuerca = true;
    this.cartaCabeza = true;
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

  mostrarInfoDiscovery(){

    this.infoDiscovery = !this.infoDiscovery;
    this.infoAlig = false;
    this.infoKnow = false;
    this.infoStrategy = false;

  }



  
  mostrarInfoStrategy(){

    
    this.infoDiscovery = false;
    this.infoAlig = false;
    this.infoKnow = false;
    this.infoStrategy = !this.infoStrategy;

  }

  mostrarInfoKnow(){

    this.infoDiscovery = false;
    this.infoAlig = false;
    this.infoKnow = !this.infoKnow;
    this.infoStrategy = false;

  }



  
  mostrarInfoAlig(){

    this.infoDiscovery = false;
    this.infoAlig = !this.infoAlig;
    this.infoKnow = false;
    this.infoStrategy = false;

  }



  ngOnInit(): void {    

    
    window.scrollTo(0, 0);

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
    
   

    const animationContainer = document.getElementById('cerebro');
  
    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/cerebrito.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer2 = document.getElementById('ojo');
  
    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/ojos.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer3 = document.getElementById('flecha');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/flecha.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });
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

  
  banderaLinea2 = true;

  banderaLinea3 = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY || window.pageYOffset;

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
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });
      
            animation5.setSpeed(0.2);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });
      
            animation6.setSpeed(0.2);
      
          }
      

        }

        
        if(scrollYPos > 2000 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });
      
            animation7.setSpeed(0.5);
      
          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });
      
            animation9.setSpeed(0.2);
      
          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });
      
            animation8.setSpeed(0.2);
      
          }
        }

        if(scrollYPos > 1100 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animationContainer4 = document.getElementById('lineach');

    if (animationContainer4) {
      const animation4 = lottie.loadAnimation({ container: animationContainer4, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineapeque.json' });
      animation4.addEventListener('DOMLoaded', () => {
      });

      animation4.setSpeed(0.1);

    }

    const animationContainer23 = document.getElementById('titulomapa');
  
    if (animationContainer23) {

      timer(0).subscribe(() => {

      const animation23 = lottie.loadAnimation({ container: animationContainer23, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/titulomapa.json' });
 
    animation23.addEventListener('DOMLoaded', () => {
    });

    animation23.setSpeed(0.3);

  });
    


    }


    const animationContainer10 = document.getElementById('colombia');

    if (animationContainer10) {

      timer(1000).subscribe(() => {

      const animation10 = lottie.loadAnimation({ container: animationContainer10, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/colombia.json' });
      animation10.addEventListener('DOMLoaded', () => {
      });

      animation10.setSpeed(0.2);

      if (this.colombia) {
        this.colombia.nativeElement.style.display = 'block';
      }

    });

    }



    const animationContainer12 = document.getElementById('mexico');

    if (animationContainer12) {

      timer(1500).subscribe(() => {

      const animation12 = lottie.loadAnimation({ container: animationContainer12, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation12.addEventListener('DOMLoaded', () => {
      });

      animation12.setSpeed(0.2);

      if (this.mexico) {
        this.mexico.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer13 = document.getElementById('salvador');

    if (animationContainer13) {

      
      timer(3000).subscribe(() => {

      const animation13 = lottie.loadAnimation({ container: animationContainer13, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation13.addEventListener('DOMLoaded', () => {
      });

      animation13.setSpeed(0.2);

      if (this.salvador) {
        this.salvador.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer14 = document.getElementById('peru');

    if (animationContainer14) {

      
      timer(5500).subscribe(() => {
      
      const animation14 = lottie.loadAnimation({ container: animationContainer14, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation14.addEventListener('DOMLoaded', () => {
      });

      animation14.setSpeed(0.2);

      if (this.peru) {
        this.peru.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer15 = document.getElementById('argentina');

    if (animationContainer15) {

      timer(6500).subscribe(() => {

      const animation15 = lottie.loadAnimation({ container: animationContainer15, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation15.addEventListener('DOMLoaded', () => {
      });

      animation15.setSpeed(0.2);

      if (this.argentina) {
        this.argentina.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer16 = document.getElementById('panama');

    if (animationContainer16) {

      timer(4000).subscribe(() => {

      const animation16 = lottie.loadAnimation({ container: animationContainer16, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/panamaArgentina.json' });
      animation16.addEventListener('DOMLoaded', () => {
      });

      animation16.setSpeed(0.2);

      if (this.panama) {
        this.panama.nativeElement.style.display = 'block';
      }

    });

    }


    const animationContainer17 = document.getElementById('guatemala');

    if (animationContainer17) {

      timer(2000).subscribe(() => {

      const animation17 = lottie.loadAnimation({ container: animationContainer17, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation17.addEventListener('DOMLoaded', () => {
      });

      animation17.setSpeed(0.2);

      if (this.guatemala) {
        this.guatemala.nativeElement.style.display = 'block';
      }

    });

    }


    
    const animationContainer18 = document.getElementById('dominicana');

    if (animationContainer18) {

      timer(2000).subscribe(() => {

      const animation18 = lottie.loadAnimation({ container: animationContainer18, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/mexicoSalvadorPeru.json' });
      animation18.addEventListener('DOMLoaded', () => {
      });

      animation18.setSpeed(0.2);

      if (this.dominicana) {
        this.dominicana.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer19 = document.getElementById('ecuador');

    if (animationContainer19) {

      timer(5000).subscribe(() => {

      const animation19 = lottie.loadAnimation({ container: animationContainer19, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/DominicanaGuatemala.json' });
      animation19.addEventListener('DOMLoaded', () => {
      });

      animation19.setSpeed(0.2);

      if (this.ecuador) {
        this.ecuador.nativeElement.style.display = 'block';
      }

    });

    }

    const animationContainer20 = document.getElementById('chile');

    if (animationContainer20) {

      timer(6000).subscribe(() => {

      const animation20 = lottie.loadAnimation({ container: animationContainer20, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation20.addEventListener('DOMLoaded', () => {
      });

      animation20.setSpeed(0.2);

      if (this.chile) {
        this.chile.nativeElement.style.display = 'block';
      }

    });

    }


    const animationContainer21 = document.getElementById('honduras');

    if (animationContainer21) {

      timer(3500).subscribe(() => {

      const animation21 = lottie.loadAnimation({ container: animationContainer21, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/iconorojo.json' });
      animation21.addEventListener('DOMLoaded', () => {
      });

      animation21.setSpeed(0.2);

      if (this.honduras) {
        this.honduras.nativeElement.style.display = 'block';
      }

    });

    }


        }




  }






}