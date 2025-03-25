"use client";

/**
 * React hooks
 */
import { useState, useEffect } from "react";

/**
 * Componentes
 */
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

/**
 * Next Theme Provider
 */
import { useTheme } from "next-themes";

/**
 * Icones
 */
import { GoSun, GoMoon } from "react-icons/go";

/**
 * Utilidades
 */
import { cn } from "@/lib/utils";

/**
 * Propriedades
 */
interface ThemeSwitcherProps {
  className?: string;
}

export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  /**
   * Propriedades
   */
  const { className } = props;

  /**
   * Estados
   */
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useTheme();
  //const [header, setHeader] = useState(false);

  /**
   * Verifica qual tema está ativo para manter o estado do Switch
   */
  useEffect(() => {
    if (theme === "dark") {
      setIsChecked(true);
    } else if (theme === "light") {
      setIsChecked(false);
    }
    setMounted(true);
  }, [theme]);

  /**
   * Funçõe para atualizar o estado do tema (theme)
   */
  function handlerClick() {
    if (isChecked === false) {
      setTheme("dark");
    } else if (isChecked === true) {
      setTheme("light");
    }
  }

  /**
   * Verifica se o useTheme() está carregado.
   * Isso acontece porque, por padrão, o useTheme() é carregado no client-side.
   */
  if (!mounted) {
    return null;
  }
  return (
    <>
      <div
        className={cn(
          "flex items-center space-x-2 justify-between ",
          className
        )}
      >
        {/* Botão para alterar entre o tema light e dark */}

        <Switch
          id="dark-mode"
          checked={isChecked}
          onCheckedChange={() => handlerClick()}
          className="data-[state=unchecked]:bg-foreground data-[state=checked]:bg-background hidden"
        />
        <Label htmlFor="dark-mode" className="cursor-pointer">
          {isChecked === true ? <GoMoon /> : <GoSun />}
        </Label>
      </div>
    </>
  );
}
