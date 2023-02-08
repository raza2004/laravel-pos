import React, { Component, } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { sum } from "lodash";
import { BiTrash } from 'react-icons/bi';
import noProduct from '../../../storage/app/public/products/noProduct.png'
import { Alert, Button } from "bootstrap";
const yoloUrl = 'https://yolofood.qa/';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetail: "order detail",
            cart: [],
            grandTotal: 0,
            products: [],
            customers: [],
            barcode: "",
            search: "",
            customer_id: "",
            isPayment: false,
            newData: [
                {
                    "barcode": 778,
                    "name": "deal",
                    "description": "2 garlic bread, 1 fries",
                    "image": "3ac44dad-8737-4dcb-9c3c-b09dd5917a70",
                    "price": 200,
                    "category_id": 169,
                    "created_at": "2021-01-04 08:13:00",
                    "updated_at": "2022-10-28 12:53:47",
                    "available": 10,
                    "has_variants": 1,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "15",
                    "logom": yoloUrl + "/uploads/restorants/3ac44dad-8737-4dcb-9c3c-b09dd5917a70_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/3ac44dad-8737-4dcb-9c3c-b09dd5917a70_thumbnail.jpg",
                    "short_description": "2 garlic bread, 1 fries",
                    "category_name": "Deal"
                },
                {
                    "barcode": 4533,
                    "name": "Chicken tikka pizza",
                    "description": "Tikka flavor pizza with chicken tikka chunks.",
                    "image": "c192f61b-ba02-4f61-8e6e-ab93e7669948",
                    "price": 300,
                    "category_id": 82,
                    "created_at": "2020-12-01 09:21:55",
                    "updated_at": "2020-12-02 05:50:10",
                    "available": 125,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/c192f61b-ba02-4f61-8e6e-ab93e7669948_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/c192f61b-ba02-4f61-8e6e-ab93e7669948_thumbnail.jpg",
                    "short_description": "Tikka flavor pizza with chicken tikka...",
                    "category_name": "Dinners"
                },
                {
                    "barcode": 383,
                    "name": "Mix vegetables",
                    "description": "Mixed vegetables refer to ready to use combination of cut vegetables. The vegetables may be chopped, sliced, cubed or in juliennes.",
                    "image": "7a934015-00d4-4460-b3e7-01af24af041c",
                    "price": 3,
                    "category_id": 82,
                    "created_at": "2020-12-01 09:22:49",
                    "updated_at": "2020-12-07 11:50:42",
                    "available": 11,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/7a934015-00d4-4460-b3e7-01af24af041c_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/7a934015-00d4-4460-b3e7-01af24af041c_thumbnail.jpg",
                    "short_description": "Mixed vegetables refer to ready to use...",
                    "category_name": "Dinners"
                },
                {
                    "barcode": 384,
                    "name": "chicken pulao",
                    "description": "This quick and easy one-pot chicken and rice meal is a great gateway dish to Indian cuisine. It’s aromatic and mildly flavored with Indian spices. Thanks to the instant pot, making chicken pulao is nearly effortless.",
                    "image": "9ced7115-4119-471b-914e-3b76168827d1",
                    "price": 2,
                    "category_id": 82,
                    "created_at": "2020-12-01 09:25:10",
                    "updated_at": "2020-12-02 05:50:24",
                    "available": 121,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/9ced7115-4119-471b-914e-3b76168827d1_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/9ced7115-4119-471b-914e-3b76168827d1_thumbnail.jpg",
                    "short_description": "This quick and easy one-pot chicken and...",
                    "category_name": "Dinners"
                },
                {
                    "barcode": 385,
                    "name": "Lahori Beef Handi",
                    "description": "LAHORI BEEF HANDI. Ingredients: Beef (boiled) ½ kg. Tomatoes ½ kg. Yogurt ½ cup.",
                    "image": "b9e62fee-5737-4722-970d-1e233760ec75",
                    "price": 2,
                    "category_id": 82,
                    "created_at": "2020-12-01 09:26:38",
                    "updated_at": "2020-12-01 09:26:38",
                    "available": 18,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/b9e62fee-5737-4722-970d-1e233760ec75_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/b9e62fee-5737-4722-970d-1e233760ec75_thumbnail.jpg",
                    "short_description": "LAHORI BEEF HANDI. Ingredients: Beef...",
                    "category_name": "Dinners"
                },
                {
                    "barcode": 378,
                    "name": "Chicken tikka",
                    "description": "it is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi after marinating in Indian spices and dahi (yogurt)—essentially a boneless version of tandoori chicken. ...",
                    "image": "fae1e485-8fed-4d08-936c-08a908bb3f39",
                    "price": 3,
                    "category_id": 81,
                    "created_at": "2020-12-01 09:13:47",
                    "updated_at": "2020-12-01 09:13:47",
                    "available": 21,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/fae1e485-8fed-4d08-936c-08a908bb3f39_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/fae1e485-8fed-4d08-936c-08a908bb3f39_thumbnail.jpg",
                    "short_description": "it is traditionally small pieces of...",
                    "category_name": "Lunch"
                },
                {
                    "barcode": 379,
                    "name": "Chicken karahi",
                    "description": "Chicken karahi, or kadai chicken, is a dish from the Indian subcontinent noted for its spicy taste; it is notable in North Indian and Pakistani cuisine",
                    "image": "71f0a5fe-4bbc-4147-9ea8-7a66e00bb606",
                    "price": 4,
                    "category_id": 81,
                    "created_at": "2020-12-01 09:14:45",
                    "updated_at": "2020-12-01 09:14:45",
                    "available": 61,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/71f0a5fe-4bbc-4147-9ea8-7a66e00bb606_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/71f0a5fe-4bbc-4147-9ea8-7a66e00bb606_thumbnail.jpg",
                    "short_description": "Chicken karahi, or kadai chicken, is a...",
                    "category_name": "Lunch"
                },
                {
                    "barcode": 380,
                    "name": "BHATKALI STYLE MUTTON BIRYANI",
                    "description": "A bhatkali style biryani where mutton curry is cooked with very fewer spice powders and more of aromatics like green chilies and mint leaves.",
                    "image": "8fb83e3a-1202-4449-b4b3-ce3cce94ad88",
                    "price": 5,
                    "category_id": 81,
                    "created_at": "2020-12-01 09:15:56",
                    "updated_at": "2022-11-11 11:45:23",
                    "available": 61,
                    "has_variants": 1,
                    "vat": null,
                    "speciality_id": 11,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "5",
                    "logom": yoloUrl + "/uploads/restorants/8fb83e3a-1202-4449-b4b3-ce3cce94ad88_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/8fb83e3a-1202-4449-b4b3-ce3cce94ad88_thumbnail.jpg",
                    "short_description": "A bhatkali style biryani where mutton...",
                    "category_name": "Lunch"
                },
                {
                    "barcode": 381,
                    "name": "chicken soup with egg",
                    "description": "This chicken egg drop soup is the ultimate comfort food!",
                    "image": "bf1e5645-ab8f-400a-9781-971a7557c767",
                    "price": 1,
                    "category_id": 81,
                    "created_at": "2020-12-01 09:18:54",
                    "updated_at": "2020-12-01 09:18:54",
                    "available": 31,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/bf1e5645-ab8f-400a-9781-971a7557c767_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/bf1e5645-ab8f-400a-9781-971a7557c767_thumbnail.jpg",
                    "short_description": "This chicken egg drop soup is the...",
                    "category_name": "Lunch"
                },
                {
                    "barcode": 373,
                    "name": "Vegetable omelet",
                    "description": "Melt one tablespoon butter in a medium skillet over medium heat. Place onion and bell pepper inside of the skillet",
                    "image": "62bfd013-cca3-427e-ab3d-49b3e403e0a8",
                    "price": 1,
                    "category_id": 80,
                    "created_at": "2020-12-01 09:01:07",
                    "updated_at": "2022-10-28 12:55:59",
                    "available": 60,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "52",
                    "logom": yoloUrl + "/uploads/restorants/62bfd013-cca3-427e-ab3d-49b3e403e0a8_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/62bfd013-cca3-427e-ab3d-49b3e403e0a8_thumbnail.jpg",
                    "short_description": "Melt one tablespoon butter in a medium...",
                    "category_name": "Breakfast"
                },
            ]
        };

        this.loadCart = this.loadCart.bind(this);
        this.handleOnChangeBarcode = this.handleOnChangeBarcode.bind(this);
        this.handleScanBarcode = this.handleScanBarcode.bind(this);
        this.handleChangeQty = this.handleChangeQty.bind(this);
        this.handleEmptyCart = this.handleEmptyCart.bind(this);

        this.loadProducts = this.loadProducts.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setCustomerId = this.setCustomerId.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }

    componentDidMount() {
        // load user cart
        this.loadCart();
        this.loadProducts();
        this.loadCustomers();
    }

    loadCustomers() {
        axios.get(`/admin/customers`).then((res) => {
            const customers = res.data;
            this.setState({ customers });
        });
    }

    // loadProducts(search = "") {
    //     // console.log('search : ', search)
    //     // return
    //     const query = !!search ? `?search=${search}` : "";
    //     axios.get(`/admin/products${query}`).then((res) => {
    //         const products = res.data.data;
    //         this.setState({ products });
    //         console.log('Getted Product >> ', products)
    //     });
    // }

    //Yolo API
    loadProducts = (id) => {
        console.log('ID > ', id)
        axios({
            headers: {},
            method: 'get',
            url: `https://yolofood.qa/api/restorant/1/all_items`,
            params: {}
        })
            .then((response) => {
                console.log('--------------' + response.data);
            })
            .catch((error) => error);
        return;

        axios.get('https://yolofood.qa/api/restorant/1/all_items')
            .then((response) => {
                console.log('YOLO DATA  > ', response.data);
            });
    }

    handleOnChangeBarcode(event) {
        const barcode = event.target.value;
        console.log(barcode);
        this.setState({ barcode });

    }

    loadCart() {
        axios.get("/admin/cart").then((res) => {
            const cart = res.data;
            this.setState({ cart }, () => {
                console.log('Cart >> ', this.state.cart)
            });

        });
    }

    handleScanBarcode(event) {
        event.preventDefault();
        const { barcode } = this.state;
        if (!!barcode) {
            axios
                .post("/admin/cart", { barcode })
                .then((res) => {
                    this.loadCart();
                    this.setState({ barcode: "" });
                })
                .catch((err) => {
                    Swal.fire("Error!", err.response.data.message, "error");
                });
        }
    }
    handleChangeQty(product_id, qty) {
        const cart = this.state.cart.map((c) => {
            if (c.id === product_id) {
                c.pivot.quantity = qty;
            }
            return c;
        });

        this.setState({ cart });
        if (!qty) return;

        axios
            .post("/admin/cart/change-qty", { product_id, quantity: qty })
            .then((res) => { })
            .catch((err) => {
                Swal.fire("Error!", err.response.data.message, "error");
            });
    }

    getTotal(cart) {
        const total = cart.map((c) => c.pivot.quantity * c.price);
        return sum(total).toFixed(2);
    }
    handleClickDelete(product_id) {
        axios
            .post("/admin/cart/delete", { product_id, _method: "DELETE" })
            .then((res) => {
                const cart = this.state.cart.filter((c) => c.id !== product_id);
                this.setState({ cart });
            });
    }

    handleAllDelete() {
        this.setState({ cart: [] });
    }
    handleEmptyCart() {
        this.setState({ cart: [] });
    }
    handleChangeSearch(event) {
        const search = event.target.value;
        this.setState({ search });
    }
    handleSearch(event) {
        if (event.keyCode === 13) {
            this.loadProducts(event.target.value);
        }
    }

    // addProductToCart(barcode) {
    //     let product = this.state.products.find((p) => p.barcode === barcode);
    //     if (!!product) {
    //         // if product is already in cart
    //         let cart = this.state.cart.find((c) => c.id === product.id);
    //         if (!!cart) {
    //             // update quantity
    //             this.setState({
    //                 cart: this.state.cart.map((c) => {
    //                     if (
    //                         c.id === product.id &&
    //                         product.quantity > c.pivot.quantity
    //                     ) {
    //                         c.pivot.quantity = c.pivot.quantity + 1;
    //                     }
    //                     return c;
    //                 }),
    //             });
    //         } else {
    //             if (product.quantity > 0) {
    //                 product = {
    //                     ...product,
    //                     pivot: {
    //                         quantity: 1,
    //                         product_id: product.id,
    //                         user_id: 1,
    //                     },
    //                 };

    //                 this.setState({ cart: [...this.state.cart, product] });
    //             }
    //         }

    //         axios
    //             .post("/admin/cart", { barcode })
    //             .then((res) => {
    //                 this.loadCart();
    //                 console.log(res);
    //             })
    //             .catch((err) => {
    //                 Swal.fire("Error!", err.response.data.message, "error");
    //             });
    //     }
    // }


    addProductToCart(data) {
        // newfuntion for Yolo data
        // console.log('barcode > ', data.barcode)
        // console.log('barcode > ', data)
        // return
        let product = this.state.newData.find((p) => p.barcode === data.barcode);
        if (!!product) {
            console.log('name > ', product.name)
            // if product is already in cart
            let cart = this.state.cart.find((c) => c.barcode === data.barcode);
            console.log('Cart  ', this.state.cart)
            if (!!cart) {
                // update quantity
                console.log('update qty ')
                this.setState({
                    cart: this.state.cart.map((c) => {
                        if (
                            c.barcode === data.barcode &&
                            data.available > c.pivot.quantity
                        ) {
                            c.pivot.quantity = c.pivot.quantity + 1;
                        }
                        return c;
                    }),
                });
            } else {
                console.log('add new item ')
                if (product.available > 0) {
                    product = {
                        ...product,
                        pivot: {
                            quantity: 1,
                            product_id: data.barcode,
                            user_id: 1,
                        },
                    };

                    this.setState({ cart: [...this.state.cart, product] });
                }
            }
            console.log('cart {{>}} ', this.state.cart)
            // axios
            //     .post("/admin/cart", { barcode })
            //     .then((res) => {
            //         this.loadCart();
            //         console.log('Axios Response on adding cart > ', res);
            //     })
            //     .catch((err) => {
            //         Swal.fire("Error!", err.response.data.message, "error");
            //     });
        }
    }

    setCustomerId(event) {
        this.setState({ customer_id: event.target.value });
    }
    handleClickSubmit() {
        Swal.fire({
            title: "Received Amount",
            input: "text",
            inputValue: this.getTotal(this.state.cart),
            showCancelButton: true,
            confirmButtonText: "Send",
            showLoaderOnConfirm: true,
            preConfirm: (amount) => {
                return axios
                    .post("/admin/orders", {
                        customer_id: this.state.customer_id,
                        amount,
                    })
                    .then((res) => {
                        this.loadCart();
                        return res.data;
                    })
                    .catch((err) => {
                        Swal.showValidationMessage(err.response.data.message);
                    });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.value) {
                //
            }
        });
    }
    render() {
        const { cart, products, customers, barcode } = this.state;
        return (
            <div>
                {this.state.isPayment === false ?
                    (<div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="row mb-2">
                                <div className="col">
                                    <form onSubmit={this.handleScanBarcode}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Scan Barcode..."
                                            value={barcode}
                                            onChange={this.handleOnChangeBarcode}
                                        />
                                    </form>
                                </div>
                                <div className="col">
                                    <select
                                        className="form-control"
                                        onChange={this.setCustomerId}
                                    >
                                        <option value="">Walking Customer</option>
                                        {customers.map((cus) => (
                                            <option
                                                key={cus.id}
                                                value={cus.id}
                                            >{`${cus.first_name} ${cus.last_name}`}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="user-cart">
                                <div className="card">
                                    <table className="table table-striped">
                                        <thead className="thead">
                                            <tr>
                                                <th>Product Name</th>
                                                <th className="text-centre">Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((c) => (
                                                <tr key={c.id} className="rite">
                                                    <td>{c.name}</td>
                                                    <td className="text-right1">
                                                        {window.APP.currency_symbol}{" "}
                                                        {(
                                                            c.price * c.pivot.quantity
                                                        ).toFixed(2)}
                                                    </td>
                                                    <td>
                                                        <input type="text"
                                                            className="form-control form-control-sm qty pricer"
                                                            value={c.pivot.quantity}
                                                            onChange={(event) =>
                                                                this.handleChangeQty(
                                                                    c.id,
                                                                    event.target.value
                                                                )
                                                            }
                                                        />
                                                        <button
                                                            className="btn btn-danger btn-sm del"
                                                            onClick={() =>
                                                                this.handleClickDelete(
                                                                    c.id
                                                                )
                                                            }
                                                        >
                                                            <BiTrash className="trash" />
                                                        </button>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                        {/* <button
                                    className="btn btn-danger btn-lg del"
                                    onClick={() =>
                                        this.handleAllDelete()
                                    }
                                >
                                    <BiTrash className="trash" />
                                </button> */}
                                    </table>
                                </div>
                            </div>

                            <div className="row3">
                                <div className="total">Total:</div>
                                <div className="col text-right">
                                    {window.APP.currency_symbol} {this.getTotal(cart)}
                                </div>
                            </div>
                            <div className="row" style={{ paddingLeft: 10, justifyContent: 'center' }}>
                                {/* <div className="col"> */}
                                <div className="btn-group-vertical col2">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-block"
                                        onClick={this.handleEmptyCart}
                                        disabled={!cart.length}>
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-block"
                                        disabled={!cart.length}
                                        onClick={this.handleClickSubmit}
                                        style={{ marginTop: 4 }}>
                                        Submit
                                    </button>
                                </div>
                                <div className="btn-group mr-2">
                                    <button
                                        type="button"
                                        className="btn group-vertical btn11"
                                        onClick={this.handleClickSubmit}
                                        disabled={!cart.length}
                                    >
                                        Payment
                                    </button>
                                    <button style={{ marginLeft: 5, }}
                                        type="button"
                                        className="btn btn-success btn-block btn22"
                                        onClick={() => {
                                            this.setState({ isPayment: true },
                                                () => {
                                                    let total = 0
                                                    for (let i = 0; i < this.state.cart.length; i++) {
                                                        total = total + this.state.cart[i].price * this.state.cart[i].pivot.quantity
                                                    }
                                                    this.setState({ grandTotal: total })
                                                })
                                        }}
                                        disabled={!cart.length}
                                    >
                                        Print Bill
                                    </button>
                                </div>
                                {/* </div> */}
                            </div>
                        </div >
                        <div className="col-md-6 col-lg-5">
                            <div className="mb-2">
                                <input
                                    size="30"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Product..."
                                    onChange={this.handleChangeSearch}
                                    onKeyDown={this.handleSearch}
                                />
                            </div>
                            {/* <div className="order-product">
                        {products.map((p) => (
                            <div
                                onClick={() => this.addProductToCart(p.barcode)}
                                key={p.id}
                                className="item"
                            >
                                <img src={p.image_url} alt="no image" />
                                <h5
                                    style={
                                        window.APP.warning_quantity > p.quantity
                                            ? { color: "red" }
                                            : {}
                                    }
                                >
                                    {p.name}({p.quantity})
                                </h5>
                            </div>
                        ))}
                    </div> */}
                            <div className="order-product">
                                {this.state.newData.map((d) => (
                                    <div
                                        style={{}}
                                        onClick={() => {
                                            this.addProductToCart(d)
                                        }}
                                        key={d.barcode}
                                        className="item"
                                    >
                                        <img src={d.logom} alt="no image" />
                                        <p style={{ fontSize: 15, textAlign: 'center' }}>
                                            <b> {d.name.toUpperCase().substring(0, 5)}</b>
                                            <p style={{ fontSize: 12, textAlign: 'center' }}>Total Qty : {d.available}</p>
                                            <p style={{ fontSize: 12, marginTop: -15, textAlign: 'center' }}>Price : Rs.{d.price}</p>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>)
                    :
                    (<div>
                        <h3>
                            <center>{this.state.orderDetail.toUpperCase()}</center>
                        </h3>
                        <button
                            className="btn btn-success btn-lg"
                            style={{
                                backgroundColor: 'maroon', padding: 5, paddingInline: 20,
                                marginLeft: "96%",
                                marginTop: "-30px",
                                border: "1px solid maroon"
                            }}
                            onClick={() =>
                                this.setState({
                                    isPayment: false
                                }, () => console.log('isPayment ', this.state.isPayment))
                            }
                        >{'X'} </button>
                        <table style={{
                            fontFamily: " arial, sans-serif",
                            borderCollapse: "collapse",
                            width: "100%"
                        }}>
                            <tr style={{
                                border: "1px solid #dddddd",
                                textAlign: "left",
                                padding: "8px",
                                backgroundColor: "#cfcfcf",
                                fontSize: "18px"
                            }}>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Price{" (Rs)"}</th>
                                <th>Sub Total{" (Rs)"}</th>
                            </tr>
                            {this.state.cart.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.pivot.quantity}.0</td>
                                    <td className="a">{item.price}.00</td>
                                    <td className="b">{item.pivot.quantity * item.price}.00</td>
                                </tr>
                            ))}
                            <br />
                            <tr style={{ backgroundColor: "#ada3a3", fontSize: "18px" }}>
                                <td><b>Grand Total </b> </td>
                                <td></td>
                                <td></td>
                                <td><b>Rs. {this.state.grandTotal}.00</b></td>
                            </tr>
                        </table>
                    </div>)
                }
            </div>
        );
    }
}

export default Cart;

if (document.getElementById("cart")) {
    ReactDOM.render(<Cart />, document.getElementById("cart"));
}
