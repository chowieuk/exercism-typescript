export function isPangram(candidate: string): boolean {
  if (candidate.length < 26) return false;
  candidate = candidate.toLowerCase();

  let scores: { [key: string]: number } = {};

  scores = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < candidate.length; i++) {
    scores[candidate.charAt(i)]++;
  }

  for (const key in scores) {
    if (scores[key] == 0) {
      return false;
    }
  }

  return true;
}
