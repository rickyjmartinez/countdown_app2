import dayjs from 'dayjs'; 

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
  const timestampDayjs = dayjs(timestampMs);
  const nowDayjs = dayjs();

  // Check if the target timestamp is in the future
  if (timestampDayjs.isAfter(nowDayjs)) {
    return {
      seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
      minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
      hours: getRemainingHours(nowDayjs, timestampDayjs),
      days: getRemainingDays(nowDayjs, timestampDayjs),
    };
  } else {
    // The target timestamp is in the past, so return all countdown values as 0
    return {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    };
  }
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
  const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return seconds; 
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
  const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return minutes; 
}

function getRemainingHours(nowDayjs, timestampDayjs) {
  const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
  return hours; 
}

function getRemainingDays(nowDayjs, timestampDayjs) {
  const days = timestampDayjs.diff(nowDayjs, 'days');
  return days; 
}