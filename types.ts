
// Fix: Import React to resolve "Cannot find namespace 'React'" errors when using React.ReactNode.
import React from 'react';

export interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
