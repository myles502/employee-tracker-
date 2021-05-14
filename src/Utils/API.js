import axios from "axios";

export default {
  // Gets all users
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  }
};

