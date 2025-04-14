import { cubicIn, cubicOut } from 'svelte/easing';

const duration = 100;
const delay = duration;
const y = 10;

export const transitionIn = { easing: cubicOut, y, duration, delay };
export const transitionOut = { easing: cubicIn, y: -y, duration };