const OL_CALCS = {
    // 💰 Finance Logic
    emi: (p, r, n) => {
        let monthlyRate = r / 12 / 100;
        return (p * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    },
    sip: (p, r, n) => {
        let i = (r / 100) / 12;
        return p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    },
    gst: (amt, rate) => (amt * rate) / 100,

    // 💚 Health Logic
    bmi: (w, h) => w / (h * h), // Height in meters
    age: (dob) => {
        let diff = Date.now() - new Date(dob).getTime();
        return Math.abs(new Date(diff).getUTCFullYear() - 1970);
    },

    // ⚽ Sports Logic
    nrr: (runsSored, oversFaced, runsConceded, oversBowled) => {
        return (runsSored / oversFaced) - (runsConceded / oversBowled);
    }
};
export default OL_CALCS;
