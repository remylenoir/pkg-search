export const GitHub = {
  /**
   * Returns the GitHub owner from a given repository URL.
   * @param repositoryUrl the GitHub repository URL.
   * @returns the owner.
   */
  getOwner: (repositoryUrl?: string): string =>
    repositoryUrl?.split("https://github.com/")[1]?.split("/")[0] || "",
};
