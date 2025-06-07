import { Component, OnInit, effect, inject } from '@angular/core';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit{

  public showMenu = true;
  public menu: Menu[] = [
    {
      titulo: 'SuperAdmin',
      url: '/_admin/superadmin'
    },
    {
      titulo: 'Proyectos',
      url: '/_admin/proyectos'
    },
    {
      titulo: 'Fichar',
      url: '/_admin/fichar'
    },
    {
      titulo: 'Actividad',
      url: '/_admin/actividad'
    },
    {
      titulo: 'Contabilidad',
      url: '/_admin/contabilidad'
    },
    {
      titulo: 'Usuarios',
      url: '/_admin/usuarios'
    },
    {
      titulo: 'Legal',
      url: '/_admin/legal'
    },
    {
      titulo: 'Management',
      url: '/_admin/management'
    },
    {
      titulo: 'iArvis',
      url: '/_admin/iarvis'
    },
    {
      titulo: 'Bibliotecas',
      url: '',
      submenu: [
        { titulo: 'Asistencia', url: '/_admin/bibliotecas/asistencia' },
        { titulo: 'Calculadas', url: '/_admin/bibliotecas/calculadas' },
        { titulo: 'Dic. CEIMS', url: '/_admin/bibliotecas/ceims' },
        { titulo: 'Dic. Centros', url: '/_admin/bibliotecas/centros' },
        { titulo: 'Dic. Fundaciones', url: '/_admin/bibliotecas/fundaciones' },
        { titulo: 'Iconos', url: '/_admin/bibliotecas/iconos' },
        { titulo: 'Imágenes', url: '/_admin/bibliotecas/imagenes' },
        { titulo: 'Protocolos', url: '/_admin/bibliotecas/protocolos' },
      ]
    },
    {
      titulo: 'Programadores',
      url: '',
      submenu: [
        { titulo: 'Claves', url: '/_admin/programadores/claves' },
        { titulo: 'Migrador', url: '/_admin/programadores/migrador' },
      ]
    }
  ];

  ngOnInit(): void {


  }

}
