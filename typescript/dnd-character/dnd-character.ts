function Roll() {
  return Math.ceil(Math.random() * 6);
}

export class DnDCharacter {

  public static generateAbilityScore(): number {
    let first = Roll();
    let second = Roll();
    let third = Roll();
    let fourth = Roll();

    return first + second + third + fourth - Math.min(...[first, second, third, fourth]);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  strength: number = DnDCharacter.generateAbilityScore()
  dexterity: number = DnDCharacter.generateAbilityScore()
  constitution: number = DnDCharacter.generateAbilityScore()
  intelligence: number = DnDCharacter.generateAbilityScore()
  wisdom: number = DnDCharacter.generateAbilityScore()
  charisma: number = DnDCharacter.generateAbilityScore()
  
  hitpoints: number = 10 + DnDCharacter.getModifierFor(this.constitution)
}
