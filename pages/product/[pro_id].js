import { useRouter } from "next/router";

const Product = ({ product }) => {
  return <>
  <h2>
    productId{product.pro_id}
  </h2>
  <h2>
    Title {product.name}
  </h2>
  </>;
};

export async function getStaticProps({params}) {
  console.log("hei nn")
  // Fetch data from external API
  const res = await fetch(`https://digitalcrm.com/crm/api/get/product/details?id=${params.pro_id}`);
  const product = await res.json();

  return { 
    props: { 
      product 
    } 
  };
}

export async function getStaticPaths() {
  // Fetch data from external API
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();

  // const ids = products.map((product) => product.pro_id)
  // const paths = ids.map((pro_id) => ({params: {id: pro_id.toString()}}))

  const paths = listProduct.map((prod) => ({
    params: { pro_id: prod.pro_id },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Product;
