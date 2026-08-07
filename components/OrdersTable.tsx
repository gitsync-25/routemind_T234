"use client";

import React, { useState } from "react";
import { OrderDelivery } from "@/lib/types";
import { ChevronRight, Clock, ArrowUpDown, CheckCircle2, AlertTriangle, Truck } from "lucide-react";

interface OrdersTableProps {
  orders: OrderDelivery[];
  searchQuery: string;
}

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders, searchQuery }) => {
  const [selectedTab, setSelectedTab] = useState<string>("ALL");
  const [showAllModal, setShowAllModal] = useState<boolean>(false);

  // Filter orders by tab & search query
  const filteredOrders = orders.filter((order) => {
    const matchesTab =
      selectedTab === "ALL" || order.status === selectedTab;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      order.id.toLowerCase().includes(query) ||
      order.destination.toLowerCase().includes(query) ||
      order.driver.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query);

    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status: OrderDelivery["status"]) => {
    switch (status) {
      case "IN TRANSIT":
        return (
          <span className="inline-flex items-center gap-1.5 text-primary-fixed bg-primary-container/10 px-2.5 py-1 rounded text-[11px] font-mono border border-primary-container/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            IN TRANSIT
          </span>
        );
      case "LOADING":
        return (
          <span className="inline-flex items-center gap-1.5 text-secondary bg-secondary-container/10 px-2.5 py-1 rounded text-[11px] font-mono border border-secondary-container/20">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            LOADING
          </span>
        );
      case "DELAYED":
        return (
          <span className="inline-flex items-center gap-1.5 text-error bg-error-container/10 px-2.5 py-1 rounded text-[11px] font-mono border border-error-container/20">
            <span className="w-1.5 h-1.5 rounded-full bg-error" />
            DELAYED
          </span>
        );
      case "DELIVERED":
        return (
          <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded text-[11px] font-mono border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            DELIVERED
          </span>
        );
      default:
        return null;
    }
  };

  const filterTabs = ["ALL", "IN TRANSIT", "LOADING", "DELAYED"];

  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full border border-white/5 bg-surface-container-lowest">
      {/* Header */}
      <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-container-low">
        <div className="flex items-center gap-3">
          <span className="font-display text-base md:text-lg font-bold text-on-surface">
            Active Deliveries
          </span>
          <span className="text-xs font-mono text-text-muted bg-white/5 px-2 py-0.5 rounded">
            {filteredOrders.length} orders
          </span>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`
                px-2.5 py-1 rounded text-[11px] font-mono transition-all shrink-0
                ${
                  selectedTab === tab
                    ? "bg-primary-container/20 text-primary-fixed border border-primary-container/30 font-semibold"
                    : "text-text-muted hover:text-on-surface hover:bg-white/5"
                }
              `}
            >
              {tab}
            </button>
          ))}
          <button
            onClick={() => setShowAllModal(!showAllModal)}
            className="text-primary-fixed text-xs font-mono hover:underline ml-2 flex items-center gap-0.5 shrink-0"
          >
            <span>View All</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left font-sans text-xs md:text-sm border-collapse min-w-[550px]">
          <thead>
            <tr className="border-b border-white/10 text-text-muted font-mono text-[10px] bg-surface-container-lowest/50 uppercase tracking-wider">
              <th className="p-4 font-normal">ORDER ID</th>
              <th className="p-4 font-normal">DESTINATION</th>
              <th className="p-4 font-normal">DRIVER</th>
              <th className="p-4 font-normal">STATUS</th>
              <th className="p-4 font-normal text-right">ETA</th>
            </tr>
          </thead>
          <tbody className="text-on-surface-variant">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="table-row hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <td className="p-4 table-divider font-mono text-on-surface font-semibold group-hover:text-primary-container transition-colors">
                    {order.id}
                  </td>
                  <td className="p-4 table-divider text-on-surface">
                    {order.destination}
                  </td>
                  <td className="p-4 table-divider text-on-surface-variant">
                    {order.driver}
                  </td>
                  <td className="p-4 table-divider">
                    {getStatusBadge(order.status)}
                  </td>
                  <td className={`p-4 table-divider font-mono text-right ${order.status === "DELAYED" ? "text-error font-semibold" : "text-on-surface"}`}>
                    {order.eta}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-text-muted font-mono text-xs">
                  No deliveries match the selected filter query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
