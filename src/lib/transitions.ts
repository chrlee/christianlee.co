import { cubicIn, cubicOut } from 'svelte/easing';

const duration = 300;
const delay = duration + 100;
const y = 10;

export const transitionIn = { easing: cubicOut, y, duration, delay };
export const transitionOut = { easing: cubicIn, y: -y, duration };