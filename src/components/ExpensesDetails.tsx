import { Expense } from "../types"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpensesDetails({expense} : ExpenseDetailProps) {
  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200">
        <div>

        </div>
        <div>
            <p>{expense.expenseName}</p>
        </div>
    </div>
  )
}
