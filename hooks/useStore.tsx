/**
 * @author salimi-my
 * @link https://github.com/salimi-my/shadcn-ui-sidebar/blob/master/src/hooks/use-sidebar-toggle.ts
 *
 * Copiado em 06/08/2024
 */

import { useState, useEffect } from "react";

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;

  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
