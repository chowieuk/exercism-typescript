export function isPangram(v: string): boolean {
  v = v.toLowerCase();
  if (v.includes("a")) {
    if (v.includes("b")) {
      if (v.includes("c")) {
        if (v.includes("d")) {
          if (v.includes("e")) {
            if (v.includes("f")) {
              if (v.includes("g")) {
                if (v.includes("h")) {
                  if (v.includes("i")) {
                    if (v.includes("j")) {
                      if (v.includes("k")) {
                        if (v.includes("l")) {
                          if (v.includes("m")) {
                            if (v.includes("n")) {
                              if (v.includes("o")) {
                                if (v.includes("p")) {
                                  if (v.includes("q")) {
                                    if (v.includes("r")) {
                                      if (v.includes("s")) {
                                        if (v.includes("t")) {
                                          if (v.includes("u")) {
                                            if (v.includes("v")) {
                                              if (v.includes("w")) {
                                                if (v.includes("x")) {
                                                  if (v.includes("y")) {
                                                    if (v.includes("z")) {
                                                      return true;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}
