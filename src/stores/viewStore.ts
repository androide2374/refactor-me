import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ViewMode = 'cards' | 'table';

interface ViewState {
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}

export const useViewStore = create<ViewState>()(
    persist(
        (set) => ({
            viewMode: 'cards',
            setViewMode: (mode: ViewMode) => set({ viewMode: mode })
        }),
        {
            name: 'onfit-view-preference'
        }
    )
);
