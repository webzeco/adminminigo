export const productData = [
    {
        title: "Sweet Shirt",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        bucketPrice: 5,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        estimatedProcessingTime: '3 days',
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    }, {
        title: "Modern Chair",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        bucketPrice: 5,


        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],

        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
        , imgNames: ["https://png.pngtree.com/png-clipart/20210627/original/pngtree-eat-sleep-game-repeat-t-shirt-design-png-image_6467189.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]

    }
    , {
        title: "Classic chair",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        bucketPrice: 5,

        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    }, {
        title: "chair for sale",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    }, {
        title: "test item for sale",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        customDate: true, //will be used very similar to custom Writng
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    }, {
        title: "Sweet Shirt",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    },
    {
        title: "Sweet Shirt",
        price: 30,
        discount: 50, //discount will be zero if no discount is offered
        compareAtPrice: 20,
        costPerItem: 25,
        chargeTax: false,
        stockKeepingUnit: "ISBG8454",
        barcode: "AJLDHIU453",
        trackQuantity: true,
        sellOutofStock: false,
        availableQuantity: 9,
        physicalProduct: true,
        images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
        weight: "0.30",
        country: "Pakistan",
        deliveryTime: true, //will be used to set Option for delivery on specific date
        customWriting: 'Signature', //If empty then custom writting option will be disable and if not empty then we will take text input as text in string
        reviews: [{
            id: '1',
            username: 'Umar',
            rating: 3,
            feedback: 'This is a very very mandane product'
        },
        {
            id: '1',
            username: 'Umar',
            rating: 2,
            feedback: 'I am very very disappointed'
        },
        ],
        variants: [{
            id: 1,
            selectedOption: "Size",
            tags: [
                { id: 1, text: "SM" },
                { id: 2, text: "M" },
                { id: 3, text: "L" },
                { id: 4, text: "XL" },
                { id: 5, text: "XXL" }

            ]
        },
        {
            id: 2,
            selectedOption: "Color",
            tags: [
                { id: 1, text: "#0CF7F7" },
                { id: 2, text: "#f4d6c6" }
            ]
        },
        ],
        description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
    }

];

// export const productDat =

//     [
//         { 
//             collection:'',
//             subCollection:'',

//         title: "Sweet Shirt",
//         price: 30,
//         compareAtPrice: 20,
//         costPerItem: 25,
//         chargeTax: false,
//         stockKeepingUnit: "ISBG8454",
//         barcode: "AJLDHIU453",
//         trackQuantity: true,
//         sellOutofStock: true,
//         availableQuantity: 50,
//         physicalProduct: true,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//         weight: "0.30",
//         country: "Pakistan",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "bottom" },
//                         { id: 3, text: "blue" }]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "#7e2093" },
//                         { id: 2, text: "#12ddec" }]
//                 },
//                 {
//                     id: 3, selectedOption: "Material",
//                     tags: [
//                         { id: 1, text: "v" },
//                         { id: 2, text: "h" }]
//                 }],
//             description: "<h3>Material:</h3><ul><li>Wool</li><li>Cotton</li></ul><h3>Quality:</h3><p>This is a <strong>high</strong> quality product that will make you feel comfortable and <strong>attractive.</strong></p>"
//         },

//         {
//             title: "chair for sale",
//             price: 45,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",    
//                     tags: [
//                         { id: 1, text: "Night" , image:''},
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Books for sale",
//             price: 35,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 15,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 89,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 75,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["1.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         },
//         {
//             title: "Cap for sale",
//             price: 55,
//             compareAtPrice: 23,
//             costPerItem: 60,
//             chargeTax: false,
//             images: ['https://sb.kaleidousercontent.com/800x533/9e7eebd2c6/animals-0b6addc448f4ace0792ba4023cf06ede8efa67b15e748796ef7765ddeb45a6fb-removebg.png', 'https://www.freeiconspng.com/uploads/women-bag-png-32.png'],
//             stockKeepingUnit: "no number",
//             barcode: "ISUN0945",
//             trackQuantity: false,
//             sellOutofStock: true,
//             availableQuantity: 1,
//             physicalProduct: true,
//             weight: "75",
//             country: "Daska",
//             variants: [
//                 {
//                     id: 1, selectedOption: "Title",
//                     tags: [
//                         { id: 1, text: "Night" },
//                         { id: 2, text: "Day" }
//                     ]
//                 },
//                 {
//                     id: 2, selectedOption: "Color",
//                     tags: [
//                         { id: 1, text: "Blue" },
//                         { id: 2, text: "Green" }
//                     ]
//                 },
//                 {
//                     id: 3, selectedOption: "Style",
//                     tags: [
//                         { id: 1, text: "Rock" },
//                         { id: 2, text: "Classical" }
//                     ]
//                 }],
//             description: "<h3>Qualities:</h3><ul><li>Nothing to mention</li><li>Tall but not handsome</li></ul><p><strong>gpa:</strong>unknown</p><p>&nbsp;</p>",
//             imgNames: ["https://png.pngtree.com/png-clipart/20210627/original/pngtree-eat-sleep-game-repeat-t-shirt-design-png-image_6467189.jpg", "2.jpg", "3.jpg", "IMG_2484.jpg"]
//         }
//     ];