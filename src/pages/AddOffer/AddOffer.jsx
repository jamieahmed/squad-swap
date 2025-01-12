import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

const AddOffer = ({handleAddOffer}) => {
  const location = useLocation()
  const post = location.state.post
  const [formData, setFormData] = useState({
    price: '',
    comment: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  };
  

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleAddOffer(formData, post._id)
  }

  return (
    <Box sx={{ minWidth: 120 }} component="form" onSubmit={handleSubmit}>
      
      <FormControl variant="filled" fullWidth >
        <TextField
          id="offer-comment"
          label="Comment"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          name='comment' 
          onChange={handleChange}
          />
      </FormControl>

      <TextField 
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
        name="price"
        type="number"
        min="0"
        label="Price"
        variant='filled'
        fullWidth
        onChange={handleChange} 
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Make Offer
      </Button>

    </Box>
  );
}

export default AddOffer