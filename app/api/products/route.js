export async function GET() {
    try {

      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      
      const enhancedProducts = products.map(product => ({
        ...product,
        customizable: Math.random() > 0.5,
        idealFor: ['Men', 'Women', 'Kids'][Math.floor(Math.random() * 3)],
      }));
      
      return Response.json(enhancedProducts);
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }