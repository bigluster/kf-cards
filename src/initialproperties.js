/*global define*/
define( [], function () {
    'use strict';
    return {
        values_to_select:[],
        swipe_row_min: -1,
        swipe_row_max: -1,
        qHyperCubeDef: {
            qDimensions: [],
            qMeasures: [],
            qInitialDataFetch: [
                {
                    qWidth: 5,
                    qHeight: 50
                }
            ]
        }
    };
} );
