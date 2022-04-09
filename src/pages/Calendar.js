import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';

import { useForm, Controller } from 'react-hook-form';

//
import { useState, useRef, useEffect } from 'react';
// @mui
import {
  FormControl,
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
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { isBefore } from 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

// redux
// import { useDispatch, useSelector } from '../redux/store';
import { getEvents, openModal, closeModal, updateEvent, selectEvent, selectRange } from '../redux/slices/calendar';
// routes
// import { PATH_DASHBOARD } from '../routes/paths';
// hooks
import useSettings from '../hooks/useSettings';
import useResponsive from '../hooks/useResponsive';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { DialogAnimate } from '../components/animate';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';

// sections
import { CalendarForm, CalendarStyle, CalendarToolbar } from '../sections/@dashboard/calendar';

// ----------------------------------------------------------------------

const selectedEventSelector = (state) => {
  const { events, selectedEventId } = state.calendar;
  // if (selectedEventId) {
  //   return events.find((_event) => _event.id === selectedEventId);
  // }
  return null;
};
const COLOR_OPTIONS = [
  '#00AB55', // theme.palette.primary.main,
  '#1890FF', // theme.palette.info.main,
  '#54D62C', // theme.palette.success.main,
  '#FFC107', // theme.palette.warning.main,
  '#FF4842', // theme.palette.error.main
  '#04297A', // theme.palette.info.darker
  '#7A0C2E', // theme.palette.error.darker
];
export default function Calendar() {
  const { themeStretch } = useSettings();

  // const dispatch = useDispatch();

  const isDesktop = useResponsive('up', 'sm');

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState(isDesktop ? 'dayGridMonth' : 'listWeek');

  const [events, setEvents] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(false);

  const [theTitle, setTheTitle] = useState('');

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [color, setColor] = useState('#7A0C2E');

  useEffect(() => {
    setEvents([
      { id: 0, title: 'event 1', date: '2022-04-01' },
      { id: 1, title: 'event 2', date: '2022-04-02' },
    ]);
  }, []);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? 'dayGridMonth' : 'listWeek';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleChangeView = (newView) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
    // dispatch(selectRange(arg.start, arg.end));
  };

  const handleSelectEvent = (arg) => {
    // dispatch(selectEvent(arg.event.id));
  };

  const handleResizeEvent = async ({ event }) => {
    // try {
    //   dispatch(
    //     updateEvent(event.id, {
    //       allDay: event.allDay,
    //       start: event.start,
    //       end: event.end,
    //     })
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleDropEvent = async ({ event }) => {
    // try {
    //   dispatch(
    //     updateEvent(event.id, {
    //       allDay: event.allDay,
    //       start: event.start,
    //       end: event.end,
    //     })
    //   );
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleAddEvent = () => {
    setIsOpenModal(true);
  };

  const handleSubmit = () => {
   // alert(startDate.toLocaleDateString())
    const start12=reformatDate(startDate)
    const end12=reformatDate(endDate)
    alert(start12)
    alert(end12)
    const newEvent = {
      id: events.length,
      title: theTitle, 
      date: start12,
    };
    const allevents = events;
    allevents.push(newEvent);

    setEvents(allevents);
    alert(events.length)

    setTheTitle("")
    setStartDate(new Date)
    setEndDate(new Date)
  
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const reformatDate=(theDate)=>{
    const date1= theDate.toLocaleDateString().split('/')
    if(date1[1]<10){
      date1[1]=`0${date1[1]}`
    }
    if(date1[0]<10){
      date1[0]=`0${date1[0]}`
    }
    return (`${date1[2]}-${date1[0]}-${date1[1]}`)
   
  }
  const isDateError = isBefore(new Date(endDate), new Date(startDate));

  return (
    <Page title="Calendar">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Card>
        <FormControl>
            <Stack   spacing={4} direction="row">
              <TextField label="Title" type="text" value={theTitle} onChange={(e) => setTheTitle(e.target.value)} />

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                   <DatePicker
                      label="Start date" 
                      value={startDate} 
                      onChange={(date) => setStartDate(date)}     
                      inputFormat="yyyy-MM-dd"
                      renderInput={(params) => <TextField {...params} />}
                     />
                  <DatePicker
                      label="End date"
                      value={endDate} 
                      onChange={(date) => setEndDate(date)}      
                      inputFormat="yyyy-MM-dd"
                      renderInput={(params) => <TextField {...params} />}
                    />  
                
             </LocalizationProvider>
              <DialogActions>
              <Box sx={{ flexGrow: 1 }} />

              <Button variant="outlined" color="inherit">
                Cancel
              </Button>

              <Button type="submit" variant="contained" onClick={handleSubmit}>
                Add
              </Button>
            </DialogActions>
            </Stack>

           
          </FormControl>
          <CalendarStyle>
            <CalendarToolbar
              date={date}
              view={view}
              onNextDate={handleClickDateNext}
              onPrevDate={handleClickDatePrev}
              onToday={handleClickToday}
              onChangeView={handleChangeView}
            />
            <FullCalendar
              weekends
              editable
              droppable
              selectable
              events={events}
              ref={calendarRef}
              rerenderDelay={10}
              initialDate={date}
              initialView={view}
              dayMaxEventRows={3}
              eventDisplay="block"
              headerToolbar={false}
              allDayMaintainDuration
              eventResizableFromStart
              select={handleSelectRange}
              eventDrop={handleDropEvent}
              eventClick={handleSelectEvent}
              eventResize={handleResizeEvent}
              height={isDesktop ? 720 : 'auto'}
              plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
            />
          </CalendarStyle>
        </Card>
      </Container>
    </Page>
  );
}