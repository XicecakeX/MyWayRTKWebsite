module.exports = {
  /**filterProps Function*/
  filterProps: (arr, count, type) => {
    //Declaring fields
    var filtered = {array: [], count: 0};

    //Checking type
    if(type === 1){
      //Iterating through array
      for(var i = 0; i < count; i++){
        //Checking prop name
        if(arr[i] !== "phoneMask" && arr[i] !== "mobile" && arr[i] !== "mobileMask" && arr[i] !== "address2"){
          //Adding to array
          filtered.array.push(arr[i]);

          //Increasing counter
          filtered.count++;
        }
      }
    }else{
      //Iterating through array
      for(var j = 0; j < count; j++){
        //Checking prop name
        if(arr[j] !== "dataID" && arr[j] !== "phoneMask" && arr[j] !== "mobile" && arr[j] !== "mobileMask" && arr[j] !== "address2"){
          //Adding to array
          filtered.array.push(arr[j]);

          //Increasing counter
          filtered.count++;
        }
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
    var count = obj.props.count;
    var array = obj.props.array;
    var target = obj.target;
    var val = obj.val;

    //Iterating through props
    for(var i = 0; i < count; i++){
      //Checking prop name
      if(array[i] === target){
        //Checking target
        if(target === "state"){
          //Setting data
          dataObj[target] = {value: val, border: "defaultSelectBorder"};
        }else{
          //Setting data
          dataObj[target] = {value: val, border: "defaultBorder"};
        }
      }else{
        //Setting data
        dataObj[array[i]] = {value: data[array[i]].value, border: data[array[i]].border};
      }
    }

    //Returning data
    return dataObj;
  },
  /**errorCheck Function*/
  errorCheck: (dataArr, checked) => {
    //Declaring fields
    var arraySize = dataArr.length;
    var F = module.exports;
    var errorObj = {array: [], errorsDetected: false};

    //Calculating length
    if(checked === true){
      //Setting size
      arraySize = arraySize - 1;
    }

    //Iterating through array
    for(var i = 0; i < arraySize; i++){
      //Declaring fields
      var props = F.filterProps(Object.getOwnPropertyNames(dataArr[i]), F.countProps(dataArr[i]), 1);

      //Iterating through props
      for(var j = 0; j < props.count; j++){
        //Checking for select component
        if(props.array[j] === "state"){
          //Checking for empty fields
          if(dataArr[i][props.array[j]].value === "NONE"){
            //Setting boolean
            errorObj.errorsDetected = true

            //Setting border style
            dataArr[i][props.array[j]].border = "selectErrorBorder";
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
