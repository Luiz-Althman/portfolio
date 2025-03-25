import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function GET() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: '2025-02-24.acacia', // Sempre use a versão mais recente do Stripe
    });
    try {
        const products = await stripe.products.list();

        const projects = await Promise.all(
            products.data.map(async (product) => {
                const prices = await stripe.prices.list({
                    product: product.id,
                });

                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    image: product.images[0],
                    flags: product.metadata.flags || [],
                    alt: product.metadata.alt || '',
                    url: product.metadata.url || '#', // Busca a URL nos metadata
                    price: prices.data[0]?.unit_amount || 0,
                };
            })
        );

        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json(
            { error: 'Erro ao buscar projetos' },
            { status: 500 }
        );
    }
}
