import { cubicIn, cubicOut } from 'svelte/easing';

const duration = 100;

export const transitionIn = { easing: cubicIn, duration, delay: duration };
export const transitionOut = { easing: cubicOut, duration };
