const retData = localStorage.getItem('myData');
let data = retData ? JSON.parse(retData) : {
    username : 'none',
    tasks : []
};

export function eraseData () {
    alert("dawd");
    data = {
        username : 'none',
        tasks : []
    };
    localStorage.setItem('myData', JSON.stringify(data));
    let data = retData ? JSON.parse(retData) : {
        username : 'none',
        tasks : []
    };
};

export default data; 