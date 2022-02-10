import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';
import {NavHeader} from '../../components';

export class LearnCalendar extends Component {
  state = {
    date: '',
    allDates: [
      '2022-02-11',
      '2022-02-15',
      '2022-02-20',
      '2022-02-22',
      '2022-02-23',
      '2022-02-26',
    ],
    markedDates: {},
  };

  componentDidMount = () => {
    this.mark(this.state.allDates);
  };

  mark = dates => {
    let markedDate = [];

    // '2022-02-10': { marked: true},

    dates.forEach(item => {
      markedDate = {...markedDate, [item]: {marked: true}};
    });

    markedDate = {
      ...markedDate,
      [this.state.date]: {selected: true, marked: true},
    };

    this.setState({markedDates: markedDate});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Date Time Picker'}
          leftIc={'ios-arrow-back'}
          leftPress={() => {
            this.props.navigation.goBack();
          }}
        />

        <Calendar
          onDayPress={day => {
            this.setState(
              {
                date: day.dateString,
              },
              () => {
                this.mark(this.state.allDates);
              },
            );
          }}
          markedDates={this.state.markedDates}
          // minDate={moment(new Date() - 1).format('YYYY-MM-DD')}
          // maxDate={'2022-02-15'}

          //   markedDates={{
          //     '2022-02-12': {selected: true, marked: true, selectedColor: 'red'},
          //     '2022-02-13': {marked: true},
          //     '2022-02-14': {marked: true, dotColor: 'red'},
          //     '2022-02-15': {disabled: true, disableTouchEvent: true},
          //   }}
          theme={{
            backgroundColor: '#fff',
            calendarBackground: '#fff',
            textSectionTitleColor: 'green',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#fff',
            todayTextColor: '#fff',
            todayBackgroundColor: 'grey',

            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: 'blue',
            selectedDotColor: '#fff',
            arrowColor: 'blue',
            monthTextColor: 'red',
            textDayFontSize: h('2'),
            textMonthFontSize: h('2'),
            textDayHeaderFontSize: h('2'),
          }}
        />
      </View>
    );
  }
}
