(function () {
    'use strict';

    const TEST = 10;
    // const TEST; // const can not be just declared, they got to be initialized in the same line
    console.log(TEST);

    //

    if(TEST > 0) {
        const TEST = 1;
    }
    console.log(TEST); // Block scoping
})();
