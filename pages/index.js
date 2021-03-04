import Head from "next/head";
import NavCat from "../components/NavCategory";
import ProductHomeList from "../components/ProductHomePageList";
import HomeHeader from "../components/HomeHeader";
import HomeCategory from "../components/HomeCategory";
import ProductBrand from "../components/ProductBrand";

export default function Home({ products, categoriesLists, productBrandLists, categoryFilter }) {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>

      <NavCat categoryFilter={categoryFilter} />

      <HomeHeader />

      <ProductHomeList products={products} />

      <HomeCategory categoriesLists={categoriesLists} />

      <ProductBrand productBrandLists={productBrandLists} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://digitalcrm.com/crm/api/get/products/latest/featured/0/5`
  );
  const res1 = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/15`
  );
  const resCatFilter = await fetch(
    `https://digitalcrm.com/crm/api/get/products/category/list/0/6`
  );
  const resBrand = await fetch(
    `https://digitalcrm.com/crm/api/get/product/brands/list`
  );
  const products = await res.json();
  const categoriesLists = await res1.json();
  const categoryFilter = await resCatFilter.json();
  const productBrandLists = await resBrand.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  if (!categoriesLists) {
    return {
      notFound: true,
    };
  }

  if (!productBrandLists) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
      categoriesLists,
      categoryFilter,
      productBrandLists,
    },
  };
}
