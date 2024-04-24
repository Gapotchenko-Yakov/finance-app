import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    buyer: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transsaction", TransactionSchema);

export default Transaction;
