import { Inject, Injectable, Injector, TemplateRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from '../components/organisms/modal/modal.component';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService {
  private modalNotifier?: Subject<string>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: { title?: string }) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(
      ModalComponent
    );
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.optionTitle = options?.title;

    modalComponent.hostView.detectChanges();

    modalComponent.instance.closeEvent.subscribe(() => {
      this.closeModal();
    });

    this.document.body.appendChild(modalComponent.location.nativeElement);

    this.modalNotifier = new Subject();
    return this.modalNotifier?.asObservable();
  }

  closeModal() {
    this.modalNotifier?.complete();
  }
}
