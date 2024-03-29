import {getWeeksInMonth} from '@internationalized/date';
import {useCalendarGrid} from '@react-aria/calendar';
import {useLocale} from '@react-aria/i18n';
import {CalendarCell} from './CalendarCell';

export function CalendarGrid({state, ...props}: any) {
  let {locale} = useLocale();
  let {gridProps, headerProps, weekDays} = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table {...gridProps} cellPadding="0" className="flex-1">
      <thead {...headerProps} className="text-gray-600">
        <tr>
          {weekDays.map((day, index) => (
            <th className="text-center" key={index}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date: any, i: number) =>
                date ? <CalendarCell key={i} state={state} date={date} /> : <td key={i} />
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
