import React from "react";

import DataTable from "./data-table/data-table";

export type EventInfoType = {
  id: string;
  name: string;
  createdAt: Date;
  userId: string;
  updatedAt: Date;
  categoryId: string;
  deliveryStatus: "PENDING" | "DELIVERED" | "FAILED";
  fields: unknown;
};

const EventDataTable = ({ tableData }: { tableData: EventInfoType[] }) => {
  return (
    <div className="flex flex-col gap-4 pb-20">
      <div>
        <span className="text-4xl font-semibold">Event Overview</span>
      </div>

      <div className=" bg-white border border-gray-300 rounded-lg ">
        <DataTable tableData={tableData} />
      </div>
    </div>
  );
};

export default EventDataTable;
