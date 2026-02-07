import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface InspectorCard {
  id: string;
  name: string;
  fullName: string;
  location: string;
  busesInspected: number;
  busesAssigned: number;
  tests: {
    road: number;
    water: number;
  };
  snags: {
    total: number;
    byArea: string;
    safetyCritical: number;
  };
  rating: number;
  avatarBg: string;
}

@Component({
  selector: 'app-inspector-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inspector-list.component.html',
  styleUrl: './inspector-list.component.scss'
})
export class InspectorListComponent {
  inspectors: InspectorCard[] = [
    {
      id: 'inspector-001',
      name: 'J. Carter',
      fullName: 'Jordan Carter',
      location: 'Seattle, WA',
      busesInspected: 142,
      busesAssigned: 8,
      tests: { road: 118, water: 24 },
      snags: { total: 63, byArea: 'Engine, Suspension, Interior', safetyCritical: 7 },
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #5b8def 0%, #0049b7 100%)'
    },
    {
      id: 'inspector-002',
      name: 'A. Singh',
      fullName: 'Anika Singh',
      location: 'Austin, TX',
      busesInspected: 128,
      busesAssigned: 6,
      tests: { road: 102, water: 26 },
      snags: { total: 54, byArea: 'Body, Electrical, Doors', safetyCritical: 5 },
      rating: 4,
      avatarBg: 'linear-gradient(135deg, #f97794 0%, #623aa2 100%)'
    },
    {
      id: 'inspector-003',
      name: 'M. Chen',
      fullName: 'Mei Chen',
      location: 'San Diego, CA',
      busesInspected: 116,
      busesAssigned: 7,
      tests: { road: 94, water: 22 },
      snags: { total: 48, byArea: 'HVAC, Brakes, Interior', safetyCritical: 4 },
      rating: 4,
      avatarBg: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
    },
    {
      id: 'inspector-004',
      name: 'D. Alvarez',
      fullName: 'Diego Alvarez',
      location: 'Miami, FL',
      busesInspected: 101,
      busesAssigned: 5,
      tests: { road: 81, water: 20 },
      snags: { total: 39, byArea: 'Cooling, Exterior, Seats', safetyCritical: 3 },
      rating: 4,
      avatarBg: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)'
    },
    {
      id: 'inspector-005',
      name: 'L. Okafor',
      fullName: 'Lena Okafor',
      location: 'Chicago, IL',
      busesInspected: 95,
      busesAssigned: 4,
      tests: { road: 76, water: 19 },
      snags: { total: 35, byArea: 'Doors, Lighting, Interior', safetyCritical: 2 },
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #f8cdda 0%, #1d2b64 100%)'
    },
    {
      id: 'inspector-006',
      name: 'S. Patel',
      fullName: 'Sanjay Patel',
      location: 'Newark, NJ',
      busesInspected: 88,
      busesAssigned: 5,
      tests: { road: 69, water: 19 },
      snags: { total: 31, byArea: 'Chassis, HVAC, Roof', safetyCritical: 2 },
      rating: 3,
      avatarBg: 'linear-gradient(135deg, #fad961 0%, #f76b1c 100%)'
    }
  ];

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part.trim()[0])
      .filter(Boolean)
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }

  // View Mode Toggle
  viewMode: 'card' | 'table' = 'card';

  toggleViewMode(mode: 'card' | 'table') {
    this.viewMode = mode;
    // Reset flip cards when switching to table view
    if (mode === 'table') {
      this.flippedCards.clear();
    }
  }

  // Search functionality
  searchQuery: string = '';
  filteredInspectors: InspectorCard[] = [];

  ngOnInit() {
    this.filteredInspectors = this.inspectors;
  }

  filterInspectors() {
    if (!this.searchQuery.trim()) {
      this.filteredInspectors = this.inspectors;
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredInspectors = this.inspectors.filter(inspector => 
      inspector.id.toLowerCase().includes(query) ||
      inspector.fullName.toLowerCase().includes(query) ||
      inspector.name.toLowerCase().includes(query)
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredInspectors = this.inspectors;
  }

  // Flip card state management
  flippedCards: Set<string> = new Set();

  flipCard(inspectorId: string) {
    this.flippedCards.add(inspectorId);
  }

  unflipCard(inspectorId: string) {
    this.flippedCards.delete(inspectorId);
  }

  isCardFlipped(inspectorId: string): boolean {
    return this.flippedCards.has(inspectorId);
  }

  // Message Modal
  isMessageModalOpen = false;
  selectedInspector: InspectorCard | null = null;
  messageData = {
    subject: '',
    body: '',
    priority: 'normal',
    sendCopy: false
  };

  showMessageModal(inspector: InspectorCard) {
    this.selectedInspector = inspector;
    this.isMessageModalOpen = true;
    // Reset form
    this.messageData = {
      subject: '',
      body: '',
      priority: 'normal',
      sendCopy: false
    };
    // Prevent body scroll
    document.body.classList.add('modal-open');
  }

  closeMessageModal() {
    this.isMessageModalOpen = false;
    this.selectedInspector = null;
    // Re-enable body scroll
    document.body.classList.remove('modal-open');
  }

  sendMessage() {
    if (!this.messageData.subject || !this.messageData.body) {
      alert('Please enter both subject and message.');
      return;
    }

    // In a real app, call service to send message
    console.log('Sending message to:', this.selectedInspector?.fullName);
    console.log('Message data:', this.messageData);
    
    alert(`Message sent successfully to ${this.selectedInspector?.fullName}!`);
    this.closeMessageModal();
  }
}
