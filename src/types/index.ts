import { IconType } from "react-icons";

// Define a type for your user (example)
export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  // Define a type for your app's theme (example)
  export type Theme = 'light' | 'dark';
  
  // Define a type for your app's routes (example)
  export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
  };

  // Define type for a single menu item
export interface MenuItem {
  path: string;
  label: string;
  icon: IconType;
}

// Define props type for Sidebar
export interface SidebarProps {
  menuItems: MenuItem[];
}
