import Mock from '../mock'

const EcommerceDB = {
    productList: [
        {
            id: '323sa680b32497dsfdsgga21rt47',
            imgUrl: '/assets/images/albumCovers/cbl.png',
            price: 9.99,
            totalUnit: 100,
            title: 'Certified Lover Boy by Drake',
            category: 'audio',
            brand: 'Sony Music Records',
            rating: 5,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        {
            id: '323sa680b324976dfgga21rt47',
            imgUrl: '/assets/images/albumCovers/sos.png',
            price: 13.99,
            totalUnit: 100,
            title: 'SOS by SZA',
            category: 'audio',
            brand: 'Sony Music Records',
            rating: 3,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        {
            id: '323sa680bdf4976dfgga21rt4',
            imgUrl: '/assets/images/albumCovers/metro.png',
            price: 9.99,
            totalUnit: 100,
            title: 'Heroes & Villains by Metro Boomin',
            category: 'audio',
            brand: 'Sony Music Records',
            rating: 4,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        {
            id: '333sa680bdf4976dfgga21rt4',
            imgUrl: '/assets/images/albumCovers/testing.png',
            price: 11.99,
            totalUnit: 100,
            title: 'Testing by A$AP ROCKY',
            category: 'audio',
            brand: 'Smile Records',
            rating: 5,
            freeShipping: true,
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
    ],

    rating: [
        {
            rate: 5,
            product: 345,
        },
        {
            rate: 4,
            product: 53,
        },
        {
            rate: 3,
            product: 765,
        },
        {
            rate: 2,
            product: 32,
        },
        {
            rate: 1,
            product: 64,
        },
    ],

    cart: [
        {
            uid: 'PPFDrVGsojfZoDxeYLMdIAWxSzd2',
            list: [
                {
                    productId: '323sa680b32497dsfdsgga21rt47',
                    amount: 1,
                },
                {
                    productId: '323sa680b324976dfgga21rt47',
                    amount: 1,
                },
                {
                    productId: '323sa680bdf4976dfgga21rt4',
                    amount: 1,
                },
                {
                    productId: '333sa680bdf4976dfgga21rt4',
                    amount: 1,
                },
            ],
        },
    ],

    userList: [
        {
            id: '1',
            name: 'John Doe',
            avatar: '/assets/images/face-7.jpg',
        },
        {
            id: '323sa680b3249760ea21rt47',
            name: 'Frank Powell',
            avatar: '/assets/images/faces/13.jpg',
        },
        {
            id: '7863a6802ez0e277a0f98534',
            name: 'John Doe',
            avatar: '/assets/images/face-1.jpg',
        },
    ],
}

const getDetailedCartList = (uid) => {
    let cartList = EcommerceDB.cart[0].list
    return cartList.map((product) => ({
        amount: product.amount,
        ...EcommerceDB.productList.find(
            (item) => item.id === product.productId
        ),
    }))
}

Mock.onGet('/api/ecommerce/get-product-list').reply((config) => {
    const response = EcommerceDB.productList
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-category-list').reply((config) => {
    const response = EcommerceDB.category
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-rating-list').reply((config) => {
    const response = EcommerceDB.rating
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-brand-list').reply((config) => {
    const response = EcommerceDB.brand
    return [200, response]
})

Mock.onGet('/api/ecommerce/get-cart-list').reply((config) => {
    let uid = config.data
    let response = []

    if (uid) {
        response = getDetailedCartList(uid)
    }

    return [200, response]
})

Mock.onPost('/api/ecommerce/add-to-cart').reply((config) => {
    let { uid, productId } = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        // if (userCart.uid === uid) {
        let product = userCart.list.find(
            (product) => product.productId === productId
        )
        if (product) {
            return {
                ...userCart,
                list: userCart.list.map((product) => {
                    if (product.productId === productId) {
                        return {
                            ...product,
                            amount: product.amount + 1,
                        }
                    } else return product
                }),
            }
        } else {
            userCart.list.push({
                productId,
                amount: 1,
            })
            return userCart
        }
        // } else return userCart;
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})

Mock.onPost('/api/ecommerce/delete-from-cart').reply((config) => {
    let { uid, productId } = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        // if (userCart.uid === uid) {
        return {
            ...userCart,
            list: userCart.list.filter(
                (product) => product.productId !== productId
            ),
        }
        // } else return userCart;
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})

Mock.onPost('/api/ecommerce/update-cart-amount').reply((config) => {
    let { uid, productId, amount } = JSON.parse(config.data)

    let cartList = EcommerceDB.cart.map((userCart) => {
        // if (userCart.uid === uid) {
        return {
            ...userCart,
            list: userCart.list.map((product) => {
                if (product.productId === productId) {
                    console.log('found')
                    product.amount = amount
                }
                return product
            }),
        }
        // } else return userCart;
    })

    EcommerceDB.cart = cartList

    const response = getDetailedCartList(uid)

    return [200, response]
})
