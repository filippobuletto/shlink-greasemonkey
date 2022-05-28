// ==UserScript==
// @name        Short URLs with Shlink
// @version     1
// @author      https://github.com/filippobuletto
// @match       https://*/*
// @description This script use Shlink API calls to shorten visited URLs!
// @grant       GM.xmlHttpRequest
// @grant       GM.setClipboard
// @grant       GM.notification
// @grant       GM.registerMenuCommand
// @grant       GM.openInTab
// ==/UserScript==

// REQUIRED Base URL of the Shlink (API) Server
var serverURL = "https://XXXX";

// REQUIRED API Key to authorize API calls
var apiKey = "YYYY";

// OPTIONAL Base URL of the Shlink (Web) Client
var webClientURL = "https://app.shlink.io/server";

// OPTIONAL Server key of the Shlink (Web) Client
var serverKey = "ZZZZ";

GM.registerMenuCommand("Short URLs (command)", function () {
    var dataToSend = {
        longUrl: window.location.toString(),
        // Customizable parameters, see https://api-spec.shlink.io/
        findIfExists: true,
        validateUrl: true,
        forwardQuery: true,
        crawlable: true
    };
    console.log("Sending " + JSON.stringify(dataToSend) + " to " + serverURL);
    GM.xmlHttpRequest({
        method: "POST",
        url: serverURL + "/rest/v2/short-urls",
        data: JSON.stringify(dataToSend),
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        },
        onload: function (response) {
            if (response.responseText.indexOf("shortUrl") > -1) {
                var jsonResponse = JSON.parse(response.responseText);
                GM.setClipboard(jsonResponse.shortUrl);
                GM.notification({
                    text: jsonResponse.shortUrl + "\nClick here to edit settings.",
                    title: "Short URL copied to clipboard",
                    image: jsonResponse.shortUrl + "/qr-code?size=300&format=png&errorCorrection=M",
                    onclick: function () {
                        if (!(webClientURL == null)) {
                            GM.openInTab(webClientURL + "/" + serverKey + "/short-code/" + jsonResponse.shortCode + "/edit", false);
                        }
                    }
                });
            } else {
                GM.notification("Something went wrong: see console log", "Cannot create short URL");
                console.log("Response Text: " + response.responseText);
            }
        }
    });
}
);
