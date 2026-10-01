// Batch timetable (Programs page) and results board (Results page).
// Edit here and redeploy. Leave a batch field empty to show "Ask us".
// Results: add `year` to enable the year filter; `photo`/`video` take a /public path.
export const SITE_CONTENT = {
  batches: [
    { id: 'c12', name: 'Class 12 · JEE & NEET', start: '12 March', timing: '', fee: 'From ₹90,000 / year', mode: 'Offline + online' },
    { id: 'c11', name: 'Class 11 · JEE & NEET', start: '6 April', timing: '', fee: 'From ₹85,000 / year', mode: 'Offline + online' },
    { id: 'drop', name: 'Droppers · JEE & NEET', start: '', timing: '', fee: 'From ₹95,000 / year', mode: '' },
    { id: 'c10', name: 'Class 10 · Maths & Science', start: '12 March', timing: '', fee: '', mode: 'Offline + online' },
    { id: 'c9', name: 'Class 9 · Maths & Science', start: '14 March', timing: '', fee: '', mode: 'Offline + online' },
    { id: 'bio', name: 'Biology with Konika Ma’am · Class 9–12 & NEET', start: '', timing: '', fee: '', mode: 'Offline + online' },
  ],
  results: [
    { id: 'aaryan', name: 'Aaryan Jain', exam: 'JEE Main', result: '99.48 percentile', year: '', photo: '', video: '/videos/review1.mp4' },
    { id: 'shaoni', name: 'Shaoni Mukherjee', exam: 'JEE Main & Advanced', result: 'Qualified both', year: '', photo: '', video: '/videos/review2.mp4' },
    { id: 'shaurya', name: 'Shaurya Sisodia', exam: 'JEE Main', result: '99+ percentile', year: '', photo: '', video: '/videos/review3.mp4' },
    { id: 'abhay', name: 'Abhay Rajvanshi', exam: 'JEE Main', result: 'Top ranker', year: '', photo: '', video: '/videos/review4.mp4' },
  ],
};
