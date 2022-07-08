import Extract from "@/components/Extract/Index";
import LastTransactions from "@/components/LastTransactions/Index";
import LimitBar from "@/components/LimitBar";

function App() {
  return (
    <>
    
    <Extract/>
    <LastTransactions
    page="first"
    transactionsDisplayed={3}
    />
    </>
    );

}

export default App;
