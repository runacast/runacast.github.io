import PayPalButton from '@/components/PayPalButton'

export const metadata = {
    title: 'Donate',
    description: 'Donate to RimayManta'
}

export default function Donate() {
    
    return (<div className='container'>
        <div className='content'>
            Botón de prueba
            <PayPalButton />
        </div>
    </div>)
}