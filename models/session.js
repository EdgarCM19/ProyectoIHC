class Session {
    constructor(id, date, startHour, endHour){
        this.id = id;
        console.log('!!!!!!', typeof date);
        this.date = date;
        this.startHour = startHour;
        this.endHour = endHour;
    }
}

const sessions_data = [
    new Session(0, { day: '12', month: '02', year: '2021' }, { hour: 12, minutes: 30 }, { hour: 12, minutes: 45 }),
    new Session(1, { day: '12', month: '02', year: '2021' }, { hour: 12, minutes: 30 }, { hour: 12, minutes: 45 }),
    new Session(2, { day: '12', month: '02', year: '2021' }, { hour: 12, minutes: 30 }, { hour: 12, minutes: 45 }),
    new Session(3, { day: '12', month: '02', year: '2021' }, { hour: 12, minutes: 30 }, { hour: 12, minutes: 45 }),
]


const getSessionById = (id) => sessions_data.filter(e => e.id === id);

export { getSessionById, sessions_data};
export default Session;