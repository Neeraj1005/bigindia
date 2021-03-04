import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import { useFormik } from "formik";

const Product = ({ product }) => {
  const item = product.product;
  const currencyCode = product.user.currency.html_code;
  const slidePics = product.slidePics;
  const itemUnits = item.tbl_units ? item.tbl_units.sortname : "";

  // Modal popup
  const [showModal, setShowModal] = React.useState(false);
  // Alert message
  const [successMessage, setSuccessMessage] = React.useState(false);

  const validate = (values) => {
    const errors = {};
    // console.log(console.count(),formik)

    if (!values.mobile) {
      errors.mobile = "Required";
    } else if (values.mobile.length < 10) {
      errors.mobile = "Must be 10 digits";
    } else if (values.mobile.length > 10) {
      errors.mobile = "Not be greater then 10 digits";
    }

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 4) {
      errors.name = "Name Must be 4 character or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      quantity: 1,
      price: item.price,
      pro_id: item.pro_id,
      message: "",
      address: "",
      country: "",
      city: "",
    },
    validate,
    onSubmit: async (values, action) => {
      // console.log('allval',values);
      // console.log('action',action);
      await fetch(
        `https://digitalcrm.com/crm/api/action/product/buynow/${item.slug}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then(() => {
          console.log("Successfully Stored:", values.name);
          action.resetForm();
          action.setSubmitting(false);
          setShowModal(false);
          setSuccessMessage(true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });
  return (
    <>
      <Head>
        <title>{item.slug}</title>
        <meta property="og:title" content={item.name} />
      </Head>
      <div
        key={item.pro_id}
        className="bg-white flex-grow pb-4 px-4"
        id="main-content"
      >
        <nav className="container">
          <ol className="list-reset py-4 pl-4 rounded flex text-gray-400">
            <li className="px-2">
              <Link href="/" className="no-underline text-indigo">
                <a>Home</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link href="/product" className="no-underline text-indigo">
                <a>Products</a>
              </Link>
            </li>
            <li>/</li>
            <li className="px-2">
              <Link
                href={`/category/${
                  item.tbl_productcategory ? item.tbl_productcategory.slug : ""
                }`}
                className="no-underline text-indigo"
              >
                {/* <a>{categoryName}</a> */}
                <a>
                  {item.tbl_productcategory
                    ? item.tbl_productcategory.category
                    : ""}
                </a>
              </Link>
            </li>
            <li>/</li>
            {/* <li className="px-2">{subCategoryName}</li> */}
            <li className="px-2">
              {item.tbl_product_subcategory
                ? item.tbl_product_subcategory.category
                : ""}
            </li>
          </ol>
        </nav>

        {/* success popup */}
        {successMessage ? (
          <>
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-indigo-500">
              <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">Order is taken.</b> Thank you for
                contacting...!
              </span>
              <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => setSuccessMessage(false)}
              >
                <span>×</span>
              </button>
            </div>
          </>
        ) : null}

        <div className="mb-8 p-2 w-full flex flex-wrap">
          <div className="w-full lg:w-1/3">
            {slidePics.map((img) => (
              <img src={img} alt="" width="400" />
            ))}
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 pr-16">
            <p className="text-2xl font-extrabold">{item.name}</p>
            <a href="#" className="text-xl text-blue-500 my-3 block">
              {item.vendor ? item.vendor : ""}
            </a>
            <p className="text-red-600 font-bold text-xl my-2">
              <span dangerouslySetInnerHTML={{ __html: currencyCode }} />
              {item.price}
            </p>
            <p className="text-gray-600">
              <span className="mr-5">
                Size: {item.size ? item.size + itemUnits : null}
              </span>{" "}
              <span>Units: {item.tbl_units ? item.tbl_units.name : null}</span>
            </p>
            <div>
              <p className="text-xl mt-5 mb-2">Product Details</p>
              <p
                className="text-gray-500"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Link href={`/category/${item.tbl_productcategory.slug}`}>
                <a>
                  <p className="mt-4">
                    <span className="border border-gray-400 rounded-full py-1 px-3">
                      {item.tbl_productcategory.category}
                    </span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6">
            <button
              className="block w-full focus:outline-none border border-transparent py-4 px-4 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
              onClick={() => setShowModal(true)}
            >
              Contact Supplier
            </button>
          </div>
          {showModal ? (
            <div className="bg-gray-900 bg-opacity-70 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-2xl font-black block">
                      Contact supplier
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="material-icons text-gray-400">
                        highlight_off
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative p-6 flex-auto">
                      <div className="flex -mx-2">
                        <input
                          type="hidden"
                          name="pro_id"
                          value={item.pro_id}
                        />
                      </div>
                      <div className="flex -mx-2">
                        <div className="mb-5 w-1/3 px-2">
                          <label
                            htmlFor="name"
                            className="font-bold mb-1 text-gray-700 block"
                          >
                            Contact name
                          </label>
                          <input
                            type="text"
                            className={`border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium 
                            ${(formik.errors && formik.errors.name) ? 'required' : ''}
                            `}
                            placeholder=""
                            name="name"
                            onChange={formik.handleChange}
                            values={formik.values.name}
                            onBlur={formik.errors.handleBlur}
                          />
                          {formik.errors.name ? (
                            <span className="text-red-600 text-xs">
                              {formik.errors.name}
                            </span>
                          ) : null}
                        </div>
                        <div className="mb-5 w-1/3 px-2">
                          <label
                            htmlFor="email"
                            className="font-bold mb-1 text-gray-700 block"
                          >
                            Email ID
                          </label>
                          <input
                            type="email"
                            className="border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder=""
                            name="email"
                            onChange={formik.handleChange}
                            values={formik.values.name}
                          />
                        </div>

                        <div className="mb-5 w-1/3 px-2">
                          <label
                            htmlFor="mobile"
                            className="font-bold mb-1 text-gray-700 block"
                          >
                            Mobile {(formik.dirty) ? 'true' : 'false'}
                          </label>
                          <input
                            className={`border border-gray-300 w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium
                            ${(formik.errors && formik.errors.mobile) ? 'required' : ''}`}
                            placeholder=""
                            name="mobile"
                            onChange={formik.handleChange}
                            values={formik.values.mobile}
                            onBlur={formik.errors.handleBlur}
                          />
                          {formik.errors.mobile ? (
                            <span className="text-red-600 text-xs">
                              {formik.errors.mobile}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex -mx-2">
                        <div className="mb-5 w-1/2 px-2">
                          <label
                            htmlFor="address"
                            className="font-bold mb-1 text-gray-700 block"
                          >
                            Delivery address
                          </label>
                          <textarea
                            type="text"
                            className="border border-gray-300 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder=""
                            name="address"
                            onChange={formik.handleChange}
                            values={formik.values.address}
                          ></textarea>
                        </div>
                        <div className="mb-5 w-full px-2">
                          <label
                            htmlFor="message"
                            className="font-bold mb-1 text-gray-700 block"
                          >
                            Message
                          </label>
                          <textarea
                            type="text"
                            className="border border-gray-300 w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                            placeholder=""
                            name="message"
                            onChange={formik.handleChange}
                            values={formik.values.message}
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex -mx-2"></div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                      {/* <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {
                          setShowModal(false);
                        }}
                      >
                        Close
                      </button> */}
                      <button
                        className={`text-white ${
                          (!formik.isValid || formik.isSubmitting) ? 'bg-blue-200 active:bg-green-200' : 'bg-blue-500 active:bg-green-500'
                        } font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
                        type="submit"
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        {(formik.isSubmitting) ? 'Sending...' : 'send'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();
  const ids = listProduct.data.map((prod) => prod.slug);
  const paths = ids.map((id) => ({ params: { slug: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/product/details/${params.slug}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
