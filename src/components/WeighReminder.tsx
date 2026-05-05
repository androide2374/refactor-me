'use client';

import { useCallback, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../stores/authStore';

const CHECK_INTERVAL = 30_000;
const REMINDER_HOUR = 10;

export default function WeighReminder() {
    const { user, isAuthenticated } = useAuthStore();
    const notifiedRef = useRef(false);

    useEffect(() => {
        if (typeof Notification === 'undefined') return;
        if (Notification.permission === 'granted' || Notification.permission === 'denied') return;
        Notification.requestPermission();
    }, []);

    const checkAndNotify = useCallback(async () => {
        if (!isAuthenticated || !user) return;

        const now = new Date();
        const hour = now.getHours();

        if (hour < REMINDER_HOUR) return;

        const today = now.toISOString().slice(0, 10);
        const storageKey = `weigh-reminder-${user.username}-${today}`;

        if (notifiedRef.current) return;
        if (localStorage.getItem(storageKey)) return;

        const { data } = await supabase
            .from('body_weights')
            .select('id')
            .eq('user_id', user.username)
            .eq('date', today)
            .limit(1);

        if (data && data.length > 0) return;

        if (Notification.permission === 'granted') {
            new Notification('OnFit Focus', {
                body: 'No te olvides de pesarte hoy para mantener el registro de tu progreso.',
                icon: '/pwa-192.png',
                tag: `weigh-${user.username}-${today}`,
                requireInteraction: true
            });

            notifiedRef.current = true;
            localStorage.setItem(storageKey, '1');
        }
    }, [isAuthenticated, user]);

    useEffect(() => {
        if (!isAuthenticated || !user) return;

        notifiedRef.current = false;

        const timeout = setTimeout(() => {
            checkAndNotify();
        }, timeUntil(REMINDER_HOUR, 0));

        const interval = setInterval(checkAndNotify, CHECK_INTERVAL);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [isAuthenticated, user, checkAndNotify]);

    return null;
}

function timeUntil(hour: number, min: number): number {
    const now = new Date();
    const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, min, 0);
    const diff = target.getTime() - now.getTime();
    return diff > 0 ? diff : 0;
}
