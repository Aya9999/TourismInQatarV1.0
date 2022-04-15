import db from '../db';

const handleSubmitEvent= async ({ theTitle, eventdate }) => {

  const eventDate1=reformatDate(eventdate)
  db.Events.addEvent({ title: theTitle, date: eventDate1})
};
const reformatDate=(theDate)=>{
  const date1= theDate.toLocaleDateString().split('/')
  if(date1[1]<10){
    date1[1]=`0${date1[1]}`
  }
  if(date1[0]<10){
    date1[0]=`0${date1[0]}`
  }
  return (String(`${date1[2]}-${date1[0]}-${date1[1]}`))
 
}
const handleGetAll = async () => {
 const events= await db.Events.getAllEvents();
 return events
};

export { handleSubmitEvent, reformatDate, handleGetAll};
