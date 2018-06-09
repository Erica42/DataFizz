//I didn't get a chance to work on this to the extent that I wished.
//I'd only ever used noroguri and Ruby to create a crawler.
//Here are my notes on what I would need to combine in order to create a scraper:

//Make sure that the jQuery library is loaded
var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

//On Amazon click on the books department
$( "a:contains('Books')" )[2].click()
//Once on books click on the first book you come to
jQuery('a[title]')[0].click()

//On that page use these to find the things you are looking for
//And use them to create json
title = jQuery('span#productTitle').text()
author = jQuery('a.contributorNameID')[0].text
price = jQuery('span.a-color-price')[0].textContent
description = jQuery('iframe#bookDesc_iframe').contents().find('div#iframeContent').text()
dimensions = jQuery('li:contains("Dimensions")')[0].textContent.trim().split('\n')[2].trim()
imgUrl = $("img#imgBlkFront").src
weight = jQuery('li:contains("Weight")')[0].textContent.trim().split(' ').slice(2,4).join(' ')

