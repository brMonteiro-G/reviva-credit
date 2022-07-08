import LastTransactions from '@/components/LastTransactions/Index'


export default function Extract(){
    return (//Aqui serão exibidos 8 transações na tela, porém será habilitada a rolagem. 
        <LastTransactions
        transactionsDisplayed={8}
        page={'second'}
        />
    )
}