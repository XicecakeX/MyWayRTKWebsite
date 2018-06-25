module.exports = {
  /**Main Data Array*/
  subscriptionData: [
    {
      startDate: {value: "", border: ""},
      subscriptionTerm: {value: "NONE", border: ""},
      subscriptionName: {value: "", border: ""},
      customerData: {value: "", border: ""},
      mountPoints: {value: "NONE", border: ""},
      notes: ""
    },
    {
      subscriptionItem: {value: "NONE", border: ""},
      paymentType: {value: "NONE", border: ""},
      PONumber: ""
    }
  ],
  /**Subscription Details Data*/
  subscriptionDetails: {
    dataID: "subscriptionDetails",
    startDate: {value: "", border: ""},
    subscriptionTerm: {value: "NONE", border: ""},
    subscriptionName: {value: "", border: ""},
    customerData: {value: "", border: ""},
    mountPoints: {value: "NONE", border: ""},
    notes: ""
  },
  /**Payment Information Data*/
  paymentInformation: {
    dataID: "paymentInformation",
    subscriptionItem: {value: "NONE", border: ""},
    paymentType: {value: "NONE", border: ""},
    PONumber: ""
  }
}
