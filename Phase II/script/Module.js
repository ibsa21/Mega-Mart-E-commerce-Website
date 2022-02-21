 function user_data(f_name, l_name, email, mobile_num, username, password) {
    this.Name = f_name + l_name;
    this.email = email;
    this.mobile_num = mobile_num;
    this.username = username;
    this.password = password;
}
let text = "data loaded";

function load_dataFromLS(key, DataContainer) {

    let getData = [];
    getData = JSON.parse(localStorage.getItem(key));

    if (getData != null)
        DataContainer = getData;

    return DataContainer;
}

function push_data(DataContainer, data, counter, key) {
    console.log("push_data function exported")
    counter = DataContainer.length;

    DataContainer[counter] = data;
    localStorage.setItem(key, JSON.stringify(DataContainer));
}
function toggle_displays(display_visible, display_none) {
    display_visible.style.display = "block";
    display_none.style.display = "none";
  }

  function validate_login(DataContainer, username, password) {
    let isFound  =  false;
    
    for (var i = 0; i < DataContainer.length; i++) {
        if (username == DataContainer[i].username && password == DataContainer[i].password) {
          isFound = true;
          break;
        }
      }
    
    return isFound;

  }

export {user_data, load_dataFromLS, push_data, toggle_displays, text, validate_login};