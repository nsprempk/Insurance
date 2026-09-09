import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    age: {
      type: Number,
      min: 18,
      max: 100,
    },

    gender: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    insuranceType: {
      type: String,
      trim: true,
    },

    coverageFor: {
      type: String,
      trim: true,
    },

    familyMembers: {
      type: String,
      trim: true,
    },

    existingInsurance: {
      type: String,
      trim: true,
    },

    coverageAmount: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    preferredContact: {
      type: String,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    source: {
      type: String,
      default: "website",
    },

    status: {
      type: String,
      enum: ["new", "contacted", "in-progress", "completed", "closed"],
      default: "new",
    },

    notes: {
      type: String,
      default: "",
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Lead", leadSchema);
