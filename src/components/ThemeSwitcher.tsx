'use client';

import { useEffect, useState } from 'react';
import { MoonStar, Palette, SunMedium } from 'lucide-react';

type Theme = 'onfit-light' | 'vscode-dark';

const THEME_KEY = 'onfit-theme';

const themes: Array<{ id: Theme; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'onfit-light', label: 'OnFit Light', icon: SunMedium },
    { id: 'vscode-dark', label: 'VS Code Dark', icon: MoonStar }
];

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>('onfit-light');

    useEffect(() => {
        const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;
        const initialTheme = savedTheme ?? 'onfit-light';

        document.documentElement.dataset.theme = initialTheme;
        setTheme(initialTheme);
    }, []);

    const applyTheme = (nextTheme: Theme) => {
        setTheme(nextTheme);
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem(THEME_KEY, nextTheme);
    };

    return (
        <div className="inline-flex w-full items-center justify-between gap-3 rounded-[1.25rem] border border-border/70 bg-card/80 p-2 sm:w-auto">
            <span className="inline-flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <Palette className="h-3.5 w-3.5" />
                Tema
            </span>
            <div className="inline-flex gap-1 rounded-[1rem] bg-background/80 p-1">
                {themes.map((item) => {
                    const Icon = item.icon;
                    const active = theme === item.id;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => applyTheme(item.id)}
                            className={`inline-flex items-center gap-1.5 rounded-[0.9rem] px-3 py-2 text-xs font-semibold transition ${active
                                    ? 'bg-primary text-primary-foreground shadow-[0_10px_20px_rgba(22,93,72,0.28)]'
                                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                                }`}
                        >
                            <Icon className="h-3.5 w-3.5" />
                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}