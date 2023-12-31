import React, { Key, useState } from "react";
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
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AddLessonProps } from "./AddLessonProps";
import { DesktopDateTimePicker } from "@mui/x-date-pickers";
import "dayjs/locale/nl-be";

export default function AddLesson({ setLesson }: AddLessonProps) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [location, setLocation] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false);
    const id: Key = `KarateLesson${type}${date?.format("DDMMYYYY")}`;
    if (date == null) {
      const day = new Date();
      day.setDate(day.getDate() - 1);
    }
    setLesson(id, {
      id,
      date: date?.format("DD/MM/YYYY") ?? dayjs(new Date()).format("DD/MM/YYYY"),
      type,
      location,
      expired: !date?.isAfter(dayjs(date)),
      participants: [],
    });
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  const locale = "nl-be";

  const handleDateChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        color="inherit"
        data-cy="lessons-add-lesson-button"
      >
        Add Lesson
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle data-cy="lessons-add-lesson-card-title">Add a new Lesson</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new lesson by providing a date and a lesson type
          </DialogContentText>
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
                data-cy="lessons-add-lesson-card-lesson-type"
              >
                <MenuItem
                  value="Standard"
                  data-cy="lessons-add-lesson-card-lesson-type-standard"
                >
                  Standard
                </MenuItem>
                <MenuItem value="Kumite">Kumite</MenuItem>
                <MenuItem value="Kihon">Kihon</MenuItem>
                <MenuItem value="Kobudo">Kobudo</MenuItem>
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
                data-cy="lessons-add-lesson-card-lesson-location"
              >
                <MenuItem
                  value="Maria-Aalter"
                  data-cy="lessons-add-lesson-card-lesson-location-mariaaalter"
                >
                  Maria-Aalter
                </MenuItem>
                <MenuItem value="Wingene">Wingene</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br />
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={locale}
          >
            <DesktopDateTimePicker
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={handleDateChange}
              renderInput={(props) => (
                <TextField
                  {...props}
                  data-cy="lessons-add-lesson-card-lesson-date"
                />
              )}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="inherit"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAdd}
            color="inherit"
            data-cy="lessons-add-lesson-card-lesson-add"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
