import { Phase } from './phase';
import { Item } from './item';
import { Mob } from './mob';

export interface QuestInfo {
    name: string;
    difficulty: number;
    description: string;
    notes: string;
    mobs: Mob[];
    items: Item[];
    phases: Phase[];
}
