import { NextResponse } from 'next/server'
import { NextApiResponse } from 'next';
interface Empresa {
    id: number;
    nome: string;
    telefone: string;
    estado: string;
    email: string;
}

export async function GET(response: NextApiResponse<Empresa>) {
    const res = await fetch('http://127.0.0.1:8089/public/empresasCmam', { cache: 'no-store' })
    try {
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();

    return new NextResponse(
        JSON.stringify(data),
        { status: 200, headers: { 'content-type': 'application/json' } },);
      
} catch (error) {
    console.error('Error fetching data:', error);
    response.status(500);
}
}

export const revalidate = 10;