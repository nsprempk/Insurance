import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const {
      fullName,
      age,
      gender,
      city,
      state,
      insuranceType,
      coverageFor,
      familyMembers,
      existingInsurance,
      coverageAmount,
      phone,
      email,
      preferredContact,
      message,
    } = req.body;

    if (!fullName || !phone || !email) {
      return res.status(400).json({
        success: false,
        message: "Name, phone number and email are required.",
      });
    }

    const lead = await Lead.create({
      fullName,
      age,
      gender,
      city,
      state,
      insuranceType,
      coverageFor,
      familyMembers,
      existingInsurance,
      coverageAmount,
      phone,
      email,
      preferredContact,
      message,
      source: "website",
    });

    res.status(201).json({
      success: true,
      message: "Your request has been submitted successfully.",
      leadId: lead._id,
    });
  } catch (error) {
    console.error("Create lead error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit your request.",
    });
  }
};

export const getLeads = async (req, res) => {
  try {
    const { search = "", status = "", page = 1, limit = 20 } = req.query;

    const query = {};

    if (status) {
      query.status = status;
    }

    if (search.trim()) {
      query.$or = [
        {
          fullName: {
            $regex: search.trim(),
            $options: "i",
          },
        },
        {
          email: {
            $regex: search.trim(),
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search.trim(),
            $options: "i",
          },
        },
        {
          insuranceType: {
            $regex: search.trim(),
            $options: "i",
          },
        },
      ];
    }

    const currentPage = Math.max(Number(page), 1);
    const pageLimit = Math.min(Math.max(Number(limit), 1), 100);

    const skip = (currentPage - 1) * pageLimit;

    const [leads, total] = await Promise.all([
      Lead.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(pageLimit)
        .lean(),

      Lead.countDocuments(query),
    ]);

    res.json({
      success: true,
      leads,
      pagination: {
        page: currentPage,
        limit: pageLimit,
        total,
        totalPages: Math.ceil(total / pageLimit),
      },
    });
  } catch (error) {
    console.error("Get leads error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve leads.",
    });
  }
};

export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found.",
      });
    }

    res.json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error("Get lead error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve lead.",
    });
  }
};

export const updateLead = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const update = {};

    if (status !== undefined) {
      update.status = status;
    }

    if (notes !== undefined) {
      update.notes = notes;
    }

    const lead = await Lead.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found.",
      });
    }

    res.json({
      success: true,
      message: "Lead updated successfully.",
      lead,
    });
  } catch (error) {
    console.error("Update lead error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update lead.",
    });
  }
};

export const getLeadStats = async (req, res) => {
  try {
    const [total, newLeads, contacted, inProgress, completed, closed] =
      await Promise.all([
        Lead.countDocuments(),
        Lead.countDocuments({ status: "new" }),
        Lead.countDocuments({ status: "contacted" }),
        Lead.countDocuments({ status: "in-progress" }),
        Lead.countDocuments({ status: "completed" }),
        Lead.countDocuments({ status: "closed" }),
      ]);

    res.json({
      success: true,
      stats: {
        total,
        new: newLeads,
        contacted,
        inProgress,
        completed,
        closed,
      },
    });
  } catch (error) {
    console.error("Lead stats error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to retrieve lead statistics.",
    });
  }
};
