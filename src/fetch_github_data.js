export default {
  async get_download_data() {
    console.log("Fetching download url from github");
    const url = "https://api.github.com/repos/hmage123456/hmgemod/releases";
    const res = await fetch(url, {
      method: "GET"
    });
    const json = await res.json();

    console.log(json);

    const total = json.reduce((accumulator, current) => {
      if (current.assets === undefined || current.assets[0] === undefined) {
        return accumulator;
      }
      return accumulator + current.assets[0].download_count;
    }, 0);

    return {
      url: json[0].assets[0].browser_download_url,
      count: json[0].assets[0].download_count,
      total: total
    };
  }
};
