export interface SceneConfig {
  id: string
  name: string
  image: string
}

export const SCENES: SceneConfig[] = [
  {
    id: 'driver-seat',
    name: 'Driver Seat',
    image: '/assets/panorama/1.jpg',
  },
  {
    id: 'open-window',
    name: 'Open Window',
    image: '/assets/panorama/2.jpg',
  },
  {
    id: 'close-window',
    name: 'Closed Window',
    image: '/assets/panorama/3.jpg',
  },
  {
    id: 'living-room',
    name: 'Living Room',
    image: '/assets/panorama/4.jpg',
  },
  {
    id: 'living-room-light-on',
    name: 'Living Room Light On',
    image: '/assets/panorama/5.jpg',
  },
  {
    id: 'desk-open',
    name: 'Desk Open',
    image: '/assets/panorama/6.jpg',
  },
  {
    id: 'desk-closed',
    name: 'Desk Closed',
    image: '/assets/panorama/7.jpg',
  },
  {
    id: 'living-room-light-off',
    name: 'Living Room Light Off',
    image: '/assets/panorama/8.jpg',
  },
  {
    id: 'view-driver-seat',
    name: 'View Driver Seat',
    image: '/assets/panorama/9.jpg',
  },
  {
    id: 'close-driver-seat',
    name: 'Close Driver Seat',
    image: '/assets/panorama/10.jpg',
  },
]
