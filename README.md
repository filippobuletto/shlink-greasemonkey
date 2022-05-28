# Shlink Greasemonkey User Script

This script use [Shlink](https://shlink.io/) API calls to shorten visited URLs

## How to

Install [Greasemonkey](https://www.greasespot.net/) (or similar) and install this script using the `RAW` button on [GitHub](https://github.com/filippobuletto/shlink-greasemonkey/blob/main/shlink.user.js) or using this [direct link](https://github.com/filippobuletto/shlink-greasemonkey/raw/main/shlink.user.js).

Edit the installed script with the required (and optional) parameters.

Visit any website that supports `https://` protocol and:

- click on the Greasemonkey icon
- select "User script commands..."
- select "Short URLs (command)"

The command will request a short URL to the defined server via API call and will present you with a browser notification (with an icon that represents the link QRCode).

(OPTIONAL) If the [Web Client](https://github.com/shlinkio/shlink-web-client) is configured you can click on the notification and go to the edit page of the short URL just created.

## License

[MIT License](https://github.com/filippobuletto/shlink-greasemonkey/blob/main/LICENSE)
