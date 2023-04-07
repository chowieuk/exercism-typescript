export function count(words: string): Map<string, number> {

        

          

  let ret = new Map()

        

          


        

          

  words

        

          

    .replace(/[\n\t\r!"#$%&()*+,\-./:;<=>@[\]^_`{|}~]/gm, ' ') // remove all characters that are haram according to test cases

        

          

    .replace(/\s+(?: )/g, ' ') // remove extra spacex, leaving only single space between words

        

          

    .toLowerCase()

        

          

    .trim()

        

          

    .split(' ')

        

          

    .forEach(e => {

        

          

      e = e

        

          

        .replace(/^'/, '') // remove apostrophy at the beginning of the word

        

          

        .replace(/'$/, '') // -------||-------- at the end

        

          


        

          

      if(e.length === 0) return

        

          


        

          

      if(ret.has(e)) {

        

          

        ret.set(e, ret.get(e) + 1)

        

          

      } else {

        

          

        ret.set(e, 1)

        

          

      }

        

          

    })

        

          


        

          

  return ret

        

          

}