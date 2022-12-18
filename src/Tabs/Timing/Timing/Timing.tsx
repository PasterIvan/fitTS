import {useAppDispatch, useAppSelector} from '../../../hooks/hooks';
import React, {useCallback, useEffect} from 'react';
import {getTimesTC, setSelectedDate} from '../../../store/bll/dateReduser';
import {DatePicker} from 'react-native-week-month-date-picker';
import {addDays} from 'date-fns';
import tw from 'twrnc';
import {DateInCalendar} from './DateInCalendar/DateInCalendar';
import {KeyboardAvoidingView} from 'react-native';

export const Timing = () => {
  const dispatch = useAppDispatch();
  const minDate = new Date();

  const selectedDate = useAppSelector(state => state.date.dateForCalendar);
  const dateId = useAppSelector(state => state.date.date.dateId);

  useEffect(() => {
    dispatch(getTimesTC({dateId}));
  }, [dispatch, dateId]);

  const setDate = useCallback(
    (date: any) => {
      dispatch(setSelectedDate(date));
    },
    [dispatch],
  );

  return (
    // @ts-ignore
    <DatePicker
      minDate={minDate}
      maxDate={addDays(minDate, 120)}
      // markedDates={[minDate, addDays(new DateInCalendar(), 2)]}
      selectedDate={selectedDate}
      onDateChange={date => {
        setDate(date);
      }}
      disabledDates={[addDays(new Date(), 1), addDays(new Date(), 3)]}
      // allowsPastDates={false}
      locale="ru"
      theme={{
        primaryColor: 'orange',
      }}>
      <KeyboardAvoidingView behavior="padding" style={tw`flex-1`}>
        <DateInCalendar />
      </KeyboardAvoidingView>
    </DatePicker>
  );
};
