Schemas = {};

SimpleSchema.extendOptions({
  tabularFilterOmit: Match.Optional(Boolean)
});


companySchema = new SimpleSchema({
  company: {
    label: "Company",
    type: String,
    optional: true
  },
  jobTitle: {
    label: "Job Title",
    type: String,
    optional: true
  },
  years: {
    label: "Years",
    type: Number,
    optional: true
  }
});

Schemas.Table = new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 200
    },
    priority: {
        type: String,
        label: "Priority",
        allowedValues: ["low", "medium", "high"]
    },
    deadline: {
        type: Date,
        label: "Deadline"
    },
    repetitions: {
        type: Number,
        label: "Repetitions",
        optional: true
    },
    state: {
        type: Boolean,
        label: "State",
        allowedValues: [true, false]
    },
    companies: {
        label: "Company",
        type: [ companySchema ],
        optional: true,
        tabularFilterOmit: true
      }
    /*,
    object: {
        type: Object,
        label: "Object"
    }*/
});