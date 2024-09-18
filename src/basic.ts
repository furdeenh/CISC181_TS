/**
 * Converts a temperature in Celsius to Fahrenheit using the formula F = (C * 9 / 5) + 32.
 * @param celsius A temperature in Celsius
 * @returns The temperature in Fahrenheit
 */
export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

/**
 * Adds two numbers together only if they are positive numbers. If either number is negative, return 0.
 * @param a A number
 * @param b Another number
 * @returns The sum of the numbers, if they were both positive. Otherwise, returns 0.
 */
export function addIfPositive(a: number, b: number): number {
    if (a > 0 && b > 0) {
        return a + b;
    }
    return 0;
}

/**
 * Returns the absolute difference between a and b (|a - b|). So difference(10, 5) === 5 and difference(5, 10) === 5.
 * @param a A number
 * @param b Another number
 * @returns The difference between a and b
 */
export function difference(a: number, b: number): number {
    return Math.abs(a - b);
}

/**
 * Calculates the area of a circle with the given radius.
 * @param radius The radius of the circle
 * @returns The area of the circle
 */
export function circleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
}

/**
 * Given the current temperature and the weather, returns what you should wear.
 * If it's sunny and over 70 degrees, return 't-shirt'.
 * If it's over 50 degrees, return 'sweater'.
 * Otherwise, return 'jacket'.
 * @param temperature
 * @param weather
 * @returns
 */
export function whatToWear(temperature: number, weather: string): string {
    if (weather === "sunny" && temperature > 70) {
        return "t-shirt";
    } else if (temperature > 50) {
        return "sweater";
    } else {
        return "jacket";
    }
}

/**
 * Given a grade, returns either "failing" or "passing" depending on if
 * the grade is an A, B, C (passing) or D, F (failing). No other grades
 * will be passed in.
 *
 * @param grade
 * @returns
 */

export function getGradeMessage(grade: string): string {
    if (grade === "A" || grade === "B" || grade === "C") {
        return "passing";
    } else if (grade === "D" || grade === "F") {
        return "failing";
    }

    return "";
}

/**
 * Given a time in the format HH:MM, returns the number of minutes since midnight.
 * There are 60 minutes in an hour, so 1:00 is 60, 2:30 is 150, etc.
 *
 * @param time A time in the format HH:MM
 * @returns The number of minutes since midnight
 */
export function parseTime(time: string): number {
    const time_div = time.split(":");
    const hours = Number(time_div[0]);
    const minutes = Number(time_div[1]);

    return hours * 60 + minutes;
}

/**
 * Converts a word to Pig Latin. If the word starts with a vowel, add "ay" to the end.
 * Otherwise, move the first letter to the end, and add "ay".
 * @param word
 * @returns
 */
export function pigLatin(word: string): string {
    const vowels = ["a", "e", "i", "o", "u"];
    const first_letter = word[0];
    if (vowels.includes(first_letter)) {
        return word + "ay";
    } else {
        return word.slice(1) + first_letter + "ay";
    }
}

/**
 * Given a word and a phrase, return the phrase with the first word removed.
 * Remove any extra spaces at the beginning of the phrase, after removing the word.
 * If the phrase does not start with the word, return the phrase unchanged.
 * @param phrase A phrase
 * @returns The phrase with the first word removed
 */
export function chompString(word: string, phrase: string): string {
    if (phrase.startsWith(word)) {
        return phrase.slice(word.length).trim();
    }
    return phrase;
}
