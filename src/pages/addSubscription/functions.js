module.exports = {
  /**filterProps Function*/
  filterProps: (arr, count) => {
    //Declaring fields
    var filtered = {array: [], count: 0};

    //Iterating through array
    for(var i = 0; i < count; i++){
      //Checking prop name
      if(arr[i] !== "dataID" && arr[i] !== "notes" && arr[i] !== "PONumber"){
        //Adding to array
        filtered.array.push(arr[i]);

        //Increasing counter
        filtered.count++;
      }
    }

    //Returning filtered object
    return filtered;
  },
  /**countProps Function*/
  countProps: (obj) => {
    //Declaring fields
    var size = 0;

    //Iterating through object
    for(var property in obj){
      //Checking object property
      if(Object.prototype.hasOwnProperty.call(obj, property)){
        //Increasing size
        size++;
      }
    }

    //Returning size
    return size;
  },
  /**checkField Function*/
  checkField: (obj) => {
    //Declaring fields
    var dataObj = obj.dataObj;
    var data = obj.data;
    var target = obj.target;
    var count = obj.props.count;
    var names = obj.props.array;
    var val = obj.value;

    //Iterating through props
    for(var i = 0; i < count; i++){
      //Checking for target match
      if(names[i] === target){
        //Checking for select component
        if(target === "subscriptionTerm" || target === "mountPoints" || target === "subscriptionItem" || target === "paymentType"){
          //Setting data
          dataObj[target] = {value: val, border: "defaultSelectBorder"};
        }else if(target === "customerData"){
          //Setting data
          dataObj[target] = {value: val, border: "defaultButtonBorder"};
        }else{
          //Setting data
          dataObj[target] = {value: val, border: "defaultBorder"};
        }
      }else{
        //Setting data
        dataObj[names[i]] = {value: data[names[i]].value, border: data[names[i]].border};
      }
    }

    //Returning data
    return dataObj;
  },
  /**errorCheck Function*/
  errorCheck: (dataArr) => {
    //Declaring fields
    var arraySize = dataArr.length;
    var F = module.exports;
    var errorObj = {array: [], errorsDetected: false};

    //Iterating through array
    for(var i = 0; i < arraySize; i++){
      //Declaring fields
      var props = F.filterProps(Object.getOwnPropertyNames(dataArr[i]), F.countProps(dataArr[i]));

      //Iterating through props
      for(var j = 0; j < props.count; j++){
        //Checking for select component
        if(props.array[j] === "subscriptionTerm" || props.array[j] === "mountPoints" || props.array[j] === "subscriptionItem" || props.array[j] === "paymentType"){
          //Checking for empty fields
          if(dataArr[i][props.array[j]].value === "NONE"){
            //Setting boolean
            errorObj.errorsDetected = true;

            //Setting border style
            dataArr[i][props.array[j]].border = "selectErrorBorder";
          }
        }else if(props.array[j] === "customerData"){
          //Checking for empty fields
          if(dataArr[i][props.array[j]].value === ""){
            //Setting boolean
            errorObj.errorsDetected = true

            //Setting border style
            dataArr[i][props.array[j]].border = "buttonErrorBorder";
          }
        }else{
          //Checking for empty fields
          if(dataArr[i][props.array[j]].value === ""){
            //Setting boolean
            errorObj.errorsDetected = true

            //Setting border style
            dataArr[i][props.array[j]].border = "errorBorder";
          }
        }
      }
    }

    //Setting data array
    errorObj.array = dataArr;

    //Returning object
    return errorObj;
  }
}
