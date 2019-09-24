export default class Time {
    public static format(date: Date, pattern: string) {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const weekcn = ['日', '一', '二', '三', '四', '五', '六'];
        const fo = {
            yyyy: date.getFullYear(),
            M: date.getMonth() + 1,
            d: date.getDate(),
            Day: date.getDay(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
        };
        const items = {
            yy: fo.yyyy % 100,
            MM: Math.floor(fo.M / 10).toString() + fo.M % 10,
            dd: Math.floor(fo.d / 10).toString() + fo.d % 10,
            DD: week[fo.Day],
            DC: weekcn[fo.Day],
            D: week[fo.Day].slice(0, 3),
            hh: Math.floor(fo.h / 10).toString() + fo.h % 10,
            mm: Math.floor(fo.m / 10).toString() + fo.m % 10,
            ss: Math.floor(fo.s / 10).toString() + fo.s % 10,
        };
        Object.keys(items).forEach(key => {
            fo[key] = items[key];
        });
        return pattern.replace(/(yyyy|yy|MM|M|dd|d|DD|DC|D|hh|h|mm|m|ss|s)/g, (mat, item) => fo[item]);
    }
}
