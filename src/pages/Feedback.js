import { useState, useRef, useEffect } from 'react';
// @mui
import {
  FormControl,
  Typography,
  Card,
  Button,
  Container,
  DialogTitle,
  Box,
  Stack,
  Tooltip,
  TextField,
  IconButton,
  DialogActions,
  Switch,
  Paper,
  Divider
} from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import db from '../db'

import { handleSubmitFeed, handleUpdateFeed , handleDelete} from './FeedbacksFunctions';
// ----------------------------------------------------------------------

export default function Feedback() {
  const { themeStretch } = useSettings();
  const [id, setId]=useState("")
  const [name, setName]=useState("")
  const [comment, setComment]=useState("")
  const [feedbacks, setFeedbacks]=useState([])
  const [edit, setEdit]=useState(false)

  useEffect(() => db.Feedbacks.listenToFeedbacks(setFeedbacks), [])

  const handleSubmit=()=>{

    handleSubmitFeed({name, comment})
    handleCancel()
  }
  const handleCancel=()=>{
    setId("")
    setName("")
    setComment("")

    setEdit(false)
 }
 const handleEdit=(item)=>{
   setId(item.id)
   setName(item.name)
   setComment(item.comment)

 }
 const handleUpdate=()=>{

 handleUpdateFeed({id, name, comment})
  handleCancel()

 }
const handleDeleteLocally=(id)=>{
handleDelete(id)

}
  return (
    <Page title="Page Three">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h3" component="h1" paragraph>
          Feedback
        </Typography>
        <FormControl>
          <Stack spacing={4} direction="row">
            <TextField label="Name" type="text" value={name} 

            onChange={(e) => setName(e.target.value)} id="name" />
            <TextField label="Feedback" type="text" value={comment} 
            onChange={(e) => setComment(e.target.value)} id="comment" />
            <DialogActions>
              <Box sx={{ flexGrow: 1 }} />

              <Button variant="outlined" color="inherit" onClick={handleCancel}>
                Cancel
              </Button>

{!edit?<Button type="submit" variant="contained" onClick={handleSubmit} id="add">
                Add
              </Button>:<Button type="submit" variant="contained" onClick={handleUpdate}>
                Update
              </Button>}
            
            </DialogActions>
          </Stack>
        </FormControl>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
        },
      }}
    >
        {feedbacks.length>0?      
        
          feedbacks.map(comment=><Paper elevation={3} key={comment.id}>
            <Typography sx={{
              fontWeight:"bold",
              color:"#EBD168"
            }}>{comment.name}</Typography>
            <Divider/>
          <Typography>
            {comment.comment}
          </Typography>

          <Button variant="outlined" color="inherit"  onClick={()=>handleDeleteLocally(comment.id)}>
                Delete
              </Button>

              <Button type="submit" variant="contained" onClick={()=>handleEdit(comment)}>
                Edit
              </Button>
          </Paper>):<></>}
          </Box>

      </Container>
    </Page>
  );
}
