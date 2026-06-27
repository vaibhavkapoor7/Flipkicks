export async function fetchProducts() {

  try {

    const mensResponse =
      await fetch(
        "https://dummyjson.com/products/category/mens-shoes"
      );

    const womensResponse =
      await fetch(
        "https://dummyjson.com/products/category/womens-shoes"
      );

    const mensData =
      await mensResponse.json();

    const womensData =
      await womensResponse.json();

    const allProducts = [

      ...mensData.products,

      ...womensData.products,

    ];

    return allProducts;

  } catch(error) {

    console.log(error);

    return [];
  }
}