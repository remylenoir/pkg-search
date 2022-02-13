/**
 * Group of related String functions.
 */
export const Str = {
  /**
   * Pluralises a word with the given suffix if count is bigger than 1.
   * @param count the count number
   * @param word the singular word to pluralise
   * @param suffix the suffix to append to the singular word
   * @returns the initial or pluralised word.
   */
  pluralise: (count: number, word: string, suffix: string): string => {
    if (count > 1) {
      return word.concat(suffix);
    }

    return word;
  },
};
