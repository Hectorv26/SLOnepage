import { ModalService } from './../servicios/modal.service';
import { Component, HostListener, Inject, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  scrolled: boolean = true;
  lastScroll: number = 0;
  now: number = 0;
  formEnviado$ = this.showmodal.formEnviado$;
  btnclickclose$ = this.showmodal.btnclickclose$;

  ocultar = 0;
  mostarminibanner: boolean = false;

  isUnderlined: boolean = false;
  isUnderlinedModel: boolean = false;
  isUnderlinedSoluciones: boolean = false;
  isUnderlinedBlog: boolean = false;

  toggleUnderline() {
    this.isUnderlined = true;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineOff() {
    if (!this.isUnderlinedModel && !this.isUnderlinedSoluciones && !this.isUnderlinedBlog) {
      this.isUnderlined = false;
    }
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }
  

  toggleUnderlineModel() {
    this.isUnderlinedModel = true;
    this.isUnderlined = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineSoluciones() {
    this.isUnderlinedSoluciones = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineBlog() {
    this.isUnderlinedBlog = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
  }

  keepUnderline() {
    // No necesitas esta función en este escenario, ya que cada función de toggle maneja el subrayado individualmente.
  }

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private showmodal: ModalService) {
    router.events.subscribe(s => {
      // Aquí puedes agregar lógica adicional si es necesario
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.now = window.scrollY;
    if (this.now > this.lastScroll && this.scrolled) {
      this.scrolled = false;
    } else if (this.now < this.lastScroll && !this.scrolled) {
      this.scrolled = true;
    }
    this.lastScroll = this.now;
  }
}
