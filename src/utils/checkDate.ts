export const checkDate = () => {
	const currentDate = new Date(Date.now());
	const weekStarts = {
		// TODO: change month back to 5 later
		week1: new Date(Date.UTC(2022, 4, 10, 4, 0, 0)),
		week2: new Date(Date.UTC(2022, 4, 17, 4, 0, 0)),
		week3: new Date(Date.UTC(2022, 4, 24, 4, 0, 0)),
		week4: new Date(Date.UTC(2022, 4, 31, 4, 0, 0))
	};

	const weekEnds = {
		// TODO: change month back to 6? later
		week1: new Date(Date.UTC(2022, 8, 16, 4, 0, 0)),
		week2: new Date(Date.UTC(2022, 8, 23, 4, 0, 0)),
		week3: new Date(Date.UTC(2022, 8, 30, 4, 0, 0)),
		week4: new Date(Date.UTC(2022, 9, 6, 4, 0, 0))
	};

	const checkStartDate = () => {
		// check from furthest date to earliest
		if (currentDate.getTime() > weekStarts.week4.getTime()) return 4;
		else if (currentDate.getTime() > weekStarts.week3.getTime()) return 3;
		else if (currentDate.getTime() > weekStarts.week2.getTime()) return 2;
		else if (currentDate.getTime() > weekStarts.week1.getTime()) return 1;
		else return 0;
	};

	const checkEndDate = (week: number) => {
		console.log('week: ', week);
		console.log('currentDate: ', currentDate);
		console.log('week1ends: ', weekEnds.week1);
		console.log(
			'comparing dates: ',
			currentDate.getTime() > weekEnds.week1.getTime()
		);
		if (week === 4 && currentDate.getTime() > weekEnds.week4.getTime()) {
			return false;
		} else if (
			week === 3 &&
			currentDate.getTime() > weekEnds.week3.getTime()
		) {
			return false;
		} else if (
			week === 2 &&
			currentDate.getTime() > weekEnds.week2.getTime()
		) {
			return false;
		} else if (
			week === 1 &&
			currentDate.getTime() > weekEnds.week1.getTime()
		) {
			return false;
		} else {
			return true;
		}
	};

	return { checkStartDate, checkEndDate };
};
