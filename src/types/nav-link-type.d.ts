import { LucideIcon } from 'lucide-react';

export interface NavLinkType {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}