export default {
  async get_download_data(isLatest) {
    console.log("Fetching download url from github");
    const res = await fetch(
      "https://api.github.com/repos/hmage123456/hmgemod/releases/" +
        (isLatest ? "latest" : "tags/stable"),
      {
        method: "GET"
      }
    );
    const json = await res.json();
    return {
      url: json.assets[0].browser_download_url,
      count: json.assets[0].download_count
    };
  },

  async get_fatal_issue_title() {
    const res = await fetch(
      "https://api.github.com/repos/hmage123456/hmgemod/issues?labels=fatal&sort=updated&direction=desc",
      {
        method: "GET"
      }
    );
    const json = await res.json();
    if (json.length != 0) {
      return {
        id: json[0].id,
        title: json[0].title
      };
    }
    return null;
  }
};
