(function () {
    'use strict';

    let productId = 1; // let allows variables to be defined before use
    // let productId;
    {
        let productId = 2;
    }
    console.log(productId); // Block scoping
})();

(function () {
    'use strict';

    // function would be hoisted as is and var used inside would not cause an error and would be checked only once the function
    // is called
    function updateProductId() {
        productId = 2;
    }

    let productId = 1;

    updateProductId();

    console.log(productId);
})();

(function () {
    'use strict';

    let arrayOfFunctions = [];

    for (var i = 0; i < 2; i++) { // use of var here would update the i to the final value in the loop
        arrayOfFunctions.push(function () {
            return i;
        });
    }
    console.log(arrayOfFunctions[1]());
})();
