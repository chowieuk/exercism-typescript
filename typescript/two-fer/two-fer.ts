/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?: string): string {
  if (name == "" || name == null) {
    return "One for you, one for me."
  } else {
    return "One for " + name + ", one for me."
  }
}
