const retData = localStorage.getItem('myData');
let data = retData ? JSON.parse(retData) : {
    username : 'none',
    tasks : []
};

export default data; 