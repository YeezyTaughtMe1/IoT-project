function createModel(sensorName) {
    var data = ({
                sensor: sensorName,
                status: 'state is flipped',
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