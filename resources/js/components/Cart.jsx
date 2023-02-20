import React, { Component, } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import print from 'print-js'
// import html2pdf from 'html2pdf.js';
import Swal from "sweetalert2";
import { find, sum } from "lodash";
import { BiTrash } from 'react-icons/bi';

import { Alert, Button } from "bootstrap";
import { ImCross } from "react-icons/im";
import { data } from "jquery";
import printJS from "print-js";
<script src="print.js"></script>
const yoloUrl = 'https://yolofood.qa/';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            printBill: "print detail",
            orderDetail: "order detail",
            cart: [],
            printForm: "",
            grandTotal: 0,
            products: [],
            print: "",
            customers: [],
            barcode: "",
            search: "",
            name: "",
            customer_id: "",
            isPayment: false,
            searchData: [],
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
                    "barcode": 382,
                    "name": "Chicken tikka pizza",
                    "description": "Tikka flavor pizza with chicken tikka chunks.",
                    "image": "c192f61b-ba02-4f61-8e6e-ab93e7669948",
                    "price": 300,
                    "category_id": 5,
                    "created_at": "2020-12-01 09:21:55",
                    "updated_at": "2020-12-02 05:50:10",
                    "available": 18,
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
                    "available": 2,
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
                    "available": 64,
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
                    "available": 87,
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
                    "available": 89,
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
                    "available": 1,
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
                    "available": 87,
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
                    "available": 87,
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
                    "available": 97,
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
                {
                    "barcode": 374,
                    "name": "Belgian waffle",
                    "description": "Belgian waffles are a variety of waffle with a lighter batter, larger squares, and deeper pockets than American waffles. Belgian waffles were originally leavened with yeast,",
                    "image": "69f09035-6cc1-4c0b-a9a0-f1000a480b28",
                    "price": 3,
                    "category_id": 80,
                    "created_at": "2020-12-01 09:07:22",
                    "updated_at": "2020-12-01 09:07:22",
                    "available": 10,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/69f09035-6cc1-4c0b-a9a0-f1000a480b28_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/69f09035-6cc1-4c0b-a9a0-f1000a480b28_thumbnail.jpg",
                    "short_description": "Belgian waffles are a variety of waffle...",
                    "category_name": "Breakfast"
                },
                {
                    "barcode": 376,
                    "name": "Lumberjack omelet",
                    "description": "This hearty protein packed omelet featuring sausage, ham, bacon, onion and cheddar cheese is what Lumberjacks are made of!",
                    "image": "174d4b31-b082-46b0-b190-3acd4a151739",
                    "price": 1,
                    "category_id": 80,
                    "created_at": "2020-12-01 09:09:27",
                    "updated_at": "2020-12-01 09:09:27",
                    "available": 21,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 13,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/174d4b31-b082-46b0-b190-3acd4a151739_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/174d4b31-b082-46b0-b190-3acd4a151739_thumbnail.jpg",
                    "short_description": "This hearty protein packed omelet...",
                    "category_name": "Breakfast"
                },
                {
                    "barcode": 377,
                    "name": "Tofu Scramble",
                    "description": "Tofu scramble, a vegan alternative to scrambled eggs. It's so easy to make, high in protein, and ready in 15 minutes with only 4 ingredients! Eggs might be one of the hardest foods to give up when you go vegan, but this tofu scramble is a real game changer!",
                    "image": "ae056400-efab-41db-b388-e6a45133d820",
                    "price": 5,
                    "category_id": 80,
                    "created_at": "2020-12-01 09:11:25",
                    "updated_at": "2020-12-01 09:11:25",
                    "available": 551,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/ae056400-efab-41db-b388-e6a45133d820_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/ae056400-efab-41db-b388-e6a45133d820_thumbnail.jpg",
                    "short_description": "Tofu scramble, a vegan alternative to...",
                    "category_name": "Breakfast"
                },
                {
                    "barcode": 386,
                    "name": "chicken pasta",
                    "description": "Cook a complete dinner in one pot with this Creamy Cajun Chicken Pasta, using mostly pantry-stable ...",
                    "image": "f6bb59ec-ca54-44cd-84f9-d9f05d319688",
                    "price": 3,
                    "category_id": 69,
                    "created_at": "2020-12-01 09:29:38",
                    "updated_at": "2020-12-01 09:29:38",
                    "available": 541,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/f6bb59ec-ca54-44cd-84f9-d9f05d319688_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/f6bb59ec-ca54-44cd-84f9-d9f05d319688_thumbnail.jpg",
                    "short_description": "Cook a complete dinner in one pot with...",
                    "category_name": "pasta"
                },
                {
                    "barcode": 387,
                    "name": "chicken cheese pasta",
                    "description": "This Cheesy Chicken Pasta is the perfect dinner any night of the week. It's packed with creamy, ..",
                    "image": "17f30312-91bb-4484-9e8e-a46ae919f10c",
                    "price": 2,
                    "category_id": 69,
                    "created_at": "2020-12-01 09:30:23",
                    "updated_at": "2020-12-01 09:30:23",
                    "available": 15,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/17f30312-91bb-4484-9e8e-a46ae919f10c_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/17f30312-91bb-4484-9e8e-a46ae919f10c_thumbnail.jpg",
                    "short_description": "This Cheesy Chicken Pasta is the...",
                    "category_name": "pasta"
                },
                {
                    "barcode": 388,
                    "name": "alfredo pasta",
                    "description": "Alfredo is a creamy, dreamy pan sauce made from butter and Parmigiano-Reggiano cheese",
                    "image": "fd12c07c-e6b1-409d-90e4-4ff1c0713f27",
                    "price": 3,
                    "category_id": 69,
                    "created_at": "2020-12-01 09:31:36",
                    "updated_at": "2020-12-01 09:31:36",
                    "available": 1,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": yoloUrl + "/uploads/restorants/fd12c07c-e6b1-409d-90e4-4ff1c0713f27_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/fd12c07c-e6b1-409d-90e4-4ff1c0713f27_thumbnail.jpg",
                    "short_description": "Alfredo is a creamy, dreamy pan sauce...",
                    "category_name": "pasta"
                },
                {
                    "barcode": 24,
                    "name": "Lasagna Classic (450g)",
                    "description": "Bolognese sauce, mozzarella Sabelli",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/94d44523-ec90-4069-bd11-eb9588207c31",
                    "price": 11.99,
                    "category_id": 4,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-12-01 07:49:37",
                    "available": 54,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/94d44523-ec90-4069-bd11-eb9588207c31_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/94d44523-ec90-4069-bd11-eb9588207c31_thumbnail.jpg",
                    "short_description": "Bolognese sauce, mozzarella Sabelli",
                    "category_name": "Lasagna"
                },
                {
                    "barcode": 25,
                    "name": "Napoli Lasagna (450g)",
                    "description": "chicken fillet, cream (animal), corn, blue cheese, mozzarella Sabelli",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/4c367950-992c-4711-ab56-42bed10de86c",
                    "price": 11.99,
                    "category_id": 4,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 77,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/4c367950-992c-4711-ab56-42bed10de86c_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/4c367950-992c-4711-ab56-42bed10de86c_thumbnail.jpg",
                    "short_description": "chicken fillet, cream (animal), corn,...",
                    "category_name": "Lasagna"
                },
                {
                    "barcode": 26,
                    "name": "Lasagna Formagio (450g)",
                    "description": "smoked cheese, blue cheese, emmental, cream (animal), mozzarella Sabelli",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/8bafc3ec-82e7-46f8-964a-77a13e4ddf96",
                    "price": 11.99,
                    "category_id": 4,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-12-01 08:33:26",
                    "available": 77,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/8bafc3ec-82e7-46f8-964a-77a13e4ddf96_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/8bafc3ec-82e7-46f8-964a-77a13e4ddf96_thumbnail.jpg",
                    "short_description": "smoked cheese, blue cheese, emmental,...",
                    "category_name": "Lasagna"
                },
                {
                    "barcode": 18,
                    "name": "Spaghetti Carbonara (450g)",
                    "description": "fresh pasta, cream (animal), onion, pancakes (smoked bacon), egg, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/b65d5389-4742-4a78-9d94-f31110984db6",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 78,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/b65d5389-4742-4a78-9d94-f31110984db6_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/b65d5389-4742-4a78-9d94-f31110984db6_thumbnail.jpg",
                    "short_description": "fresh pasta, cream (animal), onion,...",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 19,
                    "name": "Spaghetti Formaggi (450g)",
                    "description": "fresh pasta, cream (animal), blue cheese, emmental, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/4a2067cb-f39c-4b26-83ef-9097512d3328",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-12-01 08:33:56",
                    "available": 1,
                    "has_variants": 88,
                    "vat": 21,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/4a2067cb-f39c-4b26-83ef-9097512d3328_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/4a2067cb-f39c-4b26-83ef-9097512d3328_thumbnail.jpg",
                    "short_description": "fresh pasta, cream (animal), blue...",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 20,
                    "name": "Tagliatelle with mushrooms (400g)",
                    "description": "fresh pasta, cream (animal), mushrooms, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/0bae6238-dda6-4630-b300-5125fde865d4",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 71,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/0bae6238-dda6-4630-b300-5125fde865d4_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/0bae6238-dda6-4630-b300-5125fde865d4_thumbnail.jpg",
                    "short_description": "fresh pasta, cream (animal), mushrooms,...",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 21,
                    "name": "Chicken risotto (450g)",
                    "description": "Arborio rice, chicken breast, onion, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/033c32c1-cdae-495e-910f-66b5fa239297",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 81,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/033c32c1-cdae-495e-910f-66b5fa239297_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/033c32c1-cdae-495e-910f-66b5fa239297_thumbnail.jpg",
                    "short_description": "Arborio rice, chicken breast, onion,...",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 22,
                    "name": "Risotto with mushrooms (450g)",
                    "description": "Arborio rice, mushrooms, garlic, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/08d82944-f947-48f4-a197-a3199bb3b6e7",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 41,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/08d82944-f947-48f4-a197-a3199bb3b6e7_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/08d82944-f947-48f4-a197-a3199bb3b6e7_thumbnail.jpg",
                    "short_description": "Arborio rice, mushrooms, garlic,...",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 23,
                    "name": "Tagliatelle with Bolognese Sauce (400g)",
                    "description": "fresh pasta, bolognese sauce, parmesan",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/cc695ba9-8af3-47a4-8e41-dc1706cbf2c3",
                    "price": 11.99,
                    "category_id": 3,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 16,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/cc695ba9-8af3-47a4-8e41-dc1706cbf2c3_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/cc695ba9-8af3-47a4-8e41-dc1706cbf2c3_thumbnail.jpg",
                    "short_description": "fresh pasta, bolognese sauce, parmesan",
                    "category_name": "Fresh Pasta"
                },
                {
                    "barcode": 7,
                    "name": "Mozzarella Pizza",
                    "description": "tomato sauce, mozzarella sabelli, cherry tomatoes, olives, pesto sauce, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/f71ae2d7-f24f-4e1b-9bdd-7ab7143ce3c8",
                    "price": 10.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2020-10-18 08:05:01",
                    "available": 61,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/f71ae2d7-f24f-4e1b-9bdd-7ab7143ce3c8_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/f71ae2d7-f24f-4e1b-9bdd-7ab7143ce3c8_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 8,
                    "name": "Prosciutto crust pizza",
                    "description": "tomato sauce, mozzarella sabelli, prosciutto, arugula, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/9b9886cb-5d4b-4bfe-a02a-dc3b94dae706",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2020-10-18 08:05:01",
                    "available": 71,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/9b9886cb-5d4b-4bfe-a02a-dc3b94dae706_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/9b9886cb-5d4b-4bfe-a02a-dc3b94dae706_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 9,
                    "name": "Pepperoni Pizza",
                    "description": "tomato sauce, mozzarella Sabelli, Calabro salad (spicy), extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/4b26647d-52b8-43c5-8b62-708c99252c24",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2022-10-26 10:04:53",
                    "available": 91,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "20",
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/4b26647d-52b8-43c5-8b62-708c99252c24_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/4b26647d-52b8-43c5-8b62-708c99252c24_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella Sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 10,
                    "name": "Carriola Pizza",
                    "description": "tomato sauce, mozzarella sabelli, bacon, red onion, olives, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/e1e5559a-ca6d-4a34-80c6-b72c31d97d96",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:02",
                    "updated_at": "2020-10-18 08:05:02",
                    "available": 11,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/e1e5559a-ca6d-4a34-80c6-b72c31d97d96_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/e1e5559a-ca6d-4a34-80c6-b72c31d97d96_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 11,
                    "name": "Perugia Pizza",
                    "description": "tomato sauce, mozzarella sabelli, chicken fillet, red onion, fresh peppers, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/a8e8c22a-84cd-48d0-971a-2c98e695e387",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:02",
                    "updated_at": "2020-10-18 08:05:02",
                    "available": 51,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/a8e8c22a-84cd-48d0-971a-2c98e695e387_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/a8e8c22a-84cd-48d0-971a-2c98e695e387_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 12,
                    "name": "Pizza Napoli",
                    "description": "tomato sauce, mozzarella sabelli, ham, cherry tomatoes, emmental, arugula, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/5c8fa7eb-bc11-42e1-a1a5-ffb0b3d7a6b7",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:02",
                    "updated_at": "2020-10-18 08:05:02",
                    "available": 21,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/5c8fa7eb-bc11-42e1-a1a5-ffb0b3d7a6b7_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/5c8fa7eb-bc11-42e1-a1a5-ffb0b3d7a6b7_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli, ham,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 13,
                    "name": "Margarita Pizza",
                    "description": "tomato sauce, mozzarella Sabelli, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/9d180742-9fb3-4b46-8563-8c24c9004fd3",
                    "price": 10.49,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:02",
                    "updated_at": "2020-10-18 08:05:02",
                    "available": 81,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/9d180742-9fb3-4b46-8563-8c24c9004fd3_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/9d180742-9fb3-4b46-8563-8c24c9004fd3_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella Sabelli, extra...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 14,
                    "name": "Combo Pizza 50/50 (70cm)",
                    "description": "",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/cb7372d0-73a8-4551-bc31-22035d9551c4",
                    "price": 39.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:02",
                    "updated_at": "2020-10-18 08:05:02",
                    "available": 81,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/cb7372d0-73a8-4551-bc31-22035d9551c4_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/cb7372d0-73a8-4551-bc31-22035d9551c4_thumbnail.jpg",
                    "short_description": "",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 15,
                    "name": "Capricciosa Pizza",
                    "description": "tomato sauce, mozzarella sabelli, ham, fresh mushrooms, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/0102bebe-b6c4-46b0-9195-ee06bca71a37",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 33,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": 12,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/0102bebe-b6c4-46b0-9195-ee06bca71a37_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/0102bebe-b6c4-46b0-9195-ee06bca71a37_thumbnail.jpg",
                    "short_description": "tomato sauce, mozzarella sabelli, ham,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 16,
                    "name": "Quattro Formaggi Pizza",
                    "description": "cream (animal), mozzarella Sabelli, blue cheese, emmental, parmesan, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/0054144d-131c-4807-a209-cee855415182",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 81,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/0054144d-131c-4807-a209-cee855415182_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/0054144d-131c-4807-a209-cee855415182_thumbnail.jpg",
                    "short_description": "cream (animal), mozzarella Sabelli,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 17,
                    "name": "Marco Polo Pizza",
                    "description": "tomato sauce, Sabelli mozzarella, chicken fillet, smoked cheese, corn, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/f77218a9-676e-434e-ac5b-4ae3dc5795b3",
                    "price": 14.99,
                    "category_id": 2,
                    "created_at": "2020-10-18 08:05:03",
                    "updated_at": "2020-10-18 08:05:03",
                    "available": 36,
                    "has_variants": 1,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/f77218a9-676e-434e-ac5b-4ae3dc5795b3_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/f77218a9-676e-434e-ac5b-4ae3dc5795b3_thumbnail.jpg",
                    "short_description": "tomato sauce, Sabelli mozzarella,...",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 871,
                    "name": "newyork pizza",
                    "description": "new style pizza",
                    "image": "8cfb9adb-03df-4b2f-929a-1f8882b59feb",
                    "price": 10,
                    "category_id": 2,
                    "created_at": "2021-06-18 11:31:57",
                    "updated_at": "2021-06-18 11:31:57",
                    "available": 88,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "10",
                    "logom": yoloUrl + "/uploads/restorants/8cfb9adb-03df-4b2f-929a-1f8882b59feb_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/8cfb9adb-03df-4b2f-929a-1f8882b59feb_thumbnail.jpg",
                    "short_description": "new style pizza",
                    "category_name": "Pizza"
                },
                {
                    "barcode": 1,
                    "name": "Caprese Salad (350gr)",
                    "description": "peeled tomatoes, mozzarella salad, Genovese pesto",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/bd5292e7-e898-479d-8921-4c47a776ba82",
                    "price": 2,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2022-07-19 07:00:47",
                    "available": 37,
                    "has_variants": 0,
                    "vat": 15,
                    "speciality_id": 0,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "20",
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/bd5292e7-e898-479d-8921-4c47a776ba82_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/bd5292e7-e898-479d-8921-4c47a776ba82_thumbnail.jpg",
                    "short_description": "peeled tomatoes, mozzarella salad,...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 2,
                    "name": "Caesar Salad (400g)",
                    "description": "iceberg, bacon, chicken breast, parmesan, Caesar sauce",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/25ed56dc-45cc-473f-ad00-d4b449acc71a",
                    "price": 20,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2021-06-23 06:28:19",
                    "available": 51,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": 0,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "15",
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/25ed56dc-45cc-473f-ad00-d4b449acc71a_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/25ed56dc-45cc-473f-ad00-d4b449acc71a_thumbnail.jpg",
                    "short_description": "iceberg, bacon, chicken breast,...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 3,
                    "name": "Salad Napoli (350g)",
                    "description": "iceberg, arugula, cherry tomatoes, mozzarella salad, salad dressing: (Extra Virgin olive oil, Modena balsamic vinegar, honey and mustard)",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/93641a19-dba6-4010-a852-0e88da83a01f",
                    "price": 9.99,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2020-10-18 08:05:01",
                    "available": 55,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/93641a19-dba6-4010-a852-0e88da83a01f_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/93641a19-dba6-4010-a852-0e88da83a01f_thumbnail.jpg",
                    "short_description": "iceberg, arugula, cherry tomatoes,...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 4,
                    "name": "Green tuna salad (400g)",
                    "description": "lettuce, cucumbers, tuna, olive, corn, lemon, salad dressing: (Extra Virgin olive oil, Modena balsamic vinegar, honey and mustard)",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/d3379607-df34-4ed0-8f87-8bb6f73ed16d",
                    "price": 9.99,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2022-10-28 13:36:50",
                    "available": 53,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": 0,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "52",
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/d3379607-df34-4ed0-8f87-8bb6f73ed16d_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/d3379607-df34-4ed0-8f87-8bb6f73ed16d_thumbnail.jpg",
                    "short_description": "lettuce, cucumbers, tuna, olive, corn,...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 5,
                    "name": "Green salad (350g)",
                    "description": "lettuce, cucumbers, radishes, onions, egg, salad dressing: (Extra Virgin olive oil, Modena balsamic vinegar, honey and mustard)",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/2e7eb9a6-5307-4ec7-8cf8-86490d4c2363",
                    "price": 7.99,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2020-10-18 08:05:01",
                    "available": 20,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/2e7eb9a6-5307-4ec7-8cf8-86490d4c2363_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/2e7eb9a6-5307-4ec7-8cf8-86490d4c2363_thumbnail.jpg",
                    "short_description": "lettuce, cucumbers, radishes, onions,...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 6,
                    "name": "Greek Salad (500g)",
                    "description": "tomatoes, cucumbers, green pepper, red onion, olive, feta cheese, extra virgin olive oil",
                    "image": "https://foodtiger.mobidonia.com/uploads/restorants/f5a8b88d-9b94-44fc-9555-2f0fe043d624",
                    "price": 9.99,
                    "category_id": 1,
                    "created_at": "2020-10-18 08:05:01",
                    "updated_at": "2020-10-18 08:05:01",
                    "available": 10,
                    "has_variants": 0,
                    "vat": 21,
                    "speciality_id": null,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": null,
                    "logom": "https://foodtiger.mobidonia.com/uploads/restorants/f5a8b88d-9b94-44fc-9555-2f0fe043d624_large.jpg",
                    "icon": "https://foodtiger.mobidonia.com/uploads/restorants/f5a8b88d-9b94-44fc-9555-2f0fe043d624_thumbnail.jpg",
                    "short_description": "tomatoes, cucumbers, green pepper, red...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 870,
                    "name": "chese lasania salad",
                    "description": "specially for diet prepares low calory cheese with a green combo",
                    "image": "fb801b9c-6746-414d-80bb-ba5f7354d207",
                    "price": 23,
                    "category_id": 1,
                    "created_at": "2021-06-18 11:28:11",
                    "updated_at": "2021-06-18 11:28:11",
                    "available": 16,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 10,
                    "days": "Saturday,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "5",
                    "logom": yoloUrl + "/uploads/restorants/fb801b9c-6746-414d-80bb-ba5f7354d207_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/fb801b9c-6746-414d-80bb-ba5f7354d207_thumbnail.jpg",
                    "short_description": "specially for diet prepares low calory...",
                    "category_name": "Salads"
                },
                {
                    "barcode": 975,
                    "name": "Roast Chicken",
                    "description": "made with fresh and Halal chicken with Quality rice spices.",
                    "image": "a2b16cd0-01d4-4c55-8668-cc4213ae1f39",
                    "price": 200,
                    "category_id": 1,
                    "created_at": "2022-05-20 10:56:48",
                    "updated_at": "2022-05-20 10:56:48",
                    "available": 33,
                    "has_variants": 0,
                    "vat": null,
                    "speciality_id": 16,
                    "days": "Monday,Tuesday,Wednesday,Thursday,Friday",
                    "approx_time": "30",
                    "logom": yoloUrl + "/uploads/restorants/a2b16cd0-01d4-4c55-8668-cc4213ae1f39_large.jpg",
                    "icon": yoloUrl + "/uploads/restorants/a2b16cd0-01d4-4c55-8668-cc4213ae1f39_thumbnail.jpg",
                    "short_description": "made with fresh and Halal chicken with...",
                    "category_name": "Salads"
                }
            ],
            searchedData: []
        };

        this.loadCart = this.loadCart.bind(this);
        // this.handleOnChangeBarcode = this.handleOnChangeBarcode.bind(this);
        this.handleOnChangeName = this.handleOnChangeName.bind(this);
        this.handleScanBarcode = this.handleScanBarcode.bind(this);
        this.handleChangeQty = this.handleChangeQty.bind(this);
        this.handleEmptyCart = this.handleEmptyCart.bind(this);

        this.loadProducts = this.loadProducts.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.setCustomerId = this.setCustomerId.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.printBill = this.printBill.bind(this);
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
    searchProduct = async (recBarcode) => {
        let filteredArray = []
        let actualData = this.state.newData
        for (let i = 0; i < actualData.length; i++) {
            if (actualData[i].barcode === Number(recBarcode)) {
                filteredArray.push(actualData[i])
                await this.addProductToCart(actualData[i])
                return
            }
        }
    }

    deleteItemFromCart = async (recBarcode) => {
        console.log('Del ID ? ', recBarcode)
        let actualData = this.state.cart
        console.log('actualData of Cart > ', actualData)
        for (let i = 0; i < actualData.length; i++) {
            if (actualData[i].barcode === Number(recBarcode)) {
                let index = actualData.indexOf(actualData[i])
                actualData.splice(index, 1)
                console.log('updated Cart > ', actualData)
            }
        }
        await this.setState({ cart: actualData })
        console.log('updated Cart > ', actualData)
    }

    // addToCartByScanBarcode = (recBarcode) => {
    //     let filteredArray = []
    //     let actualData = this.state.newData
    //     for (let i = 0; i < actualData.length; i++) {
    //         if (actualData[i].barcode === Number(recBarcode)) {
    //             filteredArray.push(actualData[i])
    //             this.setState({ searchedData: filteredArray })
    //             return
    //         }
    //         else if (actualData[i].barcode != Number(recBarcode)) {
    //             this.setState({ searchedData: [] })

    //         }
    //     }
    // }

    loadProducts = (id) => {
        this.searchProduct(id)
    }


    // handleOnChangeBarcode(event) {
    //     const barcode = event.target.value;
    //     // const barcode = event.target.value;
    //     // console.log('>>>', name);
    //     this.setState({ barcode });
    //     this.addToCartByScanBarcode(barcode);
    //     // this.setState({ name });
    //     // this.addToCartByScan(name)

    // }

    //new
    handleOnChangeName(event) {
        // const barcode = event.target.value;
        const name = event.target.value;
        console.log('>>>', name);
        // this.setState({ barcode });
        // this.addToCartByScan(barcode);
        this.setState({ name });
        this.addToCartByScan(name)

    }
    addToCartByScan = (recName) => {
        let filteredArray = []
        let actualData = this.state.newData
        for (let i = 0; i < actualData.length; i++) {
            if (actualData[i].name.toUpperCase() === String(recName.toUpperCase())) {
                filteredArray.push(actualData[i])
                this.setState({ searchedData: filteredArray })
                return
            }
            else if (actualData[i].name != String(recName.toUpperCase())) {
                this.setState({ searchedData: [] })

            }
        }
    }

    //

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
            if (c.barcode === product_id) {
                const maxQty = this.getMaxAvailableQuantity(product_id);

                if (!qty) {
                    c.pivot.quantity = 0;
                } else {
                    const newQty = parseInt(qty, 10);

                    if (isNaN(newQty)) {
                        // Display an error message to the user
                        Swal.fire('Please enter a valid quantity');
                        return c;
                    }

                    if (newQty > maxQty) {
                        // Display an error message to the user
                        Swal.fire("Error!", `Only ${maxQty} units of this product are available`, "error");
                        // alert(`Only ${maxQty} units of this product are available`);
                        c.pivot.quantity = maxQty;
                    } else {
                        c.pivot.quantity = newQty;
                    }
                }
            }

            return c;
        });

        this.setState({ cart });
    }



    getMaxAvailableQuantity(product_id) {
        const product = this.state.newData.find(p => p.barcode === product_id);
        return product ? product.available : 0;
    };

    //     axios
    //         .post("/admin/cart/change-qty", { product_id, quantity: qty })
    //         .then((res) => { })
    //         .catch((err) => {
    //             Swal.fire("Error!", err.response.data.message, "error");
    //         });
    // }

    getTotal(cart) {
        const total = cart.map((c) => c.pivot.quantity * c.price);
        return sum(total).toFixed(2);
    }



    handleClickDelete(product_id) {
        let json = product_id
        // this.state.cart.splice(0, 1); // 2nd parameter means remove one item only
        console.log('Cartttttttt > ', product_id)
        this.deleteItemFromCart(product_id)
        return
        const index = this.state.cart.indexOf(find(id => {
            return id === json
        }));
        console.log('Indexxx > ', index)
        if (index > -1) { // only splice array when item is found
            this.state.cart.splice(index, 1); // 2nd parameter means remove one item only
        }
        return
        //old CODE
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
    handleSearchButton(event) {
        this.loadProducts(this.state.search);
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

    // addProductToCartManually(newproduct, input) {
    //     console.log('Input > ', input, '|   Product >', newproduct)
    //     if (input > newproduct.available) {
    //         let err = new Error('Input exceeds available quantity');
    //         console.log('Error > ', input > newproduct.available)
    //         if (err) {
    //             Swal.fire("Error!", err.response.data.message, "error");
    //         }
    //     }
    // }



    // let newproduct = this.state.newData.find((p) => p.barcode === data.barcode);
    // if (!!newproduct) {
    //     console.log('name > ', newproduct.name)
    //     // if product is already in cart
    //     let cart = this.state.cart.find((c) => c.barcode === data.barcode);
    //     console.log('Cart  ', this.state.cart)
    //     if (!!cart) {
    //         // update quantity
    //         console.log('update qty ')
    //         this.setState({
    //             cart: this.state.cart.map((c) => {
    //                 if (c.barcode === data.barcode && data.available > c.pivot.quantity) {
    //                     c.pivot.quantity = c.pivot.quantity + 1;
    //                 } if (c.barcode === data.barcode && data.available === c.pivot.quantity) {
    //                     Swal.fire("Error!", "Stock Limit Exceeded", "error");
    //                 }
    //                 return c;
    //             }),
    //         });
    //     } else {
    //         console.log('add new item ')
    //         if (product.available > 0) {
    //             product = {
    //                 ...product,
    //                 pivot: {
    //                     quantity: 1,
    //                     product_id: data.barcode,
    //                     user_id: 1,
    //                 },
    //             };

    //             this.setState({ cart: [...this.state.cart, product] });
    //         }
    //     }
    //     console.log('cart {{>}} ', this.state.cart)
    // axios
    //     .post("/admin/cart", { barcode })
    //     .then((res) => {
    //         this.loadCart();
    //         console.log('Axios Response on adding cart > ', res);
    //     })
    //     .catch((err) => {
    //         Swal.fire("Error!", err.response.data.message, "error");
    //     });



    addProductToCart(data) {
        let product = this.state.newData.find((p) => p.barcode === data.barcode);
        if (!!product) {
            // console.log('name > ', product.name)
            // if product is already in cart
            let cart = this.state.cart.find((c) => c.barcode === data.barcode);
            console.log('Cart  ', this.state.cart)
            if (!!cart) {
                // update quantity
                // console.log('update qty ')
                this.setState({
                    cart: this.state.cart.map((c) => {
                        if (c.barcode === data.barcode && data.available > c.pivot.quantity) {
                            c.pivot.quantity = c.pivot.quantity + 1;
                        } else if (c.barcode === data.barcode && data.available === c.pivot.quantity) {
                            Swal.fire("Error!", "Stock Limit Exceeded", "error");
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
    // print() {
    //     var objFra = document.getElementById('myFrame');
    //     objFra.contentWindow.focus();
    //     objFra.contentWindow.print();
    // }

    print() {
        window.print();
    }
    printBill() {

        var date = new Date();
        var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds()
        // Check whether AM or PM
        var newformat = hours >= 12 ? 'PM' : 'AM';

        // Find current hour in AM-PM Format
        hours = hours % 12;

        // To display "0" as "12"
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var current_time = hours + ":" + minutes + ":" + seconds + "&nbsp" + newformat;

        function printForm() {
            printJS({
                printable: 'slip',
                type: 'html',
                targetStyles: ['*'],
                header: 'PrintJS - Print Form With Customized Header'
            })
        }

        Swal.fire({

            // input: "text",
            width: '560px',

            // inputValue: this.getTotal(this.state.cart).replace(/"/g, ""),
            // showCancelButton: true,
            confirmButtonText: "Close",
            html: `
            <button type="button" onClick = ${this.print})} style="margin-right:-80%; background-color:blue; border-radius:3%; color:white; width: 17%;padding:2px;">Print</button>
            <div id="slip1">
            
            <div style=" margin-top: -1px;">

            <h2><b>YOLO FOODS</b></h2>  
 
            <h2><b>#YL-4432</b></h2>
            <h6>Gulshan-e-Iqbal. block 13</h6>
            <h6>0300-1234567</h6></div>
            <div style="display:inline">
            <h6 style="margin-right:85%;"><b>Date/Time</b></h6>
            <h6 style="margin-right:65%; width: max-content;;">${current_date}&nbsp${current_time}</h6><br/>
            </div>
            <div style="margin-top: 30px;">
            <h2><b>Order No. 03</b></h2>
            </div>
            <table style="
            border-spacing: 30px;
                font-family: arial, sans-serif;
                
               
                width: 100%;
              ">
                <tr style="
                  border: 1px solid #dddddd;
                  text-align: left;
                  padding: 4px;
                  
                  font-size: 14px;
                ">
                <th>Quantity</th>
                  <th>Item Name</th>
                  <th style="width:max-content">&nbspPrice</th>
                  <th>&nbspSub Total</th>
                </tr>
                ${this.state.cart.map((item) => (
                `<tr style=" text-align: left; font-size:14px;">
                <td >${item.pivot.quantity}.0</td>
                    <td>${item.name.toUpperCase()}</td>

                    <td class="a" style="width:max-content">&nbsp${item.price}.00</td>
                    <td class="b" style:"margin-left:2%">&nbsp${item.pivot.quantity * item.price}.00</td>
                  </tr>`
            ))}
               
                <tr style=font-size: 13px; text-align: left;">
                  <td style="position:absolute"><b>Grand Total</b></td>
                  <td></td>
                  <td></td>
                  <td><b>Rs. ${this.getTotal(this.state.cart)}.00</b></td>
                </tr>
              </table>
              <br/><br/>
              <h3><b>Thanks for using our service</b></h3>
              
              </div>
            `,




        }
        )


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
                        // total: this.getTotal(this.state.cart),
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
    filteredArrays() {
        let filteredArrays = []
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === 778) {
                filteredArrays.push(newData[i])
            }
        };

    };
    render() {
        const { cart, products, customers, barcode, newData, name } = this.state;
        return (
            <div>
                {this.state.isPayment === false ?
                    (<div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="row mb-2">
                                <div className="col">
                                    <form onSubmit={this.handleScanBarcode}>

                                        <input
                                            size="30"
                                            type="text"
                                            className="form-control"
                                            placeholder="Scan Barcode"
                                            onChange={this.handleChangeSearch}
                                            onKeyDown={this.handleSearch}
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
                                                <tr key={c.barcode} className="rite">
                                                    <td>{c.name.toUpperCase()}</td>
                                                    <td className="text-right1">
                                                        {window.APP.currency_symbol}{" "}
                                                        {(
                                                            c.price * c.pivot.quantity
                                                        ).toFixed(2)}
                                                    </td>
                                                    <td>
                                                        {/* {c.pivot.quantity} */}
                                                        <input type="text"
                                                            id="text"
                                                            className="form-control form-control-sm qty pricer"
                                                            value={c.pivot.quantity}
                                                            max={3}

                                                            onChange={
                                                                (event) => {
                                                                    // this.addProductToCartManually(c, event.target.value)

                                                                    this.handleChangeQty(c.barcode, event.target.value);
                                                                }
                                                            }


                                                        />
                                                        <button
                                                            style={{ marginLeft: 100 }}
                                                            className="btn btn-danger btn-sm del"
                                                            onClick={() =>
                                                                this.handleClickDelete(c.barcode)
                                                                // this.handleClickDelete(c.indexof(c))
                                                            }>

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
                                        // onClick={() => {
                                        //     this.setState({ isPayment: true },
                                        //         () => {
                                        //             let total = 0
                                        //             for (let i = 0; i < this.state.cart.length; i++) {
                                        //                 total = total + this.state.cart[i].price * this.state.cart[i].pivot.quantity
                                        //             }
                                        //             this.setState({ grandTotal: total });
                                        //         })
                                        // }}
                                        onClick={this.printBill}
                                    // disabled={!cart.length}
                                    >
                                        Print Bill
                                    </button>
                                </div>
                                {/* </div> */}
                            </div>
                        </div >
                        <div className="col-md-6 col-lg-5">
                            <div className="mb-2 search11">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Product Name"
                                    value={name.toUpperCase()}
                                    onChange={this.handleOnChangeName}
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
                                {
                                    this.state.searchedData.length > 0 ? (
                                        this.state.searchedData.slice(0, 16).map((d) => (
                                            <div
                                                style={{}}
                                                onClick={() => { this.addProductToCart(d) }}
                                                key={d.barcode}
                                                className="item"
                                            >
                                                <img src={d.logom} alt="no image"></img>
                                                <p style={{ fontSize: 15, textAlign: 'center' }}>
                                                    <b> {d.name.toUpperCase().substring(0, 7)}</b>
                                                    <p style={{ fontSize: 12, textAlign: 'center' }}>Total Qty : {d.available}</p>
                                                    <p style={{ fontSize: 12, marginTop: -15, textAlign: 'center' }}>Price : Rs.{d.price}</p>
                                                </p>
                                            </div>
                                        ))) : (
                                        this.state.newData.slice(0, 16).map((d) => (
                                            <div
                                                style={{}}
                                                onClick={() => { this.addProductToCart(d) }}
                                                key={d.barcode}
                                                className="item"
                                            >
                                                <img src={d.logom} alt="no image" />
                                                <p style={{ fontSize: 13, textAlign: 'center' }}>
                                                    <b> {d.name.toUpperCase().substring(0, 32)}</b>
                                                    <p style={{ fontSize: 12, textAlign: 'center' }}>Total Qty : {d.available}</p>
                                                    <p style={{ fontSize: 12, marginTop: -15, textAlign: 'center' }}>Price : Rs.{d.price}</p>
                                                </p>
                                            </div>
                                        )))
                                }
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
                                    <td>{item.name.toUpperCase()}</td>
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
                                <td><b>Rs. {this.state.grandTotal.toFixed(2)}.00</b></td>
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

//1203
//1334