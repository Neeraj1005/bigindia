import { useRouter } from "next/router";

const Product = ({ product }) => {
  return (
    <>
      <div>
        <h2>ID: {product.product.pro_id}</h2>
        <h2>Name: {product.user.id}</h2>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://digitalcrm.com/crm/api/get/products/list`);
  const listProduct = await res.json();
  const ids = listProduct.map((prod) => prod.pro_id)
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
    }, 
  };
}


export default Product;
