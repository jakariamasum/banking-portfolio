import { useState } from "react";
import { transactionsContent } from "../constant";
import Hero from "../components/hero";
import Button from "../components/ui/button";
import { FaChartBar } from "react-icons/fa";

const Transactions = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("30days");

  const filteredTransactions = transactionsContent.transactions.filter(
    (transaction) => {
      if (selectedFilter === "all") return true;
      return transaction.type === selectedFilter;
    }
  );

  return (
    <div className="min-h-screen">
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Hero
              title="Transaction"
              about="Track your spending and income over time."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {transactionsContent.filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-purple-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {transactionsContent.periods.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.label}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Recent Transactions
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {transaction.description}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span>{transaction.category}</span>
                          <span>•</span>
                          <span>{transaction.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-lg font-bold ${
                          transaction.amount > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {transaction.amount > 0 ? "+" : ""}$
                        {Math.abs(transaction.amount).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="w-fit px-2 text-center">
              Load More Transactions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Export Your Data</h2>
                <p className="text-purple-100 mb-6">
                  Download your transaction history for tax purposes, budgeting,
                  or personal record keeping.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button outline="primary">Export as CSV</Button>
                  <Button outline="danger">Export as PDF</Button>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">
                  <FaChartBar className="text-purple-100 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Financial Insights
                </h3>
                <p className="text-purple-100">
                  Get detailed analytics and spending patterns to make better
                  financial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transactions;
