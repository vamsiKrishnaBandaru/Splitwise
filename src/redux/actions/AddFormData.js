const AddFormData = (formData) => {
   return {
      type: 'ADD_USER_DATA',
      payload: {
         ...formData
      }
   }
}

export default AddFormData;
