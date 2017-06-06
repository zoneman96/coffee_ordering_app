$("#pickupTime").flatpickr({
    enableTime: true,
    noCalendar: true,

    enableSeconds: false, // disabled by default

    time_24hr: false, // AM/PM time picker is used by default

    // default format
    dateFormat: "h:i K", 

    // initial values for time. don't use these to preload a date
    // defaultHour: 12,
    // defaultMinute: 0

    //Min Time
    minDate: moment(Date.now()).add(10, "m").format("HH:mm"),

    //Max Time (4:50PM)
    maxDate: "16:50",

    // Preload time with defaultDate instead:
    defaultDate: moment(Date.now()).add(10, "m").format("HH:mm")
});
