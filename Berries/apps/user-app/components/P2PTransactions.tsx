import { Card } from "@repo/ui/card"

export const P2PTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        // TODO: Can the type of `status` be more specific?
        fromUser: number,
        toUser: number
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recent Peer to Peer Transactions">
        <div className="pt-2">
        <div className="flex flex-row justify-between text-slate-800 font-bold pb-2">    
                <div className="flex flex-row justify-center text-sm ">
                    Day/Date
                </div>
                <div className="flex flex-row justify-center text-sm">
                    Amount INR
                </div>
            </div>    
            {transactions.map(t => <div className="flex justify-between text-slate-600 text-sm">
            
                <div className="flex flex-col justify-center text-slate-600 ">
                    {t.time.toDateString()}
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>        
            </div>)}
        </div>
    </Card>
}