const range = (from: number, to: number, step: number) =>
	[...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

export const regularEmail: RegExp
	= /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u

export const regularTimes: RegExp = /^[0-9]+(\.?[0-9]+)?$/;

export const exercisesData = ['грудь', 'плечи', 'бицепс', 'ноги', 'удар'];

export const currentDate: number = new Date().getTime();

export const rangeTimeData: number[] = range(1, 60, 1);
