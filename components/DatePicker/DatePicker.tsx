import {CalendarDaysIcon, ExclamationCircleIcon} from '@heroicons/react/24/outline';
import {useDatePicker} from '@react-aria/datepicker';
import {useDatePickerState} from '@react-stately/datepicker';
import {useRef} from 'react';
import {FieldButton} from './Button';
import {Calendar} from './Calendar';
import {DateField} from './DateField';
import {Popover} from './Popover';

export function DatePicker(props: any) {
  let state = useDatePickerState(props);
  let ref = useRef<HTMLDivElement>(null);
  let {groupProps, labelProps, fieldProps, buttonProps, dialogProps, calendarProps} = useDatePicker(
    props,
    state,
    ref
  );

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className="flex group">
        <div className="bg-white border border-gray-300 group-hover:border-gray-400 transition-colors rounded-l-md pr-10 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600 p-1 relative flex items-center">
          <DateField {...fieldProps} />
          {state.validationState === 'invalid' && (
            <ExclamationCircleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarDaysIcon className="w-5 h-5 text-gray-700 group-focus-within:text-violet-700" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover {...dialogProps} isOpen={state.isOpen} onClose={() => state.setOpen(false)}>
          <Calendar {...calendarProps} />
        </Popover>
      )}
    </div>
  );
}
