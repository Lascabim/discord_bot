// delete.js

const deleteMessage = async (client, message) => {
  message.delete();
};
  
module.exports = { deleteMessage };  