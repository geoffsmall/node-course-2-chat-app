var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    socket.emit('createMessage',{
        from: 'geoff@example.com',
        text: 'Creating a message'
    })
});

socket.on('disconnect', function(){
    console.log('Disconnected to server');
});

/*
socket.on('newEmail', function(email){
    console.log('New email', email);
});
*/



socket.on('newMessage', function(newMessage){
    console.log('newMessage',newMessage);
})