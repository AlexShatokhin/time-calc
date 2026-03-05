import { convertDecimalToTime, formatTime, isValidTime } from '../timeUtils';

describe("1) check toBe and toEqual", () => {
    test("toBe", () => {
        const result = convertDecimalToTime(2.5);
        expect(result).toBe({ hours: '02', minutes: '30' }); 
    });

    test("toEqual", () => {
        const result = convertDecimalToTime(2.5);
        expect(result).toEqual({ hours: '02', minutes: '30' }); 
    });
})

describe("2) check Set values", () => {
    test("failed", () => {
        const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
        const uniqueSet = new Set(arrayWithDuplicates);
        expect(uniqueSet.size).toBe(arrayWithDuplicates.length);
    })

    test("passed", () => {
        const arrayWithoutDuplicates = [1, 2, 3, 4, 5];
        const uniqueSet = new Set(arrayWithoutDuplicates);
        expect(uniqueSet.size).toBe(arrayWithoutDuplicates.length);
    })
})

describe("3) check isNull and isUndefined in array", () => {
    test("isNull", () => {
        const arrayWithNull = [1, 2, null, 4, 5];
        expect(arrayWithNull).toContain(null);
    })

    test("isUndefined", () => {
        const arrayWithUndefined = [1, 2, undefined, 4, 5];
        expect(arrayWithUndefined).toContain(undefined);
    })
})

describe("4) stringAssert analog", () => {
    test("to Contain", () => {
        const {hours, minutes} = convertDecimalToTime(2.5);
        expect(hours).toBe("02"); 
        expect(minutes).toBe("30"); 
    })

    test("to Match", () => {
        const time = formatTime(9, 5);
        expect(time).toMatch(/^\d{2}:\d{2}$/);
    })

    test("not to Contain", () => {
        const time = formatTime(9, 5);
        expect(time).not.toContain("00");
    })

    test("not to Match", () => {
        const time = formatTime(9, 5);
        expect(time).not.toMatch(/^\d{3}:\d{2}$/);
    })
})

describe("5) check not string matchers", () => {
    // toBeTruthy, toBeFalsy, toBeNull, toBeUndefined, toBeNaN
    test("toBeTruthy", () => {
        const value = isValidTime(12, 30);
        expect(value).toBeTruthy();
    })

    test("toBeFalsy", () => {
        const value = isValidTime(25, 30);
        expect(value).toBeFalsy();
    })

    test("toBeLessThan", () => {
        const {hours} = convertDecimalToTime(2.5);
        expect(+hours).toBeLessThan(25)
    })

    test("toHaveProperty", () => {
        const value = convertDecimalToTime(2.5);
        expect(value).toHaveProperty("hours")
    })
})