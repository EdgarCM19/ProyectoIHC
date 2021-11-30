import HomeIcon from "./HomeIcon";
import CourseIcon from "./CourseIcon"
import MeetIcon from "./MeetingIcon";
import LogoutIcon from "./LogoutIcon";
import MenuIcon from "./MenuIcon";
import NotificationIcon from './NotificationIcon'
import ArrowIcon from './Arrow'
import CalendarIcon from "./CalendarIcon";
import ClockIcon from "./ClockIcon";
import LogoBold from './LogoBold'

const getIcon = (icon) => {
    switch(icon){
        case 'home':
            return HomeIcon;
        case 'course':
            return CourseIcon;
        case 'meet':
            return MeetIcon;
        case 'logout':
            return LogoutIcon;
    }
    return HomeIcon;
}

export { getIcon, HomeIcon, CourseIcon, MeetIcon, LogoutIcon, MenuIcon, NotificationIcon, ArrowIcon, CalendarIcon, ClockIcon, LogoBold };