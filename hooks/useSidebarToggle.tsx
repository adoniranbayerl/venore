/**
 * @author salimi-my
 * @link https://github.com/salimi-my/shadcn-ui-sidebar/blob/master/src/hooks/use-sidebar-toggle.ts
 *
 * Copiado em 06/08/2024
 */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useSidebarToggleStore {
  isExpanded: boolean;
  setIsExpanded: () => void;
}

export const useSidebarToggle = create(
  persist<useSidebarToggleStore>(
    (set, get) => ({
      isExpanded: true,
      setIsExpanded: () => {
        set({ isExpanded: !get().isExpanded });
      },
    }),
    {
      name: "sidebarExpanded",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
