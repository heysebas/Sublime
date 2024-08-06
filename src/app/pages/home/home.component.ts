import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { format, toZonedTime } from 'date-fns-tz';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isOpen: boolean = false;
  statusLabel: string = '';
  statusColor: string = '';
  closingTime: string = '';

  // Define la zona horaria para Colombia
  timezone: string = 'America/Bogota';

  ngOnInit() {
    this.updateStatus();
  }

  updateStatus() {
    // Obtén la hora actual en UTC y conviértela a la hora de Colombia
    const now = new Date();
    const zonedNow = toZonedTime(now, this.timezone);
    const hour = zonedNow.getHours();
    const day = zonedNow.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

    let closingHour = 21; // Hora de cierre por defecto de Domingo a Jueves

    // Ajuste de horas de cierre para Viernes y Sábados
    if (day === 5 || day === 6) {
      closingHour = 22; // 10 PM
    }

    const isOpen = hour >= 8 && hour < closingHour;
    const openTime = this.formatTime(8); // 8 AM
    const closeTime = this.formatTime(closingHour);

    if (isOpen) {
      this.isOpen = true;
      this.statusLabel = 'Abierto';
      this.statusColor = 'text-green-500'; // Texto verde para abierto
      this.closingTime = closeTime; // Hora de cierre
    } else {
      this.isOpen = false;
      this.statusLabel = 'Cerrado';
      this.statusColor = 'text-red-500'; // Texto rojo para cerrado
      this.closingTime = openTime; // Hora de apertura
    }
  }


  formatTime(hour: number): string {
    const ampm = hour >= 12 ? 'p.m.' : 'a.m.';
    const formattedHour = hour % 12 || 12; // Convertir a formato de 12 horas
    return `${formattedHour} ${ampm}`;
  }
}
