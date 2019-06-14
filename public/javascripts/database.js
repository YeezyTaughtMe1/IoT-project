function createModel(sensorName, status) {
    var data = ({
                sensor: sensorName,
                status: 'state is ' + status,
                cause: 'remotely controlled through cloud'
            });
    addData(data);
}

function addData(data){
    $.ajax({
        type: 'POST',
        url: "/sensor",
        data: data
    });
}