const initialState = [
  { id: 0, name: "User1", email: "email@email.com", phone: 1234567890 },
  { id: 1, name: "User2 Name", email: "test@test.com", phone: 4567891230 },
];
const ContactReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      console.log("ADD_CONTACT", action.payload);
      return [...state, action.payload];
    case "EDIT_CONTACT":
      console.log("EDIT_CONTACT", action.payload);
      const updateContact = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateContact;
      return state;

    case "DELETE_CONTACT":
      console.log("DELETE_CONTACT", action.payload);
      const filteredData = state.filter(
        (contact) => contact.id !== action.payload
      );
      return filteredData;
    default:
      return state;
  }
};

export default ContactReducers;
