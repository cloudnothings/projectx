"use client";

import { CardsStats } from "./_components/stats";
import { TopCategoriesTable } from "./_components/top-categories-table";
import { TransactionsReviewTable } from "./_components/transaction-review-table";

export default function Page(_props: { params: { workspaceId: string } }) {
  return (
    <div className="flex flex-col gap-4 p-4 pt-0">
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form></form>
      </div>

      <CardsStats />
      {/* <div className="ml-6 mt-6 flex gap-4"> */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        <TransactionsReviewTable />
        <TopCategoriesTable />
      </div>
    </div>
  );
}
