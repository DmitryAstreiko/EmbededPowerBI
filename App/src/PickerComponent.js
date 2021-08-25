//https://material-ui-pickers.dev/demo/timepicker

import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import DateFnsUtils from "@date-io/date-fns";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const localeMap = {
  en: enLocale,
  ru: ruLocale,
};

class RuLocalizedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, "LLLL", { locale: this.locale });
  }

  getDatePickerHeaderText(date) {
    return format(date, "dd MMMM", { locale: this.locale });
  }
}

const localeUtilsMap = {
  en: DateFnsUtils,
  ru: RuLocalizedUtils,
};

const localeFormatMap = {
  en: "MMMM d, yyyy",
  ru: "d MMM yyyy",
};

const localeCancelLabelMap = {
  en: "cancel",
  ru: "отмена",
};

function DateFnsLocalizationExample(props) {
  const [locale, setLocale] = useState("ru");
  const [anchorEl, setAnchorEl] = useState(null);


  const handleMenuOpen = useCallback(e => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  }, []);

  const selectLocale = useCallback(locale => {
    setLocale(locale);
    setAnchorEl(null);
  }, []);  

  return (
    <MuiPickersUtilsProvider utils={localeUtilsMap[locale]} locale={localeMap[locale]} >
      <DatePicker
        value={props.selectedDate}
        onChange={(value) => {props.onSelected(value)}}

        format={localeFormatMap[locale]}
        cancelLabel={localeCancelLabelMap[locale]}
        label={props.labelvalue}
        InputProps={{
          endAdornment: (
            <IconButton
              aria-label="Select locale"
              onClick={handleMenuOpen}
              aria-owns={anchorEl ? "locale-menu" : undefined}
            >
              <MoreIcon />
            </IconButton>
          ),
        }}
      />

      <Menu
        id="locale-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {Object.keys(localeMap).map(localeItem => (
          <MenuItem
            key={localeItem}
            selected={localeItem === locale}
            onClick={() => selectLocale(localeItem)}
          >
            {localeItem}
          </MenuItem>
        ))}
      </Menu>
    </MuiPickersUtilsProvider>
  );
}

export default DateFnsLocalizationExample;