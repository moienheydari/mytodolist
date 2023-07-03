const retData = localStorage.getItem('myData');
let data = retData ? JSON.parse(retData) : {
    username : 'No One',
    tasks : []
};

export default data; 