import { Key, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AddLessonProps } from "./AddLessonProps";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
//import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
//import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "dayjs/locale/nl-be";

export const AddLesson = ({ setLesson }: AddLessonProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
    const id: Key = "KarateLesson" + type + date?.format("DDMMYYYY");
    var day = new Date();
    day.setDate(day.getDate() - 1);
    setLesson(id, {
      id: id,
      date: date?.format("DD/MM/YYYY") ?? dayjs(new Date()).format("DD/MM/YYYY"),
      type: type,
      location: location,
      expired: !date?.isAfter(dayjs(day)),
    });
  };

  const [type, setType] = useState("");

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const [location, setLocation] = useState("");

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const locale = "nl-be";
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));

  const handleDateChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} color="inherit">
        Add Lesson
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a new Lesson</DialogTitle>
        <DialogContent>
          <DialogContentText>Create a new lesson by providing a date and a lesson type</DialogContentText>
          <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Lesson Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Style"
                onChange={handleTypeChange}
              >
                <MenuItem value={"Standard"}>Standard</MenuItem>
                <MenuItem value={"Kumite"}>Kumite</MenuItem>
                <MenuItem value={"Kihon"}>Kihon</MenuItem>
                <MenuItem value={"Kobudo"}>Kobudo</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={location}
                label="Location"
                onChange={handleLocationChange}
              >
                <MenuItem value={"Maria-Aalter"}>Maria-Aalter</MenuItem>
                <MenuItem value={"Wingene"}>Wingene</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="inherit">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
