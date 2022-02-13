import { GitHub } from "./github";

describe("getOwner", () => {
  it("should return the GitHub package owner from the given repository URL", () => {
    expect(GitHub.getOwner("https://github.com/jquery/jquery.git")).toEqual(
      "jquery"
    );
  });
});
