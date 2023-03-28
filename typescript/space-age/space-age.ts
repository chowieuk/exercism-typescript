export function age(planet: PlanetName, seconds: number): number {
    const ageInYears = secondsToYears(seconds) / Planet[planet];
    return parseFloat(ageInYears.toFixed(2));
}

export type PlanetName = keyof typeof Planet;

export const Planet = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808139,
    jupiter: 11.862615,
    saturn: 29.447409,
    uranus: 84.016816,
    neptune: 164.7903,
} as const;

export const secondsToYears = (seconds: number): number => {
    return seconds / 31557600;
};
