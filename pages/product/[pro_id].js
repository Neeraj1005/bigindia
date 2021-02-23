import { useRouter } from "next/router";

const Product = ({ product }) => {
  return <>
  <h2>
    productId {product.pro_id}
  </h2>
  <h2>
    Title {product.name}
  </h2>
  </>;
};

export async function getStaticPaths() {
  // Fetch data from external API
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();

  const ids = listProduct.map((product) => product.pro_id)
  const paths = ids.map((id) => ({params: {pro_id: id.toString()}}))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/product/details?id=${params.pro_id}`);
  const product = await res.json();

  return { 
    props: { 
      product 
    } 
  };
}


export default Product;
