export async function getProduct(){
    const response = await fetch('/db/products.json');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
}

export async function getImage(){
    const response = await fetch('/db/images.json');
    if(!response.ok) throw new Error ('Failed to fetch images');
    return response.json();
}