define([],function(){"use strict";var a={uses:"dimensions",min:3,max:4},b={uses:"measures",min:1,max:1},c={uses:"sorting"},d={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling"}}},e={uses:"settings",items:{initFetchRows:{ref:"qHyperCubeDef.qInitialDataFetch.0.qHeight",label:"Initial fetch rows",type:"number",defaultValue:20}}};return{type:"items",component:"accordion",items:{dimensions:a,measures:b,sorting:c,addons:d,appearance:e}}});